// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./ExternalMetadata.sol";

contract Selections is Ownable, ERC2981, ERC721 {
    bool public paused = false;
    uint256 totalSupply = 0;
    uint256 public priceToMint = 0.0025 ether;
    address payable public proceedRecipient;
    address public externalMetadata;

    constructor(address externalMetadata_) ERC721("Selections", "SEL") {
        updateExternalMetadata(externalMetadata_);
        updateProceedRecipient(payable(msg.sender));
    }

    receive() external payable {
        revert("no receive thank you");
    }

    fallback() external {
        revert("no fallback thank you");
    }

    event EthMoved(
        address indexed to,
        bool indexed success,
        bytes returnData,
        uint256 amount
    );

    function makePayment(uint256 payment) internal {
        require(msg.value >= payment, "Incorrect payment");
        require(proceedRecipient != address(0), "Invalid recipient");
        (bool sent, bytes memory data) = proceedRecipient.call{value: payment}(
            ""
        );
        emit EthMoved(proceedRecipient, sent, data, payment);
    }

    function mint() internal {
        totalSupply += 1;
        _mint(msg.sender, totalSupply);
        require(msg.value >= priceToMint, "Incorrect payment");
        require(proceedRecipient != address(0), "Invalid recipient");
        (bool sent, bytes memory data) = proceedRecipient.call{
            value: priceToMint
        }("");
        emit EthMoved(proceedRecipient, sent, data, priceToMint);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public pure override(ERC2981, ERC721) returns (bool) {
        return
            interfaceId == type(IERC165).interfaceId ||
            interfaceId == type(IERC1155).interfaceId ||
            interfaceId == type(IERC1155MetadataURI).interfaceId ||
            interfaceId == type(IERC2981).interfaceId ||
            interfaceId == bytes4(0x49064906); // IERC4906 MetadataUpdate
    }

    function tokenURI(uint256 id) public view override returns (string memory) {
        return ExternalMetadata(externalMetadata).getMetadata(id);
    }

    // function emitBatchMetadataUpdate() public onlyOwner {
    //     bytes32 topic = keccak256("BatchMetadataUpdate(uint256,uint256)");
    //     uint256 totalSupply = 0; //__totalSupply();
    //     bytes memory data = abi.encode(0, totalSupply);
    //     bytes32[] memory topics = new bytes32[](1);
    //     topics[0] = topic;
    //     // emitGenericEvent(topics, data);
    // }

    // function emitMetadataUpdate(uint256 tokenId) internal {
    //     bytes32 topic = keccak256("MetadataUpdate(uint256)");
    //     bytes memory data = abi.encode(tokenId);
    //     bytes32[] memory topics = new bytes32[](1);
    //     topics[0] = topic;
    //     // emitGenericEvent(topics, data);
    // }

    function updateExternalMetadata(
        address externalMetadata_
    ) public onlyOwner {
        externalMetadata = externalMetadata_;
    }

    /// @dev if mint fails to send eth to splitter, admin can recover
    // This should not be necessary but Berlin hardfork broke split before so this
    // is extra precaution.
    function recoverUnsuccessfulPayment(address payable _to) public onlyOwner {
        uint256 amount = address(this).balance;
        (bool sent, bytes memory data) = _to.call{value: amount}("");
        emit EthMoved(_to, sent, data, amount);
    }

    function updatePriceToMint(uint256 priceToMint_) public onlyOwner {
        priceToMint = priceToMint_;
    }

    function updateProceedRecipient(
        address payable proceedRecipient_
    ) public onlyOwner {
        proceedRecipient = proceedRecipient_;
    }

    function updatePaused(bool paused_) public onlyOwner {
        paused = paused_;
    }
}

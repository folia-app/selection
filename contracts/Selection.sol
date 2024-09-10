// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./ExternalMetadata.sol";

contract Selection is Ownable, ERC2981, ERC721 {
    bool public paused = false;
    uint256 public totalSupply = 0;
    uint256 public constant MAX_SUPPLY = 150;
    uint256 public priceToMint = 0.11 ether;
    uint256 public startingDate = 1726164000; // Thu Sep 12 2024 18:00:00 GMT+0000
    address payable public proceedRecipient;
    address public externalMetadata;

    mapping(uint256 => uint256) public backgroundOverride;
    mapping(uint256 => bool) public backgroundOverriden;

    constructor(address externalMetadata_) ERC721("Selection", "SEL") {
        updateExternalMetadata(externalMetadata_);
        updateProceedRecipient(payable(msg.sender));
    }

    receive() external payable {
        revert("no receive thank you");
    }

    fallback() external {
        revert("no fallback thank you");
    }

    event MetadataUpdate(uint256 _tokenId);
    event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId);

    event EthMoved(
        address indexed to,
        bool indexed success,
        bytes returnData,
        uint256 amount
    );

    event BackgroundUpdated(uint256 indexed tokenId, uint256 override_);

    // public write functions

    function mint(uint256 total) public payable {
        require(total <= 5, "Max 5 per transaction");
        require(totalSupply + total <= MAX_SUPPLY, "Max supply reached");
        require(block.timestamp >= startingDate, "not yet started");
        require(!paused, "paused");
        for (uint256 i = 0; i < total; i++) {
            totalSupply += 1;
            _mint(msg.sender, totalSupply);
        }
        makePayment(priceToMint * total);
    }

    function mint() public payable {
        require(totalSupply + 1 <= MAX_SUPPLY, "Max supply reached");
        require(block.timestamp >= startingDate, "not yet started");
        require(!paused, "paused");
        totalSupply += 1;
        _mint(msg.sender, totalSupply);
        makePayment(priceToMint);
    }

    function changeBackground(uint256 tokenId, uint256 override_) public {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "Not approved");
        require(override_ <= 3, "invalid override number");
        backgroundOverride[tokenId] = override_;
        backgroundOverriden[tokenId] = true;
        emit BackgroundUpdated(tokenId, override_);
        emit MetadataUpdate(tokenId);
    }

    // public read functions

    function getBackgroundOverride(
        uint256 tokenId
    ) public view returns (bool, uint256) {
        return (backgroundOverriden[tokenId], backgroundOverride[tokenId]);
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

    // public owner functions

    function adminMint(address recipient, uint256 total) public onlyOwner {
        require(totalSupply + total <= MAX_SUPPLY, "Max supply reached");
        for (uint256 i = 0; i < total; i++) {
            totalSupply += 1;
            _mint(recipient, totalSupply);
        }
    }

    function emitBatchMetadataUpdate(
        uint256 fromTokenId,
        uint256 toTokenId
    ) public onlyOwner {
        emit BatchMetadataUpdate(fromTokenId, toTokenId);
    }

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

    function updateStartingDate(uint256 startingDate_) public onlyOwner {
        startingDate = startingDate_;
    }

    function updatePaused(bool paused_) public onlyOwner {
        paused = paused_;
    }

    // internal functions

    function makePayment(uint256 payment) internal {
        require(msg.value == payment, "Incorrect payment");
        require(proceedRecipient != address(0), "Invalid recipient");
        (bool sent, bytes memory data) = proceedRecipient.call{value: payment}(
            ""
        );
        emit EthMoved(proceedRecipient, sent, data, payment);
    }
}

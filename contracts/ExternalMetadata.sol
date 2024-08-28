//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "base64-sol/base64.sol";
import "./StringsExtended.sol";

/// @title ExternalMetadata
/// @notice
/// @author @okwme
/// @dev The updateable and replaceable contract

contract ExternalMetadata is Ownable {
    constructor() {}

    /// @dev generates the
    /// @param tokenId the tokenId
    function getMetadata(uint256 tokenId) public view returns (string memory) {
        string memory svg = getSVG(tokenId);
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        abi.encodePacked(
                            '{"name":"',
                            getName(tokenId),
                            '",',
                            '"description": "Selections",',
                            '"image": "',
                            svg,
                            '",',
                            '"image_url": "',
                            svg,
                            '",',
                            '"home_url": "https://google.com",',
                            '"external_url": "https://google.com",',
                            '"animation_url": "https://nft.google.com/#',
                            StringsExtended.toString(tokenId),
                            '",',
                            '"attributes": ',
                            getAttributes(tokenId),
                            "}"
                        )
                    )
                )
            );
    }

    function getName(uint256 tokenId) public pure returns (string memory) {
        return string(abi.encodePacked(StringsExtended.toString(tokenId)));
    }

    function getHTML(uint256 tokenId) public view returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "data:text/html;base64,",
                    Base64.encode(
                        abi.encodePacked(
                            "<html><body><img src='",
                            getSVG(tokenId),
                            "'></body></html>"
                        )
                    )
                )
            );
    }

    /// @dev function to generate a SVG String
    function getSVG(uint256 tokenId) public view returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "data:image/svg+xml;base64,",
                    Base64.encode(
                        abi.encodePacked(
                            '<?xml version="1.0" encoding="utf-8"?>',
                            '<svg xmlns="http://www.w3.org/2000/svg"  height="100%" width="100%" viewBox="0 0 1000 1000" style="background-color:transparent;">',
                            getPath(tokenId),
                            "</svg>"
                        )
                    )
                )
            );
    }

    function getPath(uint256 tokenId) internal view returns (string memory) {
        string memory path = string(
            abi.encodePacked(
                "<style>",
                "#id ",
                "{ ",
                "}",
                "</style>"
                '<g id="id">',
                getMorePath(tokenId),
                "</g>"
            )
        );
        return path;
    }

    function getMorePath(
        uint256 tokenId
    ) internal view returns (string memory) {
        bytes32 rand = keccak256(abi.encodePacked(tokenId));
        uint256 attr1 = randomRange(0, 100, rand);

        string memory path = string(abi.encodePacked("<path/>"));

        return path;
    }

    /// @dev generates the attributes as JSON String
    function getAttributes(
        uint256 tokenId
    ) public view returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "[",
                    '{"trait_type":"asdf","value":"asdf"}',
                    '"]'
                )
            );
    }

    function randomRange(
        uint256 min,
        uint256 max,
        bytes32 seed
    ) internal view returns (uint256) {
        return randomRange(min, max, seed);
    }
}

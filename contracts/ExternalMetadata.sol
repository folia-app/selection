//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "base64-sol/base64.sol";
import "./StringsExtended.sol";
import "./Selection.sol";
import "./IFileStore.sol";

/// @title ExternalMetadata
/// @notice
/// @author @okwme
/// @dev The updateable and replaceable contract

contract ExternalMetadata is Ownable {
    string svgOpening =
        '<?xml version="1.0" encoding="utf-8"?>'
        '<svg xmlns="http://www.w3.org/2000/svg" color="#000000" width="100%" height="100%" viewBox="0 0 300 300">'
        "<defs>"
        '<pattern id="diagonalHatch" patternUnits="userSpaceOnUse" patternTransform="translate(0)" width="8" height="8">'
        '<rect width="8" height="8" fill="white" />'
        '<path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" style="stroke:black; stroke-width:3"></path>'
        '<animateTransform attributeType="xml" '
        'attributeName="patternTransform" '
        'type="translate" from="0 0" to="8 8" begin="0" '
        'dur="2s" repeatCount="indefinite"/>'
        "</pattern>"
        "</defs>"
        '<text vector-effect="non-scaling-stroke" x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" stroke="url(#diagonalHatch)" fill="none" style="font-size: 900%; font-family: \'Times New Roman\';">';
    string svgMiddle =
        "</text>"
        '<rect vector-effect="non-scaling-stroke" x="5%" y="5%" width="90%" height="90%" fill="none" stroke="url(#diagonalHatch)"></rect>';
    string svgClosing = "</svg>";

    string transparentPattern =
        "background-image: linear-gradient(45deg, #cbcccb 25%, transparent 25%), linear-gradient(-45deg, #cbcccb 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #cbcccb 75%), linear-gradient(-45deg, transparent 75%, #cbcccb 75%);"
        "background-size: 8px 8px;"
        "background-position: 0 0, 0 4px, 4px -4px, -4px 0px;";

    address payable public selection;
    string public filename = "selection.js.gz";

    constructor() {}

    function updateSelectionAddress(
        address payable selection_
    ) public onlyOwner {
        selection = selection_;
    }

    function updateFilename(string memory filename_) public onlyOwner {
        filename = filename_;
    }

    function getBackgroundOverride(
        uint256 tokenId
    ) public view returns (bool, uint256) {
        return Selection(selection).getBackgroundOverride(tokenId);
    }

    /// @dev generates a random number between a provided range
    /// @param min the minimum value
    /// @param max the maximum value
    /// @param seed the seed
    function randomRange(
        uint256 min,
        uint256 max,
        bytes32 seed
    ) internal pure returns (uint256) {
        return (uint256(seed) % (max - min + 1)) + min;
    }

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
                            '{"name":"Selection No. ',
                            getName(tokenId),
                            '",',
                            '"description": "In Selection, the focus of the work is focus itself.\\n\\n\\n',
                            "The project is a fully on-chain generated collection of selection areas, the familiar marching ants conceived by Bill Atkinson which have become such a ubiquitous part of interface culture.\\n\\n\\n",
                            "Selection is released in partnership with Folia.",
                            '","image": "',
                            svg,
                            '",',
                            '"image_url": "',
                            svg,
                            '",',
                            '"home_url": "https://google.com",',
                            '"external_url": "https://google.com",',
                            '"animation_url":"',
                            getHTML(tokenId),
                            '",',
                            '"attributes": ',
                            getAttributes(tokenId),
                            "}"
                        )
                    )
                )
            );
    }

    string htmlStart =
        '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Selection, 2024 - Jan Robert Leegte</title><style>html,body{width:100vw;height:100vh}body{overflow:hidden}svg{width:100vw;height:100vh;position:absolute;inset:0}</style><meta http-equiv="X-UA-Compatible" content="IE=9">';

    string htmlClose =
        '</head><body> <svg color="#000" style="background-color:#0000"><defs><pattern patternTransform="translate(0)" id="diagonalHatch" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#fff"/><path d="m-2 2 4-4M0 8l8-8M6 10l4-4" style="stroke:#000;stroke-width:3px"/><animateTransform type="translate" from="0 0" to="8 8" begin="0" dur="2s" attributeType="xml" attributeName="patternTransform" repeatCount="indefinite"/></pattern></defs><path id="selectionPath" d="" stroke="url(#diagonalHatch)" fill="none"/></svg> </body></html>';

    function getHTML(uint256 tokenId) public view returns (string memory) {
        IFileStore fileStore = IFileStore(
            0xFe1411d6864592549AdE050215482e4385dFa0FB // baseSepolia
        );
        (
            bool backgroundOverriden,
            uint256 backgroundOverride
        ) = getBackgroundOverride(tokenId);
        return
            string(
                abi.encodePacked(
                    "data:text/html;base64,",
                    Base64.encode(
                        abi.encodePacked(
                            htmlStart,
                            "<script>window.location.hash=",
                            StringsExtended.toString(tokenId),
                            ";window.backgroundOverride=",
                            backgroundOverriden
                                ? StringsExtended.toString(backgroundOverride)
                                : "false",
                            ";</script>",
                            '<script type="text/javascript+gzip" src="data:text/javascript;base64,',
                            fileStore.getFile(filename).read(),
                            '"></script>',
                            '<script src="data:text/javascript;base64,',
                            fileStore.getFile("gunzipScripts-0.0.1.js").read(),
                            '"></script>',
                            htmlClose
                        )
                    )
                )
            );
    }

    function getName(uint256 tokenId) public pure returns (string memory) {
        return string(abi.encodePacked(StringsExtended.toString(tokenId)));
    }

    /// @dev function to generate a SVG String
    function getSVG(uint256 tokenId) public view returns (string memory) {
        bytes32 originalSeed = keccak256(abi.encodePacked(tokenId));
        string[3] memory solidsArray = [
            "rgb(123,50,50)",
            "rgb(50,123,50)",
            "rgb(50,50,123)"
        ];
        uint256 solidColor = randomRange(0, 2, originalSeed);
        string memory solidColorString = string(
            abi.encodePacked("background-color:", solidsArray[solidColor])
        );
        bytes32 seed = keccak256(abi.encodePacked(originalSeed));
        bool solidOverGrad = randomRange(0, 10, seed) == 0 ? true : false;
        seed = keccak256(abi.encodePacked(seed));
        bool grayOverColor = randomRange(0, 5, seed) == 0 ? true : false;
        seed = keccak256(abi.encodePacked(seed));
        uint256 bgStyleRand = randomRange(1, 10, seed);
        (
            bool backroundOverridden,
            uint256 backgroundOverride
        ) = getBackgroundOverride(tokenId);

        // 0: color
        // 1: white
        // 2: black
        // 3: transparent
        uint256 bgStyle = backroundOverridden
            ? backgroundOverride
            : bgStyleRand <= 7
            ? 0
            : (bgStyleRand <= 8 ? 1 : (bgStyleRand <= 9 ? 2 : 3));
        string memory finalColor;
        string memory name;
        if (bgStyle == 0) {
            if (solidOverGrad) {
                name = StringsExtended.toString(solidColor);
                finalColor = solidColorString;
            } else if (grayOverColor) {
                name = "gray";
                seed = keccak256(abi.encodePacked(seed));
                uint256 gradAngle = randomRange(0, 90, seed);
                seed = keccak256(abi.encodePacked(seed));
                uint256 gray1Val = randomRange(0, 150, seed);
                string memory gray1 = string(
                    abi.encodePacked(
                        "rgb(",
                        StringsExtended.toString(gray1Val),
                        ",",
                        StringsExtended.toString(gray1Val),
                        ",",
                        StringsExtended.toString(gray1Val),
                        ")"
                    )
                );
                seed = keccak256(abi.encodePacked(seed));
                uint256 gray2Val = randomRange(0, 150, seed);
                string memory gray2 = string(
                    abi.encodePacked(
                        "rgb(",
                        StringsExtended.toString(gray2Val),
                        ",",
                        StringsExtended.toString(gray2Val),
                        ",",
                        StringsExtended.toString(gray2Val),
                        ")"
                    )
                );
                finalColor = string(
                    abi.encodePacked(
                        "background: linear-gradient(",
                        StringsExtended.toString(gradAngle),
                        "deg, ",
                        gray1,
                        " 0%, ",
                        gray2,
                        " 100%);"
                    )
                );
            } else {
                name = "color";
                seed = keccak256(abi.encodePacked(seed));
                uint256 gradAngle = randomRange(0, 90, seed);

                seed = keccak256(abi.encodePacked(seed));
                uint256 dark = randomRange(100, 150, seed);

                seed = keccak256(abi.encodePacked(seed));

                uint256 color1R = randomRange(50, dark, seed);
                seed = keccak256(abi.encodePacked(seed));
                uint256 color1G = randomRange(50, dark, seed);
                seed = keccak256(abi.encodePacked(seed));
                uint256 color1B = randomRange(50, dark, seed);

                string memory color1 = string(
                    abi.encodePacked(
                        "rgb(",
                        StringsExtended.toString(color1R),
                        ",",
                        StringsExtended.toString(color1G),
                        ",",
                        StringsExtended.toString(color1B),
                        ")"
                    )
                );

                seed = keccak256(abi.encodePacked(seed));
                bool addOrSubtract = randomRange(0, 1, seed) == 0
                    ? true
                    : false;
                seed = keccak256(abi.encodePacked(seed));
                uint256 colorOffset = randomRange(0, 100, seed);

                if (addOrSubtract) {
                    color1R = color1R + colorOffset;
                    color1R = color1R > 255 ? 255 : color1R;
                    color1G = color1G + colorOffset;
                    color1G = color1G > 255 ? 255 : color1G;
                    color1B = color1B + colorOffset;
                    color1B = color1B > 255 ? 255 : color1B;
                } else {
                    color1R = colorOffset > color1R ? 0 : color1R - colorOffset;
                    color1G = colorOffset > color1G ? 0 : color1G - colorOffset;
                    color1B = colorOffset > color1B ? 0 : color1B - colorOffset;
                }

                string memory color2 = string(
                    abi.encodePacked(
                        "rgb(",
                        StringsExtended.toString(color1R),
                        ",",
                        StringsExtended.toString(color1G),
                        ",",
                        StringsExtended.toString(color1B),
                        ")"
                    )
                );
                finalColor = string(
                    abi.encodePacked(
                        "background: linear-gradient(",
                        StringsExtended.toString(gradAngle),
                        "deg, ",
                        color1,
                        " 0%, ",
                        color2,
                        " 100%);"
                    )
                );
            }
        } else if (bgStyle == 1) {
            name = "white";
            finalColor = "background-color: white;";
        } else if (bgStyle == 2) {
            name = "black";
            finalColor = "background-color: black;";
        } else {
            name = "transparent";
            finalColor = transparentPattern;
        }

        string memory cssStart = "<style>"
        "svg {";

        string memory cssEnd = string(
            abi.encodePacked(
                "}",
                "bgStyle {",
                StringsExtended.toString(bgStyle),
                ":",
                StringsExtended.toHexString(uint256(originalSeed)),
                "}",
                "</style>"
            )
        );
        return
            string(
                abi.encodePacked(
                    "data:image/svg+xml;base64,",
                    Base64.encode(
                        abi.encodePacked(
                            svgOpening,
                            StringsExtended.toString(tokenId),
                            svgMiddle,
                            "<name>",
                            name,
                            "</name>",
                            cssStart,
                            finalColor,
                            cssEnd,
                            svgClosing
                        )
                    )
                )
            );
    }

    /// @dev generates the attributes as JSON String
    function getAttributes(
        uint256 tokenId
    ) public pure returns (string memory) {
        bytes32 seed = keccak256(abi.encodePacked(tokenId));
        bool showHole = randomRange(0, 10, seed) == 0;

        bytes32 configSeed = keccak256(abi.encodePacked(seed));
        bool showRectangles = showHole || randomRange(0, 1, configSeed) == 0;

        configSeed = keccak256(abi.encodePacked(configSeed));
        bool showPolygons = showHole ||
            !showRectangles ||
            randomRange(0, 1, configSeed) == 0;

        configSeed = keccak256(abi.encodePacked(configSeed));
        bool showGrid = randomRange(0, 3, configSeed) == 0;

        configSeed = keccak256(abi.encodePacked(configSeed));
        bool showStar = randomRange(0, 15, configSeed) == 0;

        configSeed = keccak256(abi.encodePacked(configSeed));
        bool showFrame = randomRange(0, 3, configSeed) == 0;

        // showRectangles, showPolygons, showHole, showGrid, showStar, showFrame
        return
            string(
                abi.encodePacked(
                    "[",
                    '{"trait_type":"Rectangles","value":"',
                    (showRectangles ? "Show" : "Hide"),
                    '"},',
                    '{"trait_type":"Polygon","value":"',
                    (showPolygons ? "Show" : "Hide"),
                    '"},',
                    '{"trait_type":"Hole","value":"',
                    (showHole ? "Show" : "Hide"),
                    '"},',
                    '{"trait_type":"Grid","value":"',
                    (showGrid ? "Show" : "Hide"),
                    '"},',
                    '{"trait_type":"Star","value":"',
                    (showStar ? "Show" : "Hide"),
                    '"},',
                    '{"trait_type":"Ornament","value":"',
                    (showFrame ? "Show" : "Hide"),
                    '"}',
                    "]"
                )
            );
    }
}

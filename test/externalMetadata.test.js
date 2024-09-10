import { expect } from "chai";
import hre from "hardhat";
const { ethers } = hre;
import { DOMParser } from "xmldom";
// import { Anybody } from '../../dist/module.js'

import { deployContracts, getParsedEventLogs } from "../scripts/utils.js";
import fs from "fs";
import prettier from "prettier";
// let tx
describe("ExternalMetadata Tests", function () {
  this.timeout(50000000);

  it.skip("has the correct selection addresses", async () => {
    const { Selection: selection, ExternalMetadata: externalMetadata } =
      await deployContracts();

    const selectionAddress = await externalMetadata.selection();
    expect(selectionAddress).to.equal(selection.address);
  });

  it.skip("onlyOwner functions are really only Owner", async function () {
    const [, addr1] = await ethers.getSigners();
    const { ExternalMetadata: externalMetadata } = await deployContracts();

    await expect(
      externalMetadata.connect(addr1).updateSelectionAddress(addr1.address)
    ).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(externalMetadata.updateSelectionAddress(addr1.address)).to.not
      .be.reverted;
  });

  it("has valid json", async function () {
    const { ExternalMetadata, Selection: selection } = await deployContracts();
    await selection.updateStartingDate(0);

    const price = await selection.priceToMint();
    const tx = await selection["mint()"]({ value: price });
    const receipt = await tx.wait();
    const events = getParsedEventLogs(receipt, selection, "Transfer");
    const tokenId = events[0].args.tokenId;
    console.log({ tokenId });

    const base64Json = await selection.tokenURI(tokenId);
    console.log({ base64Json });
    const utf8Json = Buffer.from(
      base64Json.replace("data:application/json;base64,", ""),
      "base64"
    ).toString("utf-8");
    console.dir({ utf8Json }, { depth: null });
    const json = JSON.parse(utf8Json);
    // console.dir({ json }, { depth: null })
    const base64SVG = json.image;

    // console.log('-----base64 image-----')
    // console.table( base64SVG )

    const SVG = Buffer.from(
      base64SVG.replace("data:image/svg+xml;base64,", ""),
      "base64"
    ).toString("utf-8");
    //console.log("---------image----------")
    //console.table({ SVG })

    const isValidSVG = (svg) => {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svg, "image/svg+xml");
        return doc.documentElement.tagName.toLowerCase() === "svg";
      } catch (error) {
        //console.log({ error })
        return false;
      }
    };

    const isSVGValid = isValidSVG(SVG);
    expect(isSVGValid).to.be.true;

    const attributeTokenId = json.attributes[0].value;
    expect(parseInt(attributeTokenId)).to.equal(tokenId.toNumber());

    for (let i = 150; i <= 150; i++) {
      let svg = await ExternalMetadata.getSVG(i);
      svg = svg.replace("data:image/svg+xml;base64,", "");
      const base64ToString = (base64) => {
        const buff = Buffer.from(base64, "base64");
        return buff.toString("utf-8");
      };

      const svgString = await prettier.format(base64ToString(svg), {
        parser: "html",
      });

      fs.writeFileSync(i + ".svg", svgString);
    }

    const animation_url = json.animation_url;
    console.log({ animation_url });
  });
});

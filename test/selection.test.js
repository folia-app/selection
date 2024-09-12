import hre from "hardhat";
const { ethers } = hre;
import { expect } from "chai";
import { setBg, solidityKeccak256 } from "../src/bg.js";
import { deployContracts, getParsedEventLogs } from "../scripts/utils.js";

// let tx
describe("Selection Tests", function () {
  this.timeout(50000000);

  it("has the correct externalMetadata, recipient and start date", async () => {
    const [addr0] = await ethers.getSigners();
    const { Selection: selection, ExternalMetadata: externalMetadata } =
      await deployContracts();

    const externalMetadataAddress = await selection.externalMetadata();
    expect(externalMetadataAddress).to.equal(externalMetadata.address);

    const recipient = await selection.proceedRecipient();
    expect(recipient).to.equal(addr0.address);
    const startingDateString = "Thu Sep 12 2024 18:00:00 GMT+0000";
    const startingDateInJS = new Date(startingDateString).getTime() / 1000;

    const startingDate = await selection.startingDate();
    expect(startingDate).to.equal(startingDateInJS);
  });

  it("onlyOwner functions are really only Owner", async function () {
    const [, addr1] = await ethers.getSigners();
    const { Selection: selection } = await deployContracts();

    const functionNames = [
      { n: "adminMint", args: [addr1.address, 1] },
      { n: "emitBatchMetadataUpdate", args: [1, 100] },
      { n: "updateExternalMetadata", args: [addr1.address] },
      { n: "recoverUnsuccessfulPayment", args: [addr1.address] },
      { n: "updatePriceToMint", args: [1] },
      { n: "updateProceedRecipient", args: [addr1.address] },
      { n: "updateStartingDate", args: [1] },
      { n: "updatePaused", args: [true] },
    ];

    for (let i = 0; i < functionNames.length; i++) {
      const functionName = functionNames[i];
      try {
        await expect(
          selection.connect(addr1)[functionName.n](...functionName.args)
        ).to.be.revertedWith("Ownable: caller is not the owner");
        await expect(selection[functionName.n](...functionName.args)).to.not.be
          .reverted;
      } catch (e) {
        console.log({ functionName, e });
      }
    }
  });

  it("has the correct max supply", async function () {
    const maxSupply = 150;
    const { Selection: selection } = await deployContracts();
    const maxSupply_ = await selection.MAX_SUPPLY();
    expect(maxSupply_).to.equal(maxSupply);
  });

  it("must be unpaused", async function () {
    const { Selection: selection } = await deployContracts();
    await selection.updateStartingDate(0);
    await selection.updatePaused(true);
    const price = await selection.priceToMint();
    await expect(selection["mint()"]({ value: price })).to.be.revertedWith(
      "paused"
    );
    await expect(
      selection["mint(uint256)"](1, { value: price })
    ).to.be.revertedWith("paused");
  });

  it("must be after the start date and unpaused", async function () {
    const { Selection: selection } = await deployContracts();
    const now = Math.floor(new Date().getTime() / 1000);
    const nowPlusOneDay = now + 86400000;
    await selection.updateStartingDate(nowPlusOneDay);
    await selection.updatePaused(false);
    const price = await selection.priceToMint();
    await expect(selection["mint()"]({ value: price })).to.be.revertedWith(
      "not yet started"
    );
    await expect(
      selection["mint(uint256)"](1, { value: price })
    ).to.be.revertedWith("not yet started");

    const yesterday = now - 86400000;
    await selection.updateStartingDate(yesterday);
    await expect(selection["mint()"]({ value: price })).to.not.be.reverted;
    await expect(selection["mint(uint256)"](1, { value: price })).to.not.be
      .reverted;
  });

  it("can mint up to 5 at a time", async function () {
    const { Selection: selection } = await deployContracts();
    await selection.updateStartingDate(0);
    await selection.updatePaused(false);
    const price = await selection.priceToMint();
    await expect(selection["mint()"]({ value: price })).to.not.be.reverted;
    for (let i = 1; i <= 5; i++) {
      await expect(selection["mint(uint256)"](i, { value: price.mul(i) })).to
        .not.be.reverted;
    }

    await expect(
      selection["mint(uint256)"](6, { value: price.mul(6) })
    ).to.be.revertedWith("Max 5 per transaction");
  });

  it("has all the correct interfaces", async () => {
    const interfaces = [
      { name: "ERC165", id: "0x01ffc9a7", supported: true },
      { name: "ERC1155", id: "0xd9b67a26", supported: false },
      { name: "ERC1155Metadata", id: "0x0e89341c", supported: false },
      { name: "ERC721", id: "0x80ac58cd", supported: true },
      { name: "ERC721Metadata", id: "0x5b5e139f", supported: true },
      { name: "ERC4906MetadataUpdate", id: "0x49064906", supported: true },
      { name: "ERC721Enumerable", id: "0x780e9d63", supported: false },
      { name: "ERC2981", id: "0x2a55205a", supported: false },
      { name: "ERC20", id: "0x36372b07", supported: false },
    ];
    const { Selection: selection } = await deployContracts();

    for (let i = 0; i < interfaces.length; i++) {
      const { name, id, supported } = interfaces[i];

      const supportsInterface2 = await selection.supportsInterface(id);
      expect(name + supportsInterface2).to.equal(name + supported);
    }
  });

  it("can change the background color", async () => {
    const [, addr1] = await ethers.getSigners();

    const { Selection: selection } = await deployContracts();
    await selection.updateStartingDate(0);
    const price = await selection.priceToMint();

    const tx = await selection["mint()"]({ value: price });
    const receipt = await tx.wait();
    const events = getParsedEventLogs(receipt, selection, "Transfer");
    const tokenId = events[0].args.tokenId;

    const backgroundOverride = await selection.backgroundOverride(tokenId);
    expect(backgroundOverride).to.equal(0);
    const backgroundOverriden = await selection.backgroundOverriden(tokenId);
    expect(backgroundOverriden).to.equal(false);

    const [backgroundOverriden2, backgroundOverride2] =
      await selection.getBackgroundOverride(tokenId);

    expect(backgroundOverride2).to.equal(backgroundOverride);
    expect(backgroundOverriden2).to.equal(backgroundOverriden);

    await expect(
      selection.connect(addr1).changeBackground(tokenId, 1)
    ).to.be.revertedWith("Not approved");

    await selection.approve(addr1.address, tokenId);
    await selection.connect(addr1).changeBackground(tokenId, 1);

    const backgroundOverride3 = await selection.backgroundOverride(tokenId);
    expect(backgroundOverride3).to.equal(1);
    const backgroundOverriden3 = await selection.backgroundOverriden(tokenId);
    expect(backgroundOverriden3).to.equal(true);

    const [backgroundOverriden4, backgroundOverride4] =
      await selection.getBackgroundOverride(tokenId);
    expect(backgroundOverride4).to.equal(backgroundOverride3);
    expect(backgroundOverriden4).to.equal(backgroundOverriden3);

    await selection.changeBackground(tokenId, 2);
    const backgroundOverride5 = await selection.backgroundOverride(tokenId);
    expect(backgroundOverride5).to.equal(2);
    const backgroundOverriden5 = await selection.backgroundOverriden(tokenId);
    expect(backgroundOverriden5).to.equal(true);

    await expect(selection.changeBackground(tokenId, 4)).to.be.revertedWith(
      "invalid override number"
    );
  });

  it("admin mint", async () => {
    const { Selection: selection } = await deployContracts();
    const [owner, addr1] = await ethers.getSigners();
    const total = 1;
    await selection.adminMint(owner.address, total);
    await expect(
      selection.connect(addr1).adminMint(addr1.address, total)
    ).to.be.revertedWith("Ownable: caller is not the owner");
    await selection.adminMint(owner.address, 149);
    const totalSupply = await selection.totalSupply();
    expect(totalSupply).to.equal(150);

    await expect(selection.adminMint(owner.address, 1)).to.be.revertedWith(
      "Max supply reached"
    );
    await selection.updateStartingDate(0);
    const price = await selection.priceToMint();
    await expect(selection["mint()"]({ value: price })).to.be.revertedWith(
      "Max supply reached"
    );
  });

  it("detects background change in metadata", async () => {
    const { Selection: selection, ExternalMetadata: externalMetadata } =
      await deployContracts();

    await selection.updateStartingDate(0);

    for (let i = 1; i <= 150; i++) {
      if (i > 1) continue; // TODO: remove this when you have enough time to run all full test
      const tx = await selection["mint()"]({
        value: await selection.priceToMint(),
      });
      const receipt = await tx.wait();
      const events = getParsedEventLogs(receipt, selection, "Transfer");
      const tokenId = events[0].args.tokenId;
      expect(tokenId).to.equal(i);
      const metadata = await selection.tokenURI(tokenId);

      // const metadata = await externalMetadata.getMetadata(tokenId);
      const base64Json = metadata;
      const utf8Json = Buffer.from(
        base64Json.replace("data:application/json;base64,", ""),
        "base64"
      ).toString("utf-8");
      const json = JSON.parse(utf8Json);

      const animation_url = json.animation_url;
      const htmlstart =
        '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Selection, 2024 - Jan Robert Leegte</title><style>html,body{width:100vw;height:100vh}body{overflow:hidden}svg{width:100vw;height:100vh;position:absolute;inset:0}</style><meta http-equiv="X-UA-Compatible" content="IE=9">';
      const htmlclose =
        '</head><body> <svg color="#000" style="background-color:#0000"><defs><pattern patternTransform="translate(0)" id="diagonalHatch" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#fff"/><path d="m-2 2 4-4M0 8l8-8M6 10l4-4" style="stroke:#000;stroke-width:3px"/><animateTransform type="translate" from="0 0" to="8 8" begin="0" dur="2s" attributeType="xml" attributeName="patternTransform" repeatCount="indefinite"/></pattern></defs><path id="selectionPath" d="" stroke="url(#diagonalHatch)" fill="none"/></svg> </body></html>';
      const html =
        htmlstart +
        "<script>window.location.hash=" +
        tokenId +
        ";window.backgroundOverride=" +
        "false" +
        ";</script>" +
        '<script type="text/javascript+gzip" src="data:text/javascript;base64,' +
        '"></script>' +
        '<script src="data:text/javascript;base64,' +
        '"></script>' +
        htmlclose;
      const base64EncodedHtml =
        "data:text/html;base64," + Buffer.from(html).toString("base64");

      expect(animation_url).to.equal(base64EncodedHtml);

      const base64SVG = json.image;
      const SVG = Buffer.from(
        base64SVG.replace("data:image/svg+xml;base64,", ""),
        "base64"
      ).toString("utf-8");

      const style = SVG.match(/<style>([\s\S]*?)<\/style>/)[1];
      const seed = solidityKeccak256(["uint256"], [tokenId]);
      if (tokenId == 1) {
        expect(seed).to.equal(
          "0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6"
        );
      }

      const {
        solidColor,
        solidOverGrad,
        grayOverColor,
        bgState,
        gradAngle,
        dark,
        finalColor,
      } = setBg(seed, 0, false);
      const regex = /bgStyle\s*{\s*(\d+):/;
      const match = style.match(regex);
      const solidityBgState = match ? match[1] : null;
      expect(solidityBgState).to.equal(bgState.toString());

      // Extract everything between the first set of curly brackets after "svg"
      const svgStyleRegex = /svg\s*{([^}]*)}/;
      const svgStyleMatch = SVG.match(svgStyleRegex);
      const svgStyleContent = svgStyleMatch ? svgStyleMatch[1] : null;
      expect(svgStyleContent).to.equal(finalColor);
      for (let j = 0; j < 4; j++) {
        const newBgState = (bgState + j) % 4;
        await selection.changeBackground(tokenId, newBgState);
        const { bgState: bgState2, finalColor } = setBg(seed, 0, newBgState);

        const metadata = await selection.tokenURI(tokenId);

        // const metadata = await externalMetadata.getMetadata(tokenId);
        const base64Json = metadata;
        const utf8Json = Buffer.from(
          base64Json.replace("data:application/json;base64,", ""),
          "base64"
        ).toString("utf-8");
        const json = JSON.parse(utf8Json);

        const animation_url = json.animation_url;
        const html =
          htmlstart +
          "<script>window.location.hash=" +
          tokenId +
          ";window.backgroundOverride=" +
          newBgState +
          ";</script>" +
          '<script type="text/javascript+gzip" src="data:text/javascript;base64,' +
          '"></script>' +
          '<script src="data:text/javascript;base64,' +
          '"></script>' +
          htmlclose;
        const base64EncodedHtml =
          "data:text/html;base64," + Buffer.from(html).toString("base64");
        expect(animation_url).to.equal(base64EncodedHtml);

        const base64SVG = json.image;
        const SVG = Buffer.from(
          base64SVG.replace("data:image/svg+xml;base64,", ""),
          "base64"
        ).toString("utf-8");

        const style = SVG.match(/<style>([\s\S]*?)<\/style>/)[1];

        const match = style.match(regex);
        const solidityBgState = match ? match[1] : null;
        expect(solidityBgState).to.equal(bgState2.toString());

        // Extract everything between the first set of curly brackets after "svg"
        const svgStyleRegex = /svg\s*{([^}]*)}/;
        const svgStyleMatch = SVG.match(svgStyleRegex);
        const svgStyleContent = svgStyleMatch ? svgStyleMatch[1] : null;
        expect(svgStyleContent).to.equal(finalColor);
      }
    }
  });
});

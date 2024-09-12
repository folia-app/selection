import { ethers } from "ethers";
import hre from "hardhat";
import path from "node:path";
import { promises as fs } from "fs";

const __dirname = path.resolve();

const correctPrice = ethers.utils.parseEther("0.0025");

const testJson = (tJson) => {
  try {
    JSON.parse(tJson);
  } catch (e) {
    return false;
  }
  return true;
};

const getPathABI = async (name) => {
  var networkinfo = await hre.ethers.provider.getNetwork();
  var savePath = path.join(
    __dirname,
    "contractData",
    "ABI-" + String(networkinfo["chainId"]) + "-" + String(name) + ".json"
  );
  return savePath;
};

async function readData(path) {
  const Newdata = await fs.readFile(path, "utf8");
  return Newdata;
}

const getPathAddress = async (name) => {
  var networkinfo = await hre.ethers.provider.getNetwork();
  var savePath = path.join(
    __dirname,
    "contractData",
    String(networkinfo["chainId"]) + "-" + String(name) + ".json"
  );
  return savePath;
};

const initContracts = async (getSigners = true) => {
  let owner;
  if (getSigners) {
    [owner] = await hre.ethers.getSigners();
  }

  const contractNames = ["Selection", "ExternalMetadata"];

  let returnObject = {};

  for (let i = 0; i < contractNames.length; i++) {
    const address = JSON.parse(
      await readData(await getPathAddress(contractNames[i]))
    )["address"];
    const abi = JSON.parse(await readData(await getPathABI(contractNames[i])))[
      "abi"
    ];
    if (getSigners) {
      returnObject[contractNames[i]] = new ethers.Contract(address, abi, owner);
    } else {
      returnObject[contractNames[i]] = new ethers.Contract(address, abi);
    }
  }
  return returnObject;
};

const decodeUri = (decodedJson) => {
  const metaWithoutDataURL = decodedJson.substring(
    decodedJson.indexOf(",") + 1
  );
  let buff = Buffer.from(metaWithoutDataURL, "base64");
  let text = buff.toString("ascii");
  return text;
};

const deployMetadata = async (verbose) => {
  let externalMetadata;
  let ethFSAddress;
  try {
    // deploy ExternalMetadata
    const ExternalMetadata =
      await hre.ethers.getContractFactory("ExternalMetadata");
    const networkinfo = await hre.ethers.provider.getNetwork();
    if (networkinfo["chainId"] == 12345) {
      const mockEthFS = await hre.ethers.getContractFactory("MockFileStore");
      const mockEthFSInstance = await mockEthFS.deploy();
      await mockEthFSInstance.deployed();
      ethFSAddress = mockEthFSInstance.address;
    } else if (networkinfo["chainId"] == 84543) {
      ethFSAddress = "0xFe1411d6864592549AdE050215482e4385dFa0FB";
    } else if (networkinfo["chainId"] == 1) {
      ethFSAddress = "0xFe1411d6864592549AdE050215482e4385dFa0FB";
    } else {
      throw new Error("Unsupported network for EthFS");
    }
    externalMetadata = await ExternalMetadata.deploy(ethFSAddress);
    await externalMetadata.deployed();
    verbose &&
      log("ExternalMetadata Deployed at " + String(externalMetadata.address));
  } catch (e) {
    console.error(e);
  }

  return {
    externalMetadata,
    ethFSAddress,
  };
};

const deployContracts = async (options) => {
  const defaultOptions = { mock: false, verbose: false, ignoreTesting: false };
  const { verbose } = Object.assign(defaultOptions, options);
  var networkinfo = await hre.ethers.provider.getNetwork();
  // const testing = !ignoreTesting && networkinfo['chainId'] == 12345
  const [deployer] = await hre.ethers.getSigners();

  const returnObject = {};

  // deploy Metadata
  const { externalMetadata, ethFSAddress } = await deployMetadata(verbose);

  returnObject["ExternalMetadata"] = externalMetadata;
  const externalMetadataAddress = externalMetadata.address;

  // deploy Selection
  const Selection = await hre.ethers.getContractFactory("Selection");
  const selection = await Selection.deploy(externalMetadataAddress);
  await selection.deployed();
  var selectionAddress = selection.address;
  returnObject["Selection"] = selection;
  verbose &&
    log(
      "Selection Deployed at " +
        String(selectionAddress) +
        " with externalMetadataAddress " +
        externalMetadataAddress
    );

  // save selection in metadata
  await externalMetadata.updateSelectionAddress(selectionAddress);
  verbose &&
    log("ExternalMetadata updated with Selection Address " + selectionAddress);

  // verify contract if network ID is mainnet goerli or sepolia
  if (
    networkinfo["chainId"] == 5 ||
    networkinfo["chainId"] == 1 ||
    networkinfo["chainId"] == 11155111 ||
    networkinfo["chainId"] == 17069 ||
    networkinfo["chainId"] == 84532 ||
    networkinfo["chainId"] == 8453
  ) {
    const verificationData = [
      {
        name: "ExternalMetadata",
        constructorArguments: [ethFSAddress],
      },
      {
        name: "Selection",
        constructorArguments: [externalMetadataAddress],
      },
    ];

    returnObject.verificationData = verificationData;
  } else if (networkinfo["chainId"] == 12345) {
    await deployer.sendTransaction({
      to: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      value: ethers.utils.parseEther("1.0"),
    });
    await deployer.sendTransaction({
      to: "0xc795344b1b30E3CfEE1AFA1D5204B141940CF445",
      value: ethers.utils.parseEther("1.0"),
    });
  }

  return returnObject;
};

const verifyContracts = async (returnObject, contractToUse) => {
  const blocksToWaitBeforeVerify = 0;
  const verificationData = returnObject.verificationData;
  for (let i = 0; i < verificationData.length; i++) {
    await contractToUse.deployTransaction.wait(blocksToWaitBeforeVerify);
    log(`Verifying ${verificationData[i].name} Contract`);
    try {
      await hre.run("verify:verify", {
        address: returnObject[verificationData[i].name].address,
        constructorArguments: verificationData[i].constructorArguments,
      });
    } catch (e) {
      i--;
      await new Promise((r) => setTimeout(r, 1000));
      log({ e, verificationData: verificationData[i] });
    }
  }
};

const log = (message) => {
  // const printLogs = process.env.npm_lifecycle_event !== 'test'
  console.log(message);
};

const getParsedEventLogs = (receipt, contract, eventName) => {
  const events = receipt.events
    .filter((x) => x.address === contract.address)
    .map((log) => contract.interface.parseLog(log));
  return eventName ? events.filter((x) => x.name === eventName) : events;
};

const mintSelection = async (signers, deployedContracts, acct) => {
  const [owner] = signers;
  acct = acct || owner;
  const { Selection: selection } = deployedContracts;
  await selection.updatePaused(false);
  await selection.updateStartDate(0);
  const tx = await selection.connect(acct)["mint()"]({ value: correctPrice });
  const receipt = await tx.wait();
  const runId = getParsedEventLogs(receipt, selection, "Transfer")[0].args
    .tokenId;
  return { receipt, runId };
};

async function copyABI(name, contractName) {
  contractName = contractName || name;

  var networkinfo = await hre.ethers.provider.getNetwork();
  console.log(`--copy ${name} ABI`);
  var pathname = path.join(
    __dirname,
    "artifacts",
    "contracts",
    `${name}.sol`,
    `${contractName}.json`
  );
  const readABI = await fs.readFile(pathname);
  const parsedABI = JSON.parse(readABI);
  const abi = parsedABI["abi"];

  const newContent = { contractName, abi };
  var copy = path.join(
    __dirname,
    "contractData",
    "ABI-" + String(networkinfo["chainId"]) + `-${name}.json`
  );
  // write the new content to the new file
  await writedata(copy, JSON.stringify(newContent));

  // await copyContractABI(pathname, copy)
  console.log("-- OK");
}

async function saveAddress(contract, name) {
  console.log("-save json for " + name);
  var networkinfo = await hre.ethers.provider.getNetwork();
  var newAddress = await contract.address;
  var savePath = path.join(
    __dirname,
    "contractData",
    String(networkinfo["chainId"]) + "-" + String(name) + ".json"
  );
  var objToWrite = {
    address: newAddress,
    chain: networkinfo,
  };
  await writedata(savePath, JSON.stringify(objToWrite));
}

async function writedata(path, data) {
  // await fs.writeFile(path, data, function (err, result) {
  //   if (err) console.log('error', err);
  // })
  try {
    await fs.writeFile(path, data);
  } catch (e) {
    console.log("e", e);
  }
}

export {
  saveAddress,
  copyABI,
  mintSelection,
  getParsedEventLogs,
  decodeUri,
  initContracts,
  deployContracts,
  getPathABI,
  getPathAddress,
  readData,
  testJson,
  correctPrice,
  verifyContracts,
  deployMetadata,
};

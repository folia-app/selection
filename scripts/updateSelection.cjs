const hre = require("hardhat");

async function main() {
  const { verifyContracts, copyABI, saveAddress, initContracts } = await import(
    "./utils.js"
  );
  const networkinfo = await hre.ethers.provider.getNetwork();
  const { ExternalMetadata } = await initContracts(true);

  const externalMetadataAddress = ExternalMetadata.address;

  // deploy Selection
  const Selection = await hre.ethers.getContractFactory("Selection");
  const selection = await Selection.deploy(externalMetadataAddress);
  await selection.deployed();
  var selectionAddress = selection.address;

  const returnObject = {
    Selection: selection,
  };

  console.log(
    "Selection Deployed at " +
      String(selectionAddress) +
      " with externalMetadataAddress " +
      externalMetadataAddress
  );

  // // save selection in metadata
  // await ExternalMetadata.updateSelectionAddress(selectionAddress);
  // console.log(
  //   "ExternalMetadata updated with Selection Address " + selectionAddress
  // );

  await copyABI("Selection");
  const contract = returnObject.Selection;
  await saveAddress(contract, "Selection");

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
        name: "Selection",
        constructorArguments: [externalMetadataAddress],
      },
    ];
    returnObject.verificationData = verificationData;
    // Verify the contracts
    await verifyContracts(returnObject, selection);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

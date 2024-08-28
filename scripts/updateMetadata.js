const { ethers } = require("hardhat");

async function main() {
  const { deployMetadata, verifyContracts, copyABI, saveAddress } =
    await import("./utils.js");

  // Deploy the metadata contract
  const { externalMetadata } = await deployMetadata(false);
  const returnObject = {
    ExternalMetadata: externalMetadata,
  };
  // Get the currently deployed selections contract
  const Selections = await ethers.getContractFactory("Selections");

  const network = await ethers.provider.getNetwork();

  // update ExternalMetadata
  const selectionsAddress = Selections.networks[network.chainId].address;

  await copyABI("ExternalMetadata");
  const contract = returnObject.ExternalMetadata;
  await saveAddress(contract, "ExternalMetadata");

  const selections = Selections.attach(selectionsAddress);
  await selections.updateExternalMetadata(
    returnObject["ExternalMetadata"].address
  );

  await selections.emitBatchMetadataUpdate();
  console.log("Batch metadata update emitted");

  const verificationData = [
    {
      name: "ExternalMetadata",
      constructorArguments: [],
    },
  ];
  returnObject["verificationData"] = verificationData;

  // Verify the contracts
  await verifyContracts(returnObject, externalMetadata);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

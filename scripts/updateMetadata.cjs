async function main() {
  const {
    deployMetadata,
    verifyContracts,
    copyABI,
    saveAddress,
    initContracts,
  } = await import("./utils.js");

  // Deploy the metadata contract
  const { externalMetadata } = await deployMetadata(false);
  const returnObject = {
    ExternalMetadata: externalMetadata,
  };

  // Get the currently deployed selection contract
  const { Selection } = await initContracts(true);

  // update ExternalMetadata
  const selectionAddress = Selection.address;

  // save selection in metadata
  await externalMetadata.updateSelectionAddress(selectionAddress);
  console.log(
    "ExternalMetadata updated with Selection Address " + selectionAddress
  );

  await copyABI("ExternalMetadata");
  const contract = returnObject.ExternalMetadata;
  await saveAddress(contract, "ExternalMetadata");

  await Selection.updateExternalMetadata(
    returnObject["ExternalMetadata"].address
  );
  // const totalSupply = await selection.totalSupply();
  // await selection.emitBatchMetadataUpdate(1, totalSupply);
  // console.log("Batch metadata update emitted");

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

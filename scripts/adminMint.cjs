const hre = require("hardhat");

async function main() {
  const { initContracts } = await import("./utils.js");

  const [owner] = await hre.ethers.getSigners();
  const { Selection } = await initContracts(true);

  const total = 30;

  await Selection.adminMint(owner.address, total);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

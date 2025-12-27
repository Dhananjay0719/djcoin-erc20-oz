const hre = require("hardhat");

async function main() {
  const DJCoin = await hre.ethers.getContractFactory("DJCoin");
  const djcoin = await DJCoin.deploy();

  await djcoin.waitForDeployment();

  console.log("DJCoin deployed to:", await djcoin.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
const { ethers } = require("hardhat");

async function main() {
  const Wallet = await ethers.getContractFactory("Wallet");

  const wallet = await Wallet.deploy();
  console.log("Contract deployed to address: ", wallet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

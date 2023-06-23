const { ethers } = require("hardhat");

async function main() {
  const TestTransaction = await ethers.getContractFactory("TestTransaction");

  const test_transaction = await TestTransaction.deploy();
  console.log("Contract deployed to address: ", test_transaction.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

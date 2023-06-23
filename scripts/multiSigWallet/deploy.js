const { ethers } = require("hardhat");

async function main() {
  const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");

  const multi_sig_wallet = await MultiSigWallet.deploy();
  console.log("Contract deployed to address: ", multi_sig_wallet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

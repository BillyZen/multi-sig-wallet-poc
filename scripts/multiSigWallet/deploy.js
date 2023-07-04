const { ethers } = require("hardhat");

async function main() {
  const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");

  const multi_sig_wallet = await MultiSigWallet.deploy(
    [
      "0x1D7F6E0FC483198caD49D6c2C560b48c9e825d2e",
      "0xa428434AAd9455C2859eD018eD0C03f504A9431d",
    ],
    2
  );
  console.log("Contract deployed to address: ", multi_sig_wallet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

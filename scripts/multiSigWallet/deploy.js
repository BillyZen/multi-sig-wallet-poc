const { ethers } = require("hardhat");
// const TEST_ACCOUNT_1 = process.env.TEST_ACCOUNT_1;
const TEST_ACCOUNT_2 = process.env.TEST_ACCOUNT_2;
const TEST_ACCOUNT_3 = process.env.TEST_ACCOUNT_3;

async function main() {
  const MultiSigWallet = await ethers.getContractFactory("MultiSig");

  const multi_sig_wallet = await MultiSigWallet.deploy(
    [TEST_ACCOUNT_2, TEST_ACCOUNT_3],
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

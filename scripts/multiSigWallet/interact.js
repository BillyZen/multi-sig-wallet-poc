const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MULTI_SIG_WALLET_CONTRACT_ADDRESS =
  process.env.MULTI_SIG_WALLET_CONTRACT_ADDRESS;
const API_URL = process.env.API_URL;

const { ethers } = require("hardhat");
const contract = require("../../artifacts/contracts/MultiSigWallet.sol/MultiSigWallet.json");

const alchemyProvider = new ethers.providers.JsonRpcProvider(
  API_URL,
  "sepolia"
);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const multiSigContract = new ethers.Contract(
  MULTI_SIG_WALLET_CONTRACT_ADDRESS,
  contract.abi,
  signer
);

async function main() {}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

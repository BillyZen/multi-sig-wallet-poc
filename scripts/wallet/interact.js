const PRIVATE_KEY = process.env.PRIVATE_KEY;
const WALLET_CONTRACT_ADDRESS = process.env.WALLET_CONTRACT_ADDRESS;
const API_URL = process.env.API_URL;

const { ethers } = require("hardhat");
const contract = require("../../artifacts/contracts/Wallet.sol/Wallet.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.JsonRpcProvider(
  API_URL,
  "sepolia"
);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const walletContract = new ethers.Contract(
  WALLET_CONTRACT_ADDRESS,
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

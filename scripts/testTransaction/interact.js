const PRIVATE_KEY = process.env.PRIVATE_KEY;
const TEST_TRANSACTION_CONTRACT_ADDRESS =
  process.env.TEST_TRANSACTION_CONTRACT_ADDRESS;
const API_URL = process.env.API_URL;

const { ethers } = require("hardhat");
const contract = require("../../artifacts/contracts/TestTransaction.sol/TestTransaction.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.JsonRpcProvider(
  API_URL,
  "sepolia"
);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const testTransactionContract = new ethers.Contract(
  TEST_TRANSACTION_CONTRACT_ADDRESS,
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

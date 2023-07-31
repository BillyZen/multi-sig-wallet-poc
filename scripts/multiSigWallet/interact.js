const PRIVATE_KEY_1 = process.env.PRIVATE_KEY_1;
const PRIVATE_KEY_2 = process.env.PRIVATE_KEY_2;
const PRIVATE_KEY_3 = process.env.PRIVATE_KEY_3;
const MULTI_SIG_WALLET_CONTRACT_ADDRESS =
  process.env.MULTI_SIG_WALLET_CONTRACT_ADDRESS;
const API_URL = process.env.API_URL;
const WEBSOCKET = process.env.ALCHEMY_WEBSOCKET;
const TEST_ACCOUNT_1 = process.env.TEST_ACCOUNT_1;
const TEST_ACCOUNT_2 = process.env.TEST_ACCOUNT_2;
const TEST_ACCOUNT_3 = process.env.TEST_ACCOUNT_3;

const { ethers } = require("hardhat");
const contract = require("../../artifacts/contracts/MultiSigWallet.sol/MultiSigWallet.json");

const alchemyProvider = new ethers.providers.JsonRpcProvider(
  API_URL,
  "sepolia"
);

const websocketProvider = new ethers.providers.JsonRpcProvider(
  WEBSOCKET,
  "sepolia"
);

const signer1 = new ethers.Wallet(PRIVATE_KEY_1, alchemyProvider);
const signer2 = new ethers.Wallet(PRIVATE_KEY_2, alchemyProvider);

const multiSigContract1 = new ethers.Contract(
  MULTI_SIG_WALLET_CONTRACT_ADDRESS,
  contract.abi,
  signer1
);

const multiSigContractListen = new ethers.Contract(
  PRIVATE_KEY_1,
  contract.abi,
  websocketProvider
);

async function main() {
  multiSigContractListen.on(
    "SubmitTransaction",
    ({ sender }, txIndex, _to, _value, _data) => {
      let info = {
        sender,
        txIndex,
        _to,
        _value,
        _data,
      };
      console.log(JSON.stringify(info, null, 4));
    }
  );

  const tx = await multiSigContract1.submitTransaction(TEST_ACCOUNT_2, 0.1, 1);
  await tx.wait();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

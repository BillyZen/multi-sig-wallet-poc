/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");

const { API_URL, PRIVATE_KEY_1 } = process.env;

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "development",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY_1}`],
    },
    development: {
      url: "http://127.0.0.1:7545",
      accounts: [`0x${PRIVATE_KEY_1}`],
    },
  },
  etherscan: {
    apiKey: "9IK1E5JZ4JKANFEYR1EF2NK6P2ZHNK6ZK4",
  },
};

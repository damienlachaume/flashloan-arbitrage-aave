require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_API_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: process.env.ALCHEMY_GOERLI_API_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

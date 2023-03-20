require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.GOERLI_API_KEY}`,
      accounts: [ process.env.MTMS_PRIVATE_KEY],
    },
  },
  etherscan:{
    apiKey:  process.env.ETHERSCAN_API_KEY
  }
};

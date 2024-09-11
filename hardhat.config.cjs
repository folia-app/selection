require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("solidity-coverage");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const config = {
  mocha: {
    timeout: 100_000_000,
  },
  solidity: {
    compilers: [
      {
        version: "0.6.11",
      },
      {
        version: "0.8.22",
        settings: {
          viaIR: true,
          optimizer: { enabled: true, runs: 200 },
        },
      },
    ],
  },
  networks: {
    mainnet: {
      accounts: { mnemonic: process.env.deploymentKey },
      gasPrice: 10_000_000_000, // 10 GWEI
      chainId: 1,
    },
    hardhat: {
      accounts: { mnemonic: process.env.deploymentKey },
      gasPrice: 1_000_000_000,
      blockGasLimit: 20_000_000,
      chainId: 12345,
      // loggingEnabled: false
    },
    baseSepolia: {
      // network ID: 84532
      // url: 'https://sepolia.base.org',
      url: process.env.baseSepoliaRPC,
      accounts: { mnemonic: process.env.deploymentKey },
      gas: 5_000_000,
      gasPrice: 100_000_000, // 0.1 GWEI
    },
    base: {
      // network ID: 84532
      // url: 'https://sepolia.base.org',
      url: process.env.baseRPC,
      accounts: { mnemonic: process.env.deploymentKey, initialIndex: 0 },
      // gas: 5_000_000,
      gasPrice: 10_000_000, // 0.01 GWEI
    },
    sepolia: {
      // url: 'https://sepolia.infura.io/v3/' + process.env.INFURA_API_KEY,
      // url: 'https://sepolia.rpc.grove.city/v1/' + process.env.grove,
      url: "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
      accounts: { mnemonic: process.env.deploymentKey },
      gasPrice: 15_000_000_000, // 15 GWEI
      // gas: 10_000_000,
    },
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 0.1,
    url: "http://localhost:8545",
    coinmarketcap: "38b60711-0559-45f4-8bda-e72f446c8278",
    enabled: true,
    showMethodSig: true,
  },
  sourcify: {
    enabled: false,
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.etherscanApiNew,
      sepolia: process.env.etherscanApiNew,
      base: process.env.etherscanApiBase,
      baseSepolia: process.env.etherscanApiBase,
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: false,
  },
};
module.exports = config;

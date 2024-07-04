const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = "various plate lecture ocean odor hat load require episode lens struggle defy";

module.exports = {
  networks: {
    fraxtalTestnet: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl: "https://rpc.testnet.frax.com",
        chainId: 2522,
        gas: 6000000,
        gasPrice: 1000000000,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true
      }),
      network_id: 2522 // Fraxtal Testnet Network ID
    }
  },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};

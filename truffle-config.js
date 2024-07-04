const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = "month now stem exist sorry cliff soda slice enroll nasty slot fan";

module.exports = {
  networks: {
    fraxtalMainnet: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl: "https://rpc.frax.com", // URL RPC dla Fraxtal Mainnet
        chainId: 252, // Chain ID dla Fraxtal Mainnet
        gas: 6000000,
        gasPrice: 1000000000,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true
      }),
      network_id: 252 // Network ID dla Fraxtal Mainnet
    },
    fraxtalTestnet: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl: "https://rpc.testnet.frax.com", // URL RPC dla Fraxtal Testnet
        chainId: 2522, // Chain ID dla Fraxtal Testnet
        gas: 6000000,
        gasPrice: 1000000000,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true
      }),
      network_id: 2522 // Network ID dla Fraxtal Testnet
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

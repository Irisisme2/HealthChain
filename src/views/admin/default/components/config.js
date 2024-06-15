import Web3 from 'web3';

// Połączenie z siecią Camp Network
const web3 = new Web3(Web3.givenProvider || 'https://camp-network-node-url');

// Adres i ABI twojego kontraktu
const contractAddress = '0xa131AD247055FD2e2aA8b156A11bdEc81b9eAD95';
const contractABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "patient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "record",
                "type": "string"
            }
        ],
        "name": "RecordStored",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "patient",
                "type": "address"
            }
        ],
        "name": "getRecord",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "record",
                "type": "string"
            }
        ],
        "name": "storeRecord",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Inicjalizacja kontraktu
const contract = new web3.eth.Contract(contractABI, contractAddress);

export { web3, contract };

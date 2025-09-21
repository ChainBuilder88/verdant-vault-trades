import { config } from '../../config';

export const contractABI = [
  {
    "inputs": [
      {"internalType": "address", "name": "_verifier", "type": "address"}
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "tradeId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "trader", "type": "address"},
      {"indexed": false, "internalType": "string", "name": "assetType", "type": "string"},
      {"indexed": false, "internalType": "uint32", "name": "amount", "type": "uint32"},
      {"indexed": false, "internalType": "uint32", "name": "price", "type": "uint32"},
      {"indexed": false, "internalType": "bool", "name": "isBuy", "type": "bool"}
    ],
    "name": "TradeExecuted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "vaultId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "manager", "type": "address"},
      {"indexed": false, "internalType": "string", "name": "name", "type": "string"}
    ],
    "name": "VaultCreated",
    "type": "event"
  },
  {
    "inputs": [
      {"internalType": "string", "name": "assetType", "type": "string"},
      {"internalType": "uint32", "name": "amount", "type": "uint32"},
      {"internalType": "uint32", "name": "price", "type": "uint32"},
      {"internalType": "bool", "name": "isBuy", "type": "bool"}
    ],
    "name": "executeTrade",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "string", "name": "name", "type": "string"},
      {"internalType": "string", "name": "description", "type": "string"},
      {"internalType": "uint32", "name": "initialAssets", "type": "uint32"}
    ],
    "name": "createVault",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "tradeId", "type": "uint256"}
    ],
    "name": "getTradeInfo",
    "outputs": [
      {"internalType": "uint32", "name": "amount", "type": "uint32"},
      {"internalType": "uint32", "name": "price", "type": "uint32"},
      {"internalType": "bool", "name": "isBuy", "type": "bool"},
      {"internalType": "bool", "name": "isActive", "type": "bool"},
      {"internalType": "address", "name": "trader", "type": "address"},
      {"internalType": "uint256", "name": "timestamp", "type": "uint256"},
      {"internalType": "string", "name": "assetType", "type": "string"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "vaultId", "type": "uint256"}
    ],
    "name": "getVaultInfo",
    "outputs": [
      {"internalType": "uint32", "name": "totalAssets", "type": "uint32"},
      {"internalType": "uint32", "name": "performance", "type": "uint32"},
      {"internalType": "bool", "name": "isActive", "type": "bool"},
      {"internalType": "bool", "name": "isVerified", "type": "bool"},
      {"internalType": "address", "name": "manager", "type": "address"},
      {"internalType": "string", "name": "name", "type": "string"},
      {"internalType": "string", "name": "description", "type": "string"},
      {"internalType": "uint256", "name": "createdTime", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "trader", "type": "address"}
    ],
    "name": "getPortfolioInfo",
    "outputs": [
      {"internalType": "uint32", "name": "totalValue", "type": "uint32"},
      {"internalType": "uint32", "name": "profitLoss", "type": "uint32"},
      {"internalType": "uint32", "name": "tradeCount", "type": "uint32"},
      {"internalType": "bool", "name": "isPrivate", "type": "bool"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

export const contractAddress = config.contractAddress;
export const verifierAddress = config.verifierAddress;

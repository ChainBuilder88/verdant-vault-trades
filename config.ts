// Environment Configuration
export const config = {
  chainId: 11155111, // Sepolia
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || 'https://sepolia.infura.io/v3/YOUR_INFURA_KEY',
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'YOUR_WALLET_CONNECT_PROJECT_ID',
  infuraApiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY || 'YOUR_INFURA_API_KEY',
  contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '', // Will be set after deployment
  verifierAddress: process.env.NEXT_PUBLIC_VERIFIER_ADDRESS || '', // Will be set after deployment
} as const;

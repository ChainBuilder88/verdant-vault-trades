# Verdant Vault Trades

A privacy-preserving trading platform built with FHE (Fully Homomorphic Encryption) technology for secure and private financial transactions.

## Features

- **FHE-Encrypted Trading**: All trade data is encrypted using fully homomorphic encryption
- **Private Portfolio Management**: Secure portfolio tracking with privacy controls
- **Vault Creation**: Create and manage investment vaults with encrypted performance data
- **Reputation System**: Encrypted reputation tracking for traders and managers
- **Wallet Integration**: Seamless connection with popular Web3 wallets via RainbowKit
- **Audit Trail**: Transparent yet private transaction history

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Tailwind CSS
- **Web3**: Wagmi, RainbowKit, Viem
- **Blockchain**: Ethereum Sepolia Testnet
- **Encryption**: FHE (Fully Homomorphic Encryption)
- **Smart Contracts**: Solidity with FHE support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ChainBuilder88/verdant-vault-trades.git
cd verdant-vault-trades
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit the environment variables
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:8080`

## Smart Contract Deployment

The project includes FHE-enabled smart contracts for secure trading operations:

- **VerdantVaultTrades.sol**: Main contract with FHE encryption
- **Trade Management**: Encrypted trade execution and tracking
- **Portfolio Management**: Private portfolio data storage
- **Vault Operations**: Secure vault creation and management

### Deploy Contracts

1. Install Hardhat:
```bash
npm install --save-dev hardhat
```

2. Configure Hardhat for FHE deployment
3. Deploy to Sepolia testnet
4. Update contract addresses in configuration

## Architecture

### FHE Integration

The platform uses FHE to encrypt sensitive financial data while maintaining the ability to perform computations:

- **Encrypted Trade Data**: Amount, price, and trade type are encrypted
- **Private Portfolio Values**: Total value and profit/loss calculations
- **Secure Reputation System**: Encrypted reputation scores
- **Audit Compliance**: Regulators can decrypt data for verification

### Security Features

- **Zero-Knowledge Proofs**: Verify transactions without revealing details
- **Encrypted State Management**: All sensitive data remains encrypted
- **Privacy Controls**: Users can control data visibility
- **Regulatory Compliance**: Built-in audit capabilities

## API Reference

### Smart Contract Functions

#### Trade Operations
- `executeTrade(assetType, amount, price, isBuy)`: Execute encrypted trade
- `getTradeInfo(tradeId)`: Retrieve trade information
- `deactivateTrade(tradeId)`: Deactivate a trade

#### Vault Management
- `createVault(name, description, initialAssets)`: Create new vault
- `getVaultInfo(vaultId)`: Get vault information
- `updateVaultPerformance(vaultId, performance)`: Update performance
- `verifyVault(vaultId, isVerified)`: Verify vault (verifier only)

#### Portfolio Management
- `getPortfolioInfo(trader)`: Get portfolio information
- `setPortfolioPrivacy(trader, isPrivate)`: Set privacy settings

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue on GitHub
- Join our Discord community
- Check the documentation wiki

## Roadmap

- [ ] Multi-chain support
- [ ] Advanced FHE operations
- [ ] Mobile app development
- [ ] Institutional features
- [ ] Cross-platform integration

---

Built with ❤️ by the Verdant Vault team
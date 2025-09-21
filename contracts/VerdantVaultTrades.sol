// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@fhevm/lib/Reencrypt.sol";
import "@fhevm/lib/Fhe.sol";

contract VerdantVaultTrades {
    using Fhe for euint32;
    using Fhe for ebool;
    
    struct Trade {
        euint32 tradeId;
        euint32 amount;
        euint32 price;
        ebool isBuy;
        ebool isActive;
        address trader;
        uint256 timestamp;
        string assetType;
    }
    
    struct Portfolio {
        euint32 totalValue;
        euint32 profitLoss;
        euint32 tradeCount;
        ebool isPrivate;
        mapping(string => euint32) holdings;
    }
    
    struct Vault {
        euint32 vaultId;
        euint32 totalAssets;
        euint32 performance;
        ebool isActive;
        ebool isVerified;
        address manager;
        string name;
        string description;
        uint256 createdTime;
    }
    
    mapping(uint256 => Trade) public trades;
    mapping(address => Portfolio) public portfolios;
    mapping(uint256 => Vault) public vaults;
    mapping(address => euint32) public traderReputation;
    mapping(address => euint32) public managerReputation;
    
    uint256 public tradeCounter;
    uint256 public vaultCounter;
    
    address public owner;
    address public verifier;
    
    event TradeExecuted(uint256 indexed tradeId, address indexed trader, string assetType, uint32 amount, uint32 price, bool isBuy);
    event VaultCreated(uint256 indexed vaultId, address indexed manager, string name);
    event PortfolioUpdated(address indexed trader, uint32 totalValue, uint32 profitLoss);
    event ReputationUpdated(address indexed user, uint32 reputation);
    event VaultVerified(uint256 indexed vaultId, bool isVerified);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function executeTrade(
        string memory assetType,
        euint32 amount,
        euint32 price,
        ebool isBuy
    ) public returns (uint256) {
        require(bytes(assetType).length > 0, "Asset type cannot be empty");
        
        uint256 tradeId = tradeCounter++;
        
        trades[tradeId] = Trade({
            tradeId: amount, // Will be set properly
            amount: amount,
            price: price,
            isBuy: isBuy,
            isActive: Fhe.asEbool(true),
            trader: msg.sender,
            timestamp: block.timestamp,
            assetType: assetType
        });
        
        // Update portfolio
        _updatePortfolio(msg.sender, assetType, amount, price, isBuy);
        
        emit TradeExecuted(tradeId, msg.sender, assetType, Fhe.decrypt(amount), Fhe.decrypt(price), Fhe.decrypt(isBuy));
        return tradeId;
    }
    
    function createVault(
        string memory name,
        string memory description,
        euint32 initialAssets
    ) public returns (uint256) {
        require(bytes(name).length > 0, "Vault name cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        
        uint256 vaultId = vaultCounter++;
        
        vaults[vaultId] = Vault({
            vaultId: initialAssets, // Will be set properly
            totalAssets: initialAssets,
            performance: Fhe.asEuint32(0),
            isActive: Fhe.asEbool(true),
            isVerified: Fhe.asEbool(false),
            manager: msg.sender,
            name: name,
            description: description,
            createdTime: block.timestamp
        });
        
        emit VaultCreated(vaultId, msg.sender, name);
        return vaultId;
    }
    
    function updateVaultPerformance(
        uint256 vaultId,
        euint32 newPerformance
    ) public {
        require(vaults[vaultId].manager == msg.sender, "Only vault manager can update performance");
        require(Fhe.decrypt(vaults[vaultId].isActive), "Vault must be active");
        
        vaults[vaultId].performance = newPerformance;
    }
    
    function verifyVault(uint256 vaultId, ebool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify vaults");
        require(vaults[vaultId].manager != address(0), "Vault does not exist");
        
        vaults[vaultId].isVerified = isVerified;
        emit VaultVerified(vaultId, Fhe.decrypt(isVerified));
    }
    
    function updateReputation(address user, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(user != address(0), "Invalid user address");
        
        // Determine if user is trader or manager based on context
        if (trades[tradeCounter - 1].trader == user) {
            traderReputation[user] = reputation;
        } else {
            managerReputation[user] = reputation;
        }
        
        emit ReputationUpdated(user, Fhe.decrypt(reputation));
    }
    
    function _updatePortfolio(
        address trader,
        string memory assetType,
        euint32 amount,
        euint32 price,
        ebool isBuy
    ) internal {
        Portfolio storage portfolio = portfolios[trader];
        
        euint32 tradeValue = amount * price;
        
        if (Fhe.decrypt(isBuy)) {
            portfolio.totalValue = portfolio.totalValue + tradeValue;
            portfolio.holdings[assetType] = portfolio.holdings[assetType] + amount;
        } else {
            portfolio.totalValue = portfolio.totalValue - tradeValue;
            portfolio.holdings[assetType] = portfolio.holdings[assetType] - amount;
        }
        
        portfolio.tradeCount = portfolio.tradeCount + Fhe.asEuint32(1);
        
        emit PortfolioUpdated(trader, Fhe.decrypt(portfolio.totalValue), Fhe.decrypt(portfolio.profitLoss));
    }
    
    function getTradeInfo(uint256 tradeId) public view returns (
        uint32 amount,
        uint32 price,
        bool isBuy,
        bool isActive,
        address trader,
        uint256 timestamp,
        string memory assetType
    ) {
        Trade storage trade = trades[tradeId];
        return (
            Fhe.decrypt(trade.amount),
            Fhe.decrypt(trade.price),
            Fhe.decrypt(trade.isBuy),
            Fhe.decrypt(trade.isActive),
            trade.trader,
            trade.timestamp,
            trade.assetType
        );
    }
    
    function getVaultInfo(uint256 vaultId) public view returns (
        uint32 totalAssets,
        uint32 performance,
        bool isActive,
        bool isVerified,
        address manager,
        string memory name,
        string memory description,
        uint256 createdTime
    ) {
        Vault storage vault = vaults[vaultId];
        return (
            Fhe.decrypt(vault.totalAssets),
            Fhe.decrypt(vault.performance),
            Fhe.decrypt(vault.isActive),
            Fhe.decrypt(vault.isVerified),
            vault.manager,
            vault.name,
            vault.description,
            vault.createdTime
        );
    }
    
    function getPortfolioInfo(address trader) public view returns (
        uint32 totalValue,
        uint32 profitLoss,
        uint32 tradeCount,
        bool isPrivate
    ) {
        Portfolio storage portfolio = portfolios[trader];
        return (
            Fhe.decrypt(portfolio.totalValue),
            Fhe.decrypt(portfolio.profitLoss),
            Fhe.decrypt(portfolio.tradeCount),
            Fhe.decrypt(portfolio.isPrivate)
        );
    }
    
    function getTraderReputation(address trader) public view returns (uint32) {
        return Fhe.decrypt(traderReputation[trader]);
    }
    
    function getManagerReputation(address manager) public view returns (uint32) {
        return Fhe.decrypt(managerReputation[manager]);
    }
    
    function setPortfolioPrivacy(address trader, ebool isPrivate) public {
        require(msg.sender == trader, "Only trader can set privacy");
        portfolios[trader].isPrivate = isPrivate;
    }
    
    function deactivateTrade(uint256 tradeId) public {
        require(trades[tradeId].trader == msg.sender, "Only trader can deactivate trade");
        trades[tradeId].isActive = Fhe.asEbool(false);
    }
    
    function deactivateVault(uint256 vaultId) public {
        require(vaults[vaultId].manager == msg.sender, "Only manager can deactivate vault");
        vaults[vaultId].isActive = Fhe.asEbool(false);
    }
}

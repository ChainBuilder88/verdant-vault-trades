# Vercel Deployment Guide for Verdant Vault Trades

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Ensure your code is pushed to GitHub
3. **Environment Variables**: Prepare your configuration values

## Step-by-Step Deployment

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository: `ChainBuilder88/verdant-vault-trades`
4. Click "Import" to proceed

### Step 2: Configure Build Settings

1. **Framework Preset**: Select "Vite"
2. **Root Directory**: Leave as default (./)
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `npm install`

### Step 3: Environment Variables Configuration

Add the following environment variables in Vercel dashboard:

```bash
# Chain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID

# Infura Configuration
NEXT_PUBLIC_INFURA_API_KEY=YOUR_INFURA_API_KEY
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia

# Contract Configuration (Update after deployment)
NEXT_PUBLIC_CONTRACT_ADDRESS=YOUR_DEPLOYED_CONTRACT_ADDRESS
NEXT_PUBLIC_VERIFIER_ADDRESS=YOUR_VERIFIER_ADDRESS
```

### Step 4: Deploy Configuration

1. **Node.js Version**: Set to 18.x or higher
2. **Build Settings**:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Step 5: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel

### Step 6: Deploy

1. Click "Deploy" button
2. Wait for build to complete (usually 2-3 minutes)
3. Your app will be available at the provided Vercel URL

## Post-Deployment Configuration

### Smart Contract Deployment (Separate Process)

> **Important**: Smart contract deployment is a separate process from frontend deployment. The frontend can be deployed to Vercel without FHE dependencies.

1. **Deploy Contracts to Sepolia** (Local Development):
   ```bash
   # Install Hardhat (in a separate directory or after frontend deployment)
   npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
   
   # Configure hardhat.config.ts for deployment
   # Deploy contracts
   npx hardhat run scripts/deploy.ts --network sepolia
   ```

2. **Update Environment Variables**:
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Update `NEXT_PUBLIC_CONTRACT_ADDRESS` with deployed contract address
   - Update `NEXT_PUBLIC_VERIFIER_ADDRESS` with verifier address

### Domain Configuration

1. **Custom Domain Setup**:
   - Add domain in Vercel dashboard
   - Configure DNS records:
     - Type: CNAME
     - Name: www (or @)
     - Value: cname.vercel-dns.com

2. **SSL Certificate**: Automatically provided by Vercel

## Monitoring and Maintenance

### Performance Monitoring

1. **Vercel Analytics**: Enable in project settings
2. **Web Vitals**: Monitor Core Web Vitals
3. **Error Tracking**: Set up error monitoring

### Updates and Redeployment

1. **Automatic Deployments**: Enabled by default for main branch
2. **Manual Deployments**: Trigger from Vercel dashboard
3. **Preview Deployments**: Created for pull requests

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version (18.x+)
   - Verify all dependencies are installed
   - Review build logs for specific errors

2. **Environment Variables**:
   - Ensure all required variables are set
   - Check variable names (case-sensitive)
   - Verify values are correct

3. **Wallet Connection Issues**:
   - Verify WalletConnect Project ID
   - Check RPC URL configuration
   - Ensure network is correct (Sepolia)

### Performance Optimization

1. **Bundle Analysis**:
   ```bash
   npm run build
   npx vite-bundle-analyzer dist
   ```

2. **Image Optimization**: Use Vercel's image optimization
3. **Caching**: Configure appropriate cache headers

## Security Considerations

1. **Environment Variables**: Never commit sensitive data
2. **API Keys**: Rotate keys regularly
3. **Access Control**: Limit dashboard access
4. **HTTPS**: Always use HTTPS (automatic with Vercel)

## Support and Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vite Documentation**: [vitejs.dev](https://vitejs.dev)
- **RainbowKit Documentation**: [rainbowkit.com](https://rainbowkit.com)
- **Wagmi Documentation**: [wagmi.sh](https://wagmi.sh)

## Deployment Checklist

- [ ] Repository connected to Vercel
- [ ] Build settings configured
- [ ] Environment variables set
- [ ] Domain configured (if custom)
- [ ] Smart contracts deployed
- [ ] Contract addresses updated
- [ ] SSL certificate active
- [ ] Performance monitoring enabled
- [ ] Error tracking configured

---

**Note**: This deployment guide assumes you have already deployed your smart contracts to the Sepolia testnet. If not, complete the smart contract deployment first before updating the environment variables.

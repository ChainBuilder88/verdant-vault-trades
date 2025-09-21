import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';
import { config } from '../../config';

export const wagmiConfig = getDefaultConfig({
  appName: 'Verdant Vault Trades',
  projectId: config.walletConnectProjectId,
  chains: [sepolia],
  ssr: false,
});

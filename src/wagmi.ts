import { http, createConfig } from '@wagmi/vue';
import { mainnet, sepolia } from '@wagmi/vue/chains';
import { injected, walletConnect } from '@wagmi/vue/connectors';

const projectId = '3fbb6bba6f1de962d911bb5b5c9dba88';

export const config = createConfig({
  chains: [sepolia, mainnet],
  connectors: [injected(), walletConnect({ projectId })],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

declare module '@wagmi/vue' {
  interface Register {
    config: typeof config;
  }
}

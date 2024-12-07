import { Buffer } from 'buffer';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { WagmiPlugin } from '@wagmi/vue';
import { createApp } from 'vue';

// `@coinbase-wallet/sdk` uses `Buffer`
globalThis.Buffer = Buffer;

import App from './App.vue';
import './style.css';
import { config } from './wagmi';

createApp(App)
  .use(WagmiPlugin, { config })
  .use(VueQueryPlugin, {})
  .mount('#app');

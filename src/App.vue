<script setup lang="ts">
import { useAccount } from '@wagmi/vue';
import Account from './Account.vue';
import Connect from './Connect.vue';
import SendTransaction from './SendTransaction.vue';

const { isConnected } = useAccount();
</script>

<template>
  <Account v-if="isConnected" />
  <Connect v-else />
  <SendTransaction v-if="isConnected" />
</template>

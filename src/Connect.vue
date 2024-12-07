<script setup lang="ts">
import { useConnect, useChainId } from '@wagmi/vue';

const chainId = useChainId();
const { connectors, connect } = useConnect();
</script>

<template>
  <div class="container">
    <div class="buttons">
      <button
        v-for="connector in connectors"
        className="button"
        @click="connect({ connector, chainId })"
        type="button"
      >
        {{ connector.name }}
      </button>
    </div>
  </div>
</template>

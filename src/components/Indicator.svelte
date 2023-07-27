<script lang="ts">
  import { onlineStore } from '@/main.js';
  $: online = $onlineStore;
  $: console.log(online);
</script>

<div
  class="w-2 h-2 rounded-full border bg-gray-400 border-gray-900 absolute top-1 right-1"
  class:online
></div>

<style lang="postcss">
  .online {
    @apply bg-green-300 border-green-900;
  }
</style>
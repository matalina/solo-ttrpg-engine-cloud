<script lang="ts">
  import { systemMessagesStore } from "@lib/system-messages.js";
</script>

{#each Object.keys($systemMessagesStore) as key}
<div class="message {$systemMessagesStore[key].type}">
  {$systemMessagesStore[key].message}
</div>
{/each}

<style class="postcss">
.message {
  @apply p-3;
}
.error {
  @apply bg-red-200 text-red-700 border-red-800;
}
</style>
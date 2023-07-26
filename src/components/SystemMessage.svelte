<script lang="ts">
  import { systemMessages, systemMessagesStore } from "@lib/system-messages.js";
  import Icon from "./Icon.svelte";

  function close(key) {
    systemMessages().close(key);
  }

</script>

{#each Object.keys($systemMessagesStore) as key}
<div class="message {$systemMessagesStore[key].type} flex justify-between">
  <span>
    {$systemMessagesStore[key].message}
  </span>
  <button on:click={() => close(key)}>
    <Icon type="solid" name="times" />
  </button>
</div>
{/each}

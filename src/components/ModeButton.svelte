<script lang="ts">
  import Icon from './Icon.svelte';
  import { modeStore } from '@/main.ts';
  export let type;
  export let icon;
  export let mode;

  $: active = $modeStore === mode;

  function changeMode(mode: string) {
    $modeStore = mode;
  }

</script>

<button
  class="button w-full mb-1"
  class:active
  on:click={() => changeMode(mode)}>
  <Icon {type} name={icon} />
</button>

<style lang="postcss">
  .active {
    @apply bg-amber-300;
  }
</style>
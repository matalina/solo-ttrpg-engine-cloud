<script lang="ts">
  import Icon from './Icon.svelte';
  import { systemStore } from '@/main.ts';
  export let type;
  export let icon;
  export let mode;

  $: active = $systemStore === mode;

  function changeSystem(mode: string) {
    $systemStore = mode;
  }

</script>

<button
  class="button w-full mb-1 mr-1"
  class:active
  title={mode}
  on:click={() => changeSystem(mode)}>
  <Icon {type} name={icon} />
</button>

<style lang="postcss">
  .active {
    @apply bg-amber-300;
  }
</style>
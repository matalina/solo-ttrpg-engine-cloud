<script lang="ts">
import Separator from './Separator.svelte';
import ModeButton from './ModeButton.svelte';
  import { modeStore } from './../main.ts';
  import Tools from './Tools.svelte';
  import Icon from "./Icon.svelte";


</script>

<div class="md:w-1/5 border-l border-amber-800 md:flex md:flex">
  <Tools />
  <div class="w-14 border-l border-amber-800 p-2">
    <button class="button w-full mb-1">
      <Icon type="regular" name="layer-plus" />
    </button>
    <Separator/>
    <button class="button w-full mb-1">
      <Icon type="regular" name="user-plus" />
    </button>
    <button class="button w-full mb-1">
      <Icon type="regular" name="folder-plus" />
    </button>
    <button class="button w-full mb-1">
      <Icon type="regular" name="file-plus" />
    </button>
    <Separator/>
    <ModeButton type="regular" icon="brain-circuit" mode="brainstorm" />
    <ModeButton type="regular" icon="pen-nib" mode="story" />
    <Separator/>
    <button class="button w-full">
      <Icon type="regular" name="times" />
    </button>
  </div>

</div>
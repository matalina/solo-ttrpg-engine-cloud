<script lang="ts">
import FileTree from './FileTree.svelte';
import SystemButton from './SystemButton.svelte';
</script>

<div class="p-3 md:w-1/5 border-r border-amber-800 overflow-scroll flex flex-col">
  <div class="flex">
    <SystemButton type="regular" icon="layer-group" mode="games" />
    <SystemButton type="regular" icon="folder" mode="folders"/>
    <SystemButton type="regular" icon="id-card" mode="characters"/>
    <SystemButton type="regular" icon="earth-americas" mode="map"/>
    <SystemButton type="regular" icon="photo-film-music" mode="media"/>
  </div>
  <FileTree/>
</div>
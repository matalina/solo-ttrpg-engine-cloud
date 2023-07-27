<script lang="ts">
  import StoryBoard from '@components/StoryBoard.svelte';
  import Dropbox from "@components/Dropbox.svelte";
  import SystemMessage from "@components/SystemMessage.svelte";
  import FileSystem from "@components/FileSystem.svelte";
  import ToolBox from "@components/ToolBox.svelte";
</script>

<header class="p-3 md:flex md:justify-between border-b-2 border-amber-800">
  <div class="text-3xl">Solo TTRPG Engine</div>
  <div class="">
    <Dropbox />
  </div>
</header>

<div class="flex-grow md:flex content-stretch items-strech">
  <FileSystem />
  <StoryBoard />
  <ToolBox />
</div>

<div class="absolute top-0 inset-1/2 w-full md:w-80 md:-ml-40 m-2">
  <SystemMessage/>
</div>
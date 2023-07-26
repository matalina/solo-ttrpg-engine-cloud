<script lang="ts">
  import Dropbox from "@components/Dropbox.svelte";
  import SystemMessage from "@components/SystemMessage.svelte";
  import Icon from "@components/Icon.svelte";
</script>

<header class="p-3 md:flex md:justify-between border-b-2 border-amber-800">
  <div class="text-3xl">Solo TTRPG Engine</div>
  <div class="">
    <Dropbox />
  </div>
</header>

<div class="md:flex h-full">
  <div class="p-3 md:w-1/4 border-r border-amber-800 overflow-scroll">
    Test
  </div>
  <div class="md:flex-grow md:flex">
    <main class="p-3 flex-grow">
      Main area
    </main>
    <div class="w-12 p-1 border-l border-amber-800">
      <div class="px-2 py-2 border border-amber-800 text-center rounded-md">
        <Icon type="solid" name="times" />
      </div>
    </div>
  </div>
</div>

<div class="absolute top-0 inset-1/2 w-full md:w-80 md:-ml-40 m-2">
  <SystemMessage/>
</div>
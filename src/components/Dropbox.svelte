<script lang="ts">
import { onlineStore } from '@/main.js';
  import Indicator from '@components/Indicator.svelte';
  import { dropboxTokenStore, dropBox } from '@lib/dropbox.js';
  import Icon from '@components/Icon.svelte';
  import { systemMessages } from '@/lib/system-messages.js';

  $: loggedIn = !!($dropboxTokenStore?.accessToken);
  $: disabled = $onlineStore? undefined: true;

  async function authenticate() {
    dropBox.authorize();
  }

  async function sync() {
    systemMessages().send('warning','Sync is not yet implemented');
  }

  async function logout() {
    dropBox.revoke();
  }
</script>

{#if !loggedIn}
<button class="button relative" on:click={authenticate} class:disabled {disabled}>
  <Icon type="brands" name="dropbox"/> Sign in with Dropbox
  <Indicator />
</button>
{:else}
<button class="button relative" on:click={sync} class:disabled {disabled}>
  <Icon type="thin" name="arrows-rotate"/> Sync
  <Indicator />
</button>
<button class="button relative" on:click={logout} class:disabled {disabled}>
  <Icon type="thin" name="arrow-right-from-bracket"/> Logout
  <Indicator />
</button>
{/if}
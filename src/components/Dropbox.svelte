<script lang="ts">
  import { dropboxTokenStore, dropBox } from '@lib/dropbox.js';
  import Icon from '@components/Icon.svelte';
  import { systemMessages } from '@/lib/system-messages.js';

  $: loggedIn = !!($dropboxTokenStore?.accessToken);

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
<button class="button" on:click={authenticate}>
  <Icon type="brands" name="dropbox"/> Sign in with Dropbox
</button>
{:else}
<button class="button" on:click={sync}>
  <Icon type="thin" name="arrows-rotate"/> Sync
</button>
<button class="button" on:click={logout}>
  <Icon type="thin" name="arrow-right-from-bracket"/> Logout
</button>
{/if}
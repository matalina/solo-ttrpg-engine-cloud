<script lang="ts">
  import { dropboxTokenStore, dropBox } from '@lib/dropbox.js';
  import Icon from '@components/Icon.svelte';

  $: loggedIn = !!($dropboxTokenStore?.accessToken);

  async function authenticate() {
    dropBox.authorize();
  }

  async function sync() {

  }

  async function logout() {
    dropBox.revoke();
  }
</script>

{#if !loggedIn}
<button on:click={authenticate}>
  <Icon type="brands" name="dropbox"/> Sign in with Dropbox
</button>
{:else}
<button on:click={sync}>
  <Icon type="thin" name="arrows-rotate"/> Sync
</button>
<button on:click={logout}>
  <Icon type="thin" name="arrow-right-from-bracket"/> Logout
</button>
{/if}
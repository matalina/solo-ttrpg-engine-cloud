<script lang="ts">
import { dropboxTokenStore, dropBox } from '../lib/dropbox';

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
<button on:click={authenticate}>Dropbox</button>
{:else}
<button on:click={sync}>Sync</button> <button on:click={logout}>Logout</button>
{/if}
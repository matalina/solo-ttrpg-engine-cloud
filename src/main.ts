import App from '@/App.svelte'
import '@/index.css'
import { dropBox } from '@/lib/dropbox.js';
import { writable } from 'svelte/store';

export const onlineStore = writable<boolean>(true);
export const modeStore = writable<string>('brainstorm'); // story, brainstorm
export const savedGameStore = writable<string|null>(null); // id of game

window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus() {
  onlineStore.set(navigator?.onLine);
}

const app = new App({ target: document.getElementById('app') });

export default app;

dropBox.access();
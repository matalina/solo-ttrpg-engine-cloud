import App from '@/App.svelte'
import '@/index.css'
import { dropBox } from '@/lib/dropbox.js';

const app = new App({ target: document.getElementById('app') });

export default app;

dropBox.access();
import App from './App.svelte'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { dropBox } from './lib/dropbox';
import { systemMessages } from './lib/system-messages';

const app = new App({
  target: document.getElementById('app')
});

export default app;

dropBox.access();
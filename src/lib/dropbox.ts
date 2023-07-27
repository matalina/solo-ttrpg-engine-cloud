import { writable } from "svelte/store";
import { systemMessages } from '@lib/system-messages.js';

interface DropboxCredentials {
  clientId: string;
  secret: string;
}

const baseUrl = 'https://www.dropbox.com/';
const apiUrl = 'https://api.dropboxapi.com/';

const response = await fetch('.netlify/functions/dropbox', {
  method: 'post',
});
const dpx: DropboxCredentials = await response.json();

const DROPBOX_CLIENT_ID = dpx.clientId;
const DROPBOX_CLIENT_SECRET = dpx.secret;

export interface DropboxToken {
  accessToken: string;
  refreshToken: string;
  uid: string;
  expiresAt: number;
}

export const dropBox = {
  authorize,
  access,
  revoke,
  request,
};

const token = JSON.parse(localStorage.getItem('dropboxToken')) || null;
export const dropboxTokenStore = writable(token);

async function getToken() {
  const token = JSON.parse(localStorage.getItem('dropboxToken')) || null;

  if (!token) return null;
  if (Date.now() < token.expiresAt) return token;
  return await refreshToken(token);
}

async function refreshToken(token: DropboxToken) {
  if(!token.refreshToken) authorize();

  const url = `${apiUrl}oauth2/token`;
  const loc = new URL(window.location.href);
  const uri = `${loc.protocol}//${loc.host}`;

  const data = {
    refresh_token: token.refreshToken,
    grant_type: 'refresh_token',
    client_id: DROPBOX_CLIENT_ID,
    client_secret: DROPBOX_CLIENT_SECRET,
  };

  const result:any  = await call(url,data);

  if (result.error) {
    systemMessages().send('error', `${result.error}: ${result.message}`);
    return;
  }

  const tokens = {
    accessToken: result.access_token,
    refreshToken: result.refresh_token,
    uid: result.uid,
    expiresAt: Date.now() + result.expires_in
  };

  dropboxTokenStore.set(tokens);
  localStorage.setItem('dropboxToken', JSON.stringify(tokens));
  return tokens;
}

async function authorize() {
  const url = new URL(window.location.href);
  const uri = `${url.protocol}//${url.host}`;

  window.location.href =  `${baseUrl}oauth2/authorize?client_id=${DROPBOX_CLIENT_ID}&token_access_type=offline&response_type=code&redirect_uri=${uri}`
}

async function access() {
  const url = `${apiUrl}oauth2/token`;
  const loc = new URL(window.location.href);
  const uri = `${loc.protocol}//${loc.host}`;

  const code = loc.searchParams.get('code');

  if (!code) return;

  const data = {
    code,
    grant_type: 'authorization_code',
    redirect_uri: uri,
    client_id: DROPBOX_CLIENT_ID,
    client_secret: DROPBOX_CLIENT_SECRET,
  };

  const result:any  = await call(url,data);

  if(!result.access_token) {
    systemMessages().send('error', result.message);
    return;
  }

  const tokens = {
    accessToken: result.access_token,
    refreshToken: result.refresh_token,
    uid: result.uid,
    expiresAt: Date.now() + result.expires_in
  };

  dropboxTokenStore.set(tokens);
  localStorage.setItem('dropboxToken', JSON.stringify(tokens));
  if(code) {
    window.location.replace(uri);
  }
}

async function revoke() {
  const path = 'auth/token/revoke';

  const result = request(path, 'post');

  dropboxTokenStore.set(null);
  localStorage.removeItem('dropboxToken');
}

async function call(url: string, data: any) {
  const body = [];
  for(let key in data) {
    let value = data[key];
    body.push(encodeURIComponent(key) +'='+encodeURIComponent(value));
  }

  const response = await fetch(url, {
    method: 'post',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: body.join('&'),
  });
  return await response.json();
}

interface RequestObject {
  method: string;
  headers: {
    [key: string]: string;
  }
  body?: string;
}

async function request(path: string, method: string, body: any = null) {
  const url = `${apiUrl}2/${path}`;

  const tokens = await getToken();
  const data: RequestObject = {
    method,
    headers: {
      'authorization': `Bearer ${tokens.accessToken}`
    }
  };

  if (body) {
    data.headers['content-type'] = 'application/json';
    data.body = JSON.stringify(body);
  }

  const response = await fetch(url, data);
  return await response.json();
}
import { writable } from "svelte/store";

const MESSAGE_TIMEOUT = 5 * 1000;

export interface SystemMessages {
  [id: string]: SystemMessage | undefined;
}

export interface SystemMessage {
  id: number;
  type: string;
  message: string;
}

export const systemMessagesStore = writable<SystemMessages>(JSON.parse(sessionStorage.getItem('messages')) || {})

export function systemMessages() {
  const messages: SystemMessages = JSON.parse(sessionStorage.getItem('messages')) || {};

  function save(id: number, type: string, message: string) {
    messages[id.toString()] = {id, type, message};
    sessionStorage.setItem('messages', JSON.stringify(messages));
    systemMessagesStore.set({...messages});
  }

  function remove(id: number) {
    delete messages[id.toString()];
    sessionStorage.setItem('messages', JSON.stringify(messages));
    systemMessagesStore.set({...messages});
  }

  function send(type: string, message: string) {
    const id = Date.now();
    save(id, type, message);

    setTimeout(() => {
      remove(id);
    }, MESSAGE_TIMEOUT);
  }

  return {
    send,
  }
}
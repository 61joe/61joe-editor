// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { IElectronIpcHandler } from 'types';

// export type Channels = 'ipc-example';

const electronHandler: IElectronIpcHandler = {
  ipcRenderer: {
    send(channel, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
    invoke(channel, ...args: unknown[]) {
      return ipcRenderer.invoke(channel, ...args);
    },
  },

  ipcRendererApi: {
    getAuth: () => {
      return electronHandler.ipcRenderer.invoke('renderer-get-auth');
    },
    onUpdateAuth: (cb) => {
      electronHandler.ipcRenderer.on('main-update-auth', (_, value) =>
        cb(value),
      );
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

// export type ElectronHandler = typeof electronHandler;

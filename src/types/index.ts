import { UserAuthItemType } from './auth';

type AnyToVoidFunc = (value: any) => void;

export interface IElectronIpcHandler<T extends string = ChannelType> {
  ipcRenderer: IpcRenderer<T>;
  ipcRendererApi: IpcRendererApi;
}

interface IpcRenderer<T> {
  send: (channel: T, ...args: unknown[]) => void;
  on: (channel: T, func: (...args: unknown[]) => void) => () => void;
  once: (channel: T, func: (...args: unknown[]) => void) => void;
  invoke: (channel: T, ...args: unknown[]) => Promise<any>;
}

interface IpcRendererApi {
  getAuth: () => Promise<Array<UserAuthItemType>>;
  onUpdateAuth: (cb: AnyToVoidFunc) => void;
}

export type ChannelType =
  | 'ipc-example'
  // renderer
  | 'renderer-get-auth'
  // main
  | 'main-update-auth';

import { IElectronIpcHandler } from 'types';
// import { ElectronHandler } from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: IElectronIpcHandler;
  }
}

export {};

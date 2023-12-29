import { IElectronIpcHandler } from 'types';

class Ipc {
  readonly bridge: IElectronIpcHandler;

  constructor() {
    this.bridge = window.electron;
  }
}

export default new Ipc();

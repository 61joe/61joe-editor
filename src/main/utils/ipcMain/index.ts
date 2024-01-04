import { ChannelType } from '@type/index';
import { ipcMain } from 'electron';
import initialAuth from './auth';

export const ipcMainHandle = (
  channel: ChannelType,
  listener: (event: Electron.IpcMainInvokeEvent, ...args: any[]) => any,
) => {
  ipcMain.handle(channel, listener);
};

const initialIpcMain = () => {
  initialAuth();
};

export default initialIpcMain;

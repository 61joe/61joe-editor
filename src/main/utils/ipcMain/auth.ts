import { ipcMainHandle } from '.';
import StoreManager from '../StoreManager';

const handleGetAuth = () => {
  return StoreManager.getAuths();
};

export default function initialAuth() {
  ipcMainHandle('renderer-get-auth', handleGetAuth);
}

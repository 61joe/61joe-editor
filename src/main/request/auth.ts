import { net } from 'electron';
import { API_HOST } from '../../../config';
import { commonFetch } from './request';

const authApi = {
  alive: `${API_HOST}/auth/alive`,
};

const getAuthALive = async () => {
  const { success } = await commonFetch({ url: authApi.alive });
  return success;
};

export { getAuthALive };

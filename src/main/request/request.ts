import { net } from 'electron';
import { getAccessToken } from '../utils';

type CommonRequestType = {
  url: string;
  data?: object;
  method?: 'POST' | 'GET';
  contentType?: string;
  header?: object;
};

type CommonResponseType = {
  result: any;
  success: boolean;
  // error?: Error;
};

export const commonFetch = async ({
  url,
  method = 'GET',
  data = {},
  contentType = 'application/json',
  header = {},
}: CommonRequestType): Promise<CommonResponseType> => {
  const accessToken = getAccessToken();

  const headers = {
    'Content-Type': contentType,
    Authorization: `Bearer ${accessToken}`,
    ...header,
  };

  if (method === 'GET') {
    Reflect.deleteProperty(headers, 'Content-Type');
  }

  const response = await net.fetch(
    url,
    method === 'GET'
      ? {
          method,
          headers,
        }
      : {
          method,
          headers,
          body: JSON.stringify(data),
        },
  );

  if (response.ok && response.status === 200) {
    const res = await response.json().catch((err) => {});
    return { result: res, success: true };
  }

  return { result: null, success: false };
};

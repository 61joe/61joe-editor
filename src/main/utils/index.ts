import StoreManager from './StoreManager';

export const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

export const isProduction = process.env.NODE_ENV === 'production';

export const getAccessToken = () => {
  const auths = StoreManager.getAuths();
  const lastLoginAuth = auths?.find((auth) => auth.isLastLogin);

  return lastLoginAuth ? lastLoginAuth.accessToken : '';
};

export const getLastLoginAuth = () => {
  const auths = StoreManager.getAuths();
  const lastLoginAuth = auths?.find((auth) => auth.isLastLogin);

  return lastLoginAuth;
};

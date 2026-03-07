import { checkAuth } from '@/entities/session/model/check-auth';
import { PATH } from '@/shared/lib/router/paths';
import { appRedirect } from '@/shared/lib/router/redirect';

export const loginLoader = async () => {
  const isAuth = checkAuth();
  if (isAuth) {
    return appRedirect(PATH.users);
  }

  return null;
};

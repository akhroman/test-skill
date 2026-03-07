import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '@/pages/not-found';
import { pageLoader } from '@/shared/lib/router/pageLoader';
import { appRedirect } from '@/shared/lib/router/redirect';
import { PATH } from '@/shared/lib/router/paths';
import { checkAuth } from '@/entities/session/model/check-auth';

export const router = createBrowserRouter([
  {
    path: PATH.root.path,
    loader: async () => {
      const isAuth = checkAuth();
      if (isAuth) {
        return appRedirect(PATH.users);
      }
      return appRedirect(PATH.login);
    },
  },
  {
    path: PATH.users.path,
    lazy: pageLoader(() => import('@/pages/users'), 'UsersPage'),
  },
  {
    path: PATH.login.path,
    lazy: pageLoader(() => import('@/pages/login'), 'LoginPage'),
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);

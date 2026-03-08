import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '@/pages/not-found';
import { lazyPage, pageLoader } from '@/shared/lib/router/pageLoader';
import { PATH } from '@/shared/lib/router/paths';
import { BaseLayout } from '../layouts';

export const router = createBrowserRouter([
    {
        path: PATH.root.path,
        Component: BaseLayout,
        children: [
            {
                index: true,
                loader: async () => await pageLoader()
            },
            {
                path: PATH.users.path,
                lazy: lazyPage(() => import('@/pages/users'), 'UsersPage')
            },
            {
                path: PATH.login.path,
                lazy: lazyPage(() => import('@/pages/login'), 'LoginPage')
            }
        ]
    },
    {
        path: '*',
        Component: NotFoundPage
    }
]);

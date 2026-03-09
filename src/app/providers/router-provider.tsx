import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from '@/app/layouts';
import { NotFoundPage } from '@/pages/not-found';
import { ERoutes, PATH } from '@/shared/lib/router/paths';
import { TCompoundPage } from '@/shared/lib/router/types';
import { checkAuth } from '@/entities/session/model/auth';
import { appRedirect } from '@/shared/lib/router/redirect';

const lazyPage = <T extends Record<string, TCompoundPage>>(
    importFn: () => Promise<T>,
    exportName: keyof T
) => {
    return async () => {
        const module = await importFn();
        const Component = module[exportName];
        return { Component, loader: Component.loader };
    };
};

export const pageLoader = async (from?: ERoutes) => {
    const isAuth = checkAuth();
    if (isAuth && from !== ERoutes.Users) {
        return appRedirect(PATH.users);
    } else if (!isAuth && from !== ERoutes.Login) {
        return appRedirect(PATH.login);
    }
    return null;
};

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

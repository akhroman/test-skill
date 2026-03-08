import { checkAuth } from '@/entities/session/model/auth';
import { ERoutes, PATH } from './paths';
import { TCompoundPage } from './types';
import { appRedirect } from './redirect';

export const lazyPage = <T extends Record<string, TCompoundPage>>(
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

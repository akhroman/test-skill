import { pageLoader } from '@/app/providers/router-provider';
import { ERoutes } from '@/shared/lib/router/paths';

export const usersLoader = async () => {
    return pageLoader(ERoutes.Users);
};

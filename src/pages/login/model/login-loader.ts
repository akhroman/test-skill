import { pageLoader } from '@/app/providers/router-provider';
import { ERoutes } from '@/shared/lib/router/paths';

export const loginLoader = async () => {
    return pageLoader(ERoutes.Login);
};

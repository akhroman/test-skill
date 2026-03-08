import { pageLoader } from '@/shared/lib/router/pageLoader';
import { ERoutes } from '@/shared/lib/router/paths';

export const loginLoader = async () => {
    return pageLoader(ERoutes.Login);
};

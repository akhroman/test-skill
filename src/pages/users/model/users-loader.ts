import { pageLoader } from '@/shared/lib/router/pageLoader';
import { ERoutes, PATH } from '@/shared/lib/router/paths';

export const usersLoader = async () => {
  return pageLoader(ERoutes.Users);
};

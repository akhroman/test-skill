import { getRoute } from './getRoute';

export enum ERoutes {
  Root = 'root',
  Login = 'login',
  Users = 'users',
}

export const PATH: Record<ERoutes, ReturnType<typeof getRoute>> = {
  [ERoutes.Root]: getRoute(''),
  [ERoutes.Login]: getRoute('login'),
  [ERoutes.Users]: getRoute('users'),
};

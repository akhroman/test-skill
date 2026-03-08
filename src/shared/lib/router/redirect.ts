import { redirect } from 'react-router-dom';
import { getRoute } from './getRoute';

export const appRedirect = (route: ReturnType<typeof getRoute>) => {
    return redirect(route.path);
};

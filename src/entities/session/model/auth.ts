import { getToken } from '@/shared/lib/auth/auth';

export const checkAuth = () => !!getToken();

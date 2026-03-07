import React from 'react';
import { TCompoundPage } from '@/shared/lib/router/types';
import { loginLoader } from '../api/login-loader';

export const LoginPage: TCompoundPage = () => {
  return <div>Login</div>;
};

LoginPage.loader = loginLoader;

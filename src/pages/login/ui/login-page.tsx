import React from 'react';
import { Typography, Form, Input, Button, FormProps } from 'antd';
import { TCompoundPage } from '@/shared/lib/router/types';
import { AuthForm } from '@/features/auth/ui/auth-form';
import { loginLoader } from '../model/login-loader';

export const LoginPage: TCompoundPage = () => {
  return (
    <>
      <Typography.Title level={5}>Авторизация</Typography.Title>
      <AuthForm />
    </>
  );
};

LoginPage.loader = loginLoader;

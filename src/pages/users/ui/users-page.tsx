import React from 'react';
import { TCompoundPage } from '@/shared/lib/router/types';
import { usersLoader } from '../api/users-loader';

export const UsersPage: TCompoundPage = () => {
  return <div>Users</div>;
};

UsersPage.loader = usersLoader;

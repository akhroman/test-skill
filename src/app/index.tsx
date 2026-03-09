import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from './providers/query-provider';
import { AntdThemeProvider } from './providers/antd-theme-provider';
import { router } from './providers/router-provider';
import { UserFormContextProvider } from '@/entities/users/model/user-form-context';

export const App: React.FC = () => {
    return (
        <QueryProvider>
            <AntdThemeProvider>
                <UserFormContextProvider>
                    <RouterProvider router={router} />
                </UserFormContextProvider>
            </AntdThemeProvider>
        </QueryProvider>
    );
};

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { UserFormContextProvider } from '@/features/users/model/user-form-modal-context';
import { QueryProvider } from '@/app/providers/query-provider';
import { AntdThemeProvider } from '@/app/providers/antd-theme-provider';
import { router } from '@/app/providers/router-provider';

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

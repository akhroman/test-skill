import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from './providers/query-provider';
import { AntdThemeProvider } from './providers/antd-theme-provider';
import { router } from './providers/router-provider';

export const App: React.FC = () => {
    return (
        <QueryProvider>
            <AntdThemeProvider>
                <RouterProvider router={router}/>
            </AntdThemeProvider>
        </QueryProvider>
    );
};

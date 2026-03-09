import React from 'react';
import { message } from 'antd';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (err: any) => {
            message.error(`Произошла ошибка: ${err.message}`);
        }
    })
});

export const QueryProvider: React.FC = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);

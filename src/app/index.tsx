import React from 'react';
import styled from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from './providers/query-provider';
import { AntdThemeProvider } from './providers/antd-theme-provider';
import { router } from './providers/router-provider';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const App: React.FC = () => {
  return (
    <AppWrapper>
      <QueryProvider>
        <AntdThemeProvider>
          <RouterProvider router={router} />
        </AntdThemeProvider>
      </QueryProvider>
    </AppWrapper>
  );
};

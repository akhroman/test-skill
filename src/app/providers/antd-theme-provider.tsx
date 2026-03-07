import { ConfigProvider } from 'antd';
import React from 'react';

export const AntdThemeProvider: React.FC = ({ children }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#226099',
        colorInfo: '#226099',
      },
    }}
  >
    {children}
  </ConfigProvider>
);

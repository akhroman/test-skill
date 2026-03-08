import { ConfigProvider } from 'antd';
import React from 'react';

export const AntdThemeProvider: React.FC = ({ children }) => (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#226099',
                colorInfo: '#226099',
                borderRadius: 4
            },
            components: {
                Form: {
                    itemMarginBottom: 15
                }
            }
        }}
    >
        {children}
    </ConfigProvider>
);

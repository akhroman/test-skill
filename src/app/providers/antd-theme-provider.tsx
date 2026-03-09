import React from 'react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

export const AntdThemeProvider: React.FC = ({ children }) => (
    <ConfigProvider
        locale={ruRU}
        theme={{
            token: {
                colorPrimary: '#226099',
                colorInfo: '#226099',
                borderRadius: 4
            },
            components: {
                Form: {
                    itemMarginBottom: 15
                },
                Modal: {
                    borderRadiusLG: 10
                }
            }
        }}
    >
        {children}
    </ConfigProvider>
);

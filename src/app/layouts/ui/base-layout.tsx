import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Row } from 'antd';
import { AppWrapper, Content, Layout } from './base-layout.styles';

export const BaseLayout: React.FC = () => {
    return (
        <Layout>
            <Content>
                <Row justify="center">
                    <Col xs={24} sm={20} md={16} lg={12} xl={10}>
                        <AppWrapper>
                            <Outlet />
                        </AppWrapper>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

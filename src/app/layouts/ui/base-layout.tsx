import React from 'react';
import { Outlet } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Content, Layout, AppWrapper } from './base-layout.styles';

export const BaseLayout: React.FC = () => {
  return (
    <Layout>
      <Content>
        <Row justify="center">
          <Col xs={24} sm={16} md={12} lg={8} xl={6}>
            <AppWrapper>
              <Outlet />
            </AppWrapper>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

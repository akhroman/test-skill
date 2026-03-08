import styled from 'styled-components';
import { Layout as AntLayout } from 'antd';

export const Layout = styled(AntLayout)`
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;

  @media (min-width: 768px) {
    padding-top: 10vh;
  }
`;

export const Content = styled(Layout.Content)`
  width: 100%;
  padding: 0 16px;

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;

export const AppWrapper = styled.div`
  padding: 24;
  border-radius: 12;
`;

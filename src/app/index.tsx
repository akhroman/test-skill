import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const App: React.FC = () => {
  return <AppWrapper>TestYourMight</AppWrapper>;
};

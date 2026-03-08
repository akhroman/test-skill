import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 575px) {
    button {
      width: 100%;
    }
  }
`;

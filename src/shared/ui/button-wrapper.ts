import styled from 'styled-components';
import { CSSProperties } from 'react';

interface IButtonWrapperProps {
    justifyContent: CSSProperties['justifyContent'];
}

export const ButtonWrapper = styled.div<IButtonWrapperProps>`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent};

    @media (max-width: 575px) {
        button {
            width: 100%;
        }
    }
`;

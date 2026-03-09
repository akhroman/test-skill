import React, { CSSProperties } from 'react';
import styled from 'styled-components';


interface IButtonWrapperProps {
    justifyContent: CSSProperties['justifyContent'];
    gap?: CSSProperties['gap'];
}

const Wrapper: React.FC<IButtonWrapperProps> = ({ justifyContent, gap, ...props }) => (
    <div {...props} />
);

export const ButtonWrapper = styled(Wrapper)`
    display: flex;
    gap: ${({ gap }) => gap};
    justify-content: ${({ justifyContent }) => justifyContent};

    @media (max-width: 575px) {
        button {
            width: 100%;
        }
    }
`;

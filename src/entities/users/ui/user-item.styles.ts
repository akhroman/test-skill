import { Avatar } from 'antd';
import styled from 'styled-components';

export const UserItemAvatar = styled(Avatar)`
    cursor: pointer;
`;

export const UserItemTitle = styled.div`
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
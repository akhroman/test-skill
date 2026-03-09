import React from 'react';
import { List } from 'antd';
import { useUsers } from '@/features/users/model/useUsers';
import { UserItem } from './user-item';
import { ListWrapper } from './user-list.styles';

export const UsersList: React.FC = () => {
    const { data, isPlaceholderData } = useUsers();
    return (
        <ListWrapper>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => <UserItem {...item} loading={isPlaceholderData} />}
            />
        </ListWrapper>
    );
};

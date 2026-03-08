import React from 'react';
import { List, Skeleton } from 'antd';
import { dayjs } from '@/shared/lib/dayjs';
import { UserItemAvatar, UserItemTitle } from './user-item.styles';
import { IUserItemProps } from '../model/types';

export const UserItem: React.FC<IUserItemProps> = ({
    avatar,
    createdAt,
    name,
    loading
}) => {
    const formattedDate = dayjs.utc(createdAt).local().format('DD.MM.YYYY');

    return (
        <Skeleton loading={loading} active avatar>
            <List.Item>
                <List.Item.Meta
                    avatar={
                        <UserItemAvatar onClick={() => console.log('click')} src={avatar}/>
                    }
                    title={<UserItemTitle>{name}</UserItemTitle>}
                    description={`Зарегистрирован ${formattedDate}`}
                />
            </List.Item>
        </Skeleton>
    );
};

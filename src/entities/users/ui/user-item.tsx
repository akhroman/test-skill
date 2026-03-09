import React, { useCallback } from 'react';
import { List, Skeleton } from 'antd';
import { dayjs } from '@/shared/lib/dayjs';
import { useUserFormContext } from '@/entities/users/model/user-form-context';
import { UserItemAvatar, UserItemTitle } from './user-item.styles';
import { IUserItemProps } from '../model/types';

export const UserItem: React.FC<IUserItemProps> = (props) => {
    const { avatar, createdAt, name, loading } = props;
    const { openEdit } = useUserFormContext();
    const formattedDate = dayjs.utc(createdAt)
        .local()
        .format('DD.MM.YYYY');

    const handleEdit = useCallback(() => {
        const { loading: _, ...editProps } = props;
        openEdit(editProps);
    }, [props]);

    return (
        <Skeleton loading={loading} active avatar>
            <List.Item>
                <List.Item.Meta
                    avatar={
                        <UserItemAvatar onClick={handleEdit} src={avatar} />
                    }
                    title={<UserItemTitle onClick={handleEdit}>{name}</UserItemTitle>}
                    description={`Зарегистрирован ${formattedDate}`}
                />
            </List.Item>
        </Skeleton>
    );
};

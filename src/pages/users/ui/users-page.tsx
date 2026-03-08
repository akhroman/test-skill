import React from 'react';
import { Button, Flex } from 'antd';
import { TCompoundPage } from '@/shared/lib/router/types';
import { UsersList } from '@/entities/users/ui/user-list';
import { useLogout } from '@/features/auth/model/useLogout';
import { usersLoader } from '../model/users-loader';
import { ButtonWrapper } from '@/shared/ui/button-wrapper';

export const UsersPage: TCompoundPage = () => {
    const { logout } = useLogout();
    return (
        <>
            <Flex justify="flex-end" gap="large">
                <Button type="primary" onClick={logout}>Выход</Button>
            </Flex>
            <UsersList/>
            <ButtonWrapper justifyContent="flex-start">
                <Button type="primary">Создать пользователя</Button>
            </ButtonWrapper>
        </>
    );
};

UsersPage.loader = usersLoader;

import React from 'react';
import { Button, Flex, Modal } from 'antd';
import { TCompoundPage } from '@/shared/lib/router/types';
import { UsersList } from '@/entities/users/ui/user-list';
import { useLogout } from '@/features/auth/model/useLogout';
import { UserForm } from '@/features/users/ui/user-form';
import { ButtonWrapper } from '@/shared/ui/button-wrapper';
import { useUserFormModalContext } from '@/features/users/model/user-form-modal-context';
import { usersLoader } from '../model/users-loader';

export const UsersPage: TCompoundPage = () => {
    const { logout } = useLogout();
    const { isOpen, close, openCreate, currentUser } = useUserFormModalContext();
    return (
        <>
            <Flex justify="flex-end" gap="large">
                <Button type="primary" onClick={logout}>Выход</Button>
            </Flex>
            <UsersList />
            <ButtonWrapper justifyContent="flex-start">
                <Button type="primary" onClick={openCreate}>Создать пользователя</Button>
            </ButtonWrapper>
            <Modal
                title={`${currentUser ? 'Редактирование' : 'Создание'} пользователя`}
                open={isOpen}
                onCancel={close}
                footer={null}
                destroyOnHidden
                closable={false}
                maskClosable={false}
            >
                <UserForm />
            </Modal>
        </>
    );
};

UsersPage.loader = usersLoader;

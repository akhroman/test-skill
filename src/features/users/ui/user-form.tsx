import React, { useCallback } from 'react';
import { Button, Form, Input, Spin } from 'antd';
import { useUserFormContext } from '@/entities/users/model/user-form-context';
import { ButtonWrapper } from '@/shared/ui/button-wrapper';
import { StyledConfirmButton } from '@/features/users/ui/user-form.styles';
import { ConfirmButton } from '@/shared/ui/confirm-button';
import { getURLValidator } from '@/features/users/lib/getURLValidator';
import { useUserMutate } from '@/features/users/model/useUserMutate';
import { IUser } from '@/entities/users/model/types';

export const UserForm: React.FC = () => {
    const [form] = Form.useForm();
    const { currentUser, close } = useUserFormContext();
    const { mutate, isLoading } = useUserMutate({ onSuccess: close });

    const handleFinish = useCallback(async (payload: IUser) => {
        const type = currentUser ? 'edit' : 'create';
        mutate({ type, payload: { ...currentUser, ...payload } });
    }, []);

    const handleDelete = useCallback(() => {
        if (currentUser) {
            mutate({ type: 'delete', payload: currentUser.id }, {});
        }
    }, []);

    return (
        <Spin spinning={isLoading}>
            <Form initialValues={currentUser} form={form} layout="vertical" onFinish={handleFinish}>
                {currentUser && (
                    <Form.Item name="id" label="id">
                        <Input disabled />
                    </Form.Item>
                )}
                <Form.Item name="name" label="Имя" rules={[{ required: true }]}>
                    <Input placeholder="Введите имя" />
                </Form.Item>
                <Form.Item
                    name="avatar"
                    label="Ссылка на аватарку"
                    rules={getURLValidator(['jpg', 'png', 'jpeg', 'webp'])}
                >
                    <Input placeholder="Укажите ссылку" />
                </Form.Item>
                <ButtonWrapper gap="12px" justifyContent="flex-end">
                    {currentUser && (
                        <StyledConfirmButton
                            confirmText="Удалить пользователя"
                            confirmDescription="Вы уверены, что хотите удалить пользователя?"
                            type="primary"
                            onConfirm={handleDelete}
                        >
                            Удалить
                        </StyledConfirmButton>
                    )}
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        {currentUser ? 'Сохранить' : 'Создать'}
                    </Button>
                    <ConfirmButton
                        isNeedConfirm={form.isFieldsTouched}
                        confirmText="Закрыть форму"
                        confirmDescription="Внесенные данные не сохранятся. Вы действительно хотите закрыть форму?"
                        type="primary"

                        onConfirm={close}
                    >
                        Отмена
                    </ConfirmButton>
                </ButtonWrapper>
            </Form>
        </Spin>
    );
};
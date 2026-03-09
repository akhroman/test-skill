import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { useUserFormContext } from '@/entities/users/model/user-form-context';
import { ButtonWrapper } from '@/shared/ui/button-wrapper';
import { StyledConfirmButton } from '@/features/users/ui/user-form.styles';
import { createUserRequest } from '@/entities/users/api/users-api';
import { ConfirmButton } from '@/shared/ui/confirm-button';

export const UserForm: React.FC = () => {
    const [form] = Form.useForm();
    const { currentUser, close } = useUserFormContext();

    useEffect(() => {
        if (currentUser) {
            form.setFieldsValue(currentUser);
        } else {
            form.resetFields();
        }
    }, [form, currentUser]);

    const onFinish = async (vals: any) => {
        console.log(vals);
        await createUserRequest(vals);
    };
    return (

        <Form form={form} layout="vertical" onFinish={onFinish}>
            {currentUser && (
                <Form.Item name="id" label="id">
                    <Input disabled />
                </Form.Item>
            )}
            <Form.Item name="name" label="Имя" required>
                <Input placeholder="Введите имя" />
            </Form.Item>
            <Form.Item name="avatar" label="Ссылка на аватарку" required>
                <Input placeholder="Укажите ссылку" />
            </Form.Item>
            <ButtonWrapper gap="12px" justifyContent="flex-end">
                {currentUser && (
                    <StyledConfirmButton
                        confirmText="Удалить пользователя"
                        confirmDescription="Вы уверены, что хотите удалить пользователя?"
                        type="primary"
                        onConfirm={() => console.log('del')}
                    >
                        Удалить
                    </StyledConfirmButton>
                )}
                <Button
                    type="primary"
                    onClick={() => console.log('del')}
                    htmlType="submit"
                >
                    {currentUser ? 'Сохранить' : 'Создать'}
                </Button>
                <ConfirmButton
                    confirmText="Закрыть форму"
                    confirmDescription="Внесенные данные не сохранятся. Вы действительно хотите закрыть форму?"
                    type="primary"
                    onConfirm={close}>
                    Отмена
                </ConfirmButton>
            </ButtonWrapper>
        </Form>
    );
};
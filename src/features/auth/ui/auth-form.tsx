import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { ICredentials } from '@/entities/session/model/types';
import { ButtonWrapper } from '@/shared/ui/button-wrapper';
import { useLogin } from '../model/useLogin';

export const AuthForm: React.FC = () => {
    const { mutate, isPending } = useLogin();

    const onFinish = useCallback((val: ICredentials) => {
        mutate(val);
    }, []);

    return (
        <Form onFinish={onFinish} layout="vertical">
            <Form.Item name="login">
                <Input placeholder="Логин"/>
            </Form.Item>
            <Form.Item name="pass">
                <Input.Password placeholder="Пароль"/>
            </Form.Item>
            <ButtonWrapper justifyContent="flex-end">
                <Button type="primary" htmlType="submit" loading={isPending}>
                    Войти
                </Button>
            </ButtonWrapper>
        </Form>
    );
};

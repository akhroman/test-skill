import React from 'react';
import { Button, ButtonProps, Popconfirm } from 'antd';

interface IConfirmButtonProps extends Pick<ButtonProps, 'type' | 'children'> {
    confirmText: string;
    confirmDescription: string;
    onConfirm?: () => void;
}

export const ConfirmButton: React.FC<IConfirmButtonProps> = ({
    confirmText,
    confirmDescription,
    onConfirm,
    ...props
}) => {
    return (
        <Popconfirm
            okText="Да"
            cancelText="Нет"
            title={confirmText}
            description={confirmDescription}
            onConfirm={onConfirm}
        >
            <Button {...props} />
        </Popconfirm>
    );
};
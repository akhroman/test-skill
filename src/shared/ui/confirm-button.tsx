import React, { useCallback, useState } from 'react';
import { Button, ButtonProps, Popconfirm } from 'antd';

interface IConfirmButtonProps extends Pick<ButtonProps, 'type' | 'children'> {
    confirmText: string;
    confirmDescription: string;
    onConfirm: () => void;
    isNeedConfirm?: () => boolean;
}

export const ConfirmButton: React.FC<IConfirmButtonProps> = ({
    confirmText,
    confirmDescription,
    onConfirm,
    isNeedConfirm,
    ...props
}) => {
    const [open, setOpen] = useState(false);

    const handleClick = useCallback(() => {
        if (!isNeedConfirm || isNeedConfirm?.()) {
            setOpen(true);
        } else {
            onConfirm();
        }

    }, [isNeedConfirm]);

    const handleConfirm = () => {
        setOpen(false);
        onConfirm();
    };

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <Popconfirm
            open={open}
            okText="Да"
            cancelText="Нет"
            title={confirmText}
            description={confirmDescription}
            onConfirm={handleConfirm}
            onCancel={handleClose}
        >
            <Button onClick={handleClick} {...props} />
        </Popconfirm>
    );
};
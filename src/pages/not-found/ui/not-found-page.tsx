import React, { useCallback } from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/shared/lib/router/paths';
import { ButtonWrapper } from '@/shared/ui/button-wrapper';

export const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();
    const goHome = useCallback(() => {
        navigate(PATH.root.path);
    }, []);

    return (
        <Result
            status="404"
            title="404"
            subTitle="Извините, такой страницы не существует"
            extra={
                <ButtonWrapper justifyContent="center">
                    <Button type="primary" onClick={goHome}>
                        Вернуться
                    </Button>
                </ButtonWrapper>
            }
        />
    );
};

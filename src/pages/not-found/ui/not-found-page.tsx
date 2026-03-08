import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ButtonWrapper } from './not-found-page.styles';
import { PATH } from '@/shared/lib/router/paths';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(PATH.root.path);
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Извините, такой страницы не существует"
      extra={
        <ButtonWrapper>
          <Button type="primary" onClick={goHome}>
            Вернуться
          </Button>
        </ButtonWrapper>
      }
    />
  );
};

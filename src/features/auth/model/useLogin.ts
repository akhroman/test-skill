import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '@/entities/session/model/session-api';
import { setToken } from '@/shared/lib/auth/auth';
import { useMutation } from '@tanstack/react-query';
import { PATH } from '@/shared/lib/router/paths';

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      setToken(data);
      navigate(PATH.users.path);
    },
    onError: (err: Error) => {
      message.error(err.message);
    },
  });
};

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { cleanToken } from '@/shared/lib/auth/auth';
import { PATH } from '@/shared/lib/router/paths';

export const useLogout = () => {
    const querClient = useQueryClient();
    const navigation = useNavigate();

    const logout = useCallback(() => {
        cleanToken();
        querClient.clear();
        navigation(PATH.root.path);
    }, []);

    return { logout };
};
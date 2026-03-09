import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { usersKeys } from '@/entities/users/api/queryKeys';
import { getUsersRequest } from '@/entities/users/api/users-api';
import { IUser } from '@/entities/users/model/types';

export const useUsers = () => {
    const placeholder = useMemo(() => Array<IUser>(5)
        .fill({
            avatar: '',
            createdAt: '',
            id: '',
            name: ''
        }), []);
    return useQuery({
        queryKey: usersKeys.all,
        queryFn: getUsersRequest,
        staleTime: 1000 * 60,
        placeholderData: placeholder
    });
};
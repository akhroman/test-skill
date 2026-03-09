import { message } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUser, IUserCreate } from '@/entities/users/model/types';
import { usersKeys } from '@/entities/users/api/queryKeys';
import * as usersApi from '@/entities/users/api/users-api';
import { useCallback } from 'react';

interface IUserMutateParams {
    onSuccess?: () => void;
}

export type TMutatePayload =
    | { type: 'create', payload: IUserCreate }
    | { type: 'edit', payload: IUser }
    | { type: 'delete', payload: string }

export const useUserMutate = (param: IUserMutateParams) => {
    const queryClient = useQueryClient();

    const onAddUser = useCallback((payload: IUser) => {
        queryClient.setQueryData<IUser[]>(usersKeys.all, (prev = []) => [...prev, payload]);
    }, []);

    const onEditUser = useCallback((id: string, payload: IUser) => {
        queryClient.setQueryData<IUser[]>(usersKeys.all, (prev = []) => prev.map((user) => {
            if (user.id !== id) {
                return user;
            }
            return payload;
        }));
    }, []);

    const onDeleteUser = useCallback((id: string) => {
        queryClient.setQueryData<IUser[]>(usersKeys.all, (prev = []) => prev.filter((user) => user.id !== id));
    }, []);

    return useMutation({
        mutationFn: async ({ type, payload }: TMutatePayload) => {
            if (type === 'create') {
                return usersApi.createUserRequest(payload);
            } else if (type === 'edit') {
                return usersApi.editUserRequest(payload);
            }
            return usersApi.deleteUserRequest(payload);
        },
        onMutate: async ({ type, payload }: TMutatePayload) => {
            await queryClient.cancelQueries();
            const previousUsers = queryClient.getQueryData<IUser[]>(usersKeys.all);

            if (type === 'create') {
                const tempId = crypto.randomUUID();
                onAddUser({ ...payload, createdAt: (new Date).toISOString(), id: tempId });
                return { previousUsers, tempId };
            } else if (type === 'edit') {
                onEditUser(payload.id, payload);
            } else {
                onDeleteUser(payload);
            }
            return { previousUsers };
        },
        onError: async (error: Error, _, context) => {
            message.error(`Не удалось применить изменения: ${error.message}`, 10);
            queryClient.setQueryData(usersKeys.all, context?.previousUsers);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: usersKeys.all });
        },
        onSuccess: (data: IUser, { type }, context) => {
            if (type === 'create' && context?.tempId) {
                onEditUser(context.tempId, data);
            }
            if (type === 'edit') {
                onEditUser(data.id, data);
            }
            param.onSuccess?.();
            message.success(`Изменения успешно применены`, 5);
        }
    });
};

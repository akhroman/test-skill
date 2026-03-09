import { apiService } from '@/shared/api/apiService';
import { IUser, IUserCreate } from '../model/types';

export const getUsersRequest = async (params?: { signal?: AbortSignal }) => {
    const response = await apiService.get<IUser[]>('/users', params);
    return response.data;
};

export const createUserRequest = async (user: IUserCreate) => {
    const response = await apiService.post<IUser>('/users', user);
    return response.data;
};

export const editUserRequest = async (user: IUser) => {
    const response = await apiService.put<IUser>(`/users/${user.id}`, user);
    return response.data;
};

export const deleteUserRequest = async (id: string) => {
    const response = await apiService.delete(`/users/${id}`);
    return response.data;
};
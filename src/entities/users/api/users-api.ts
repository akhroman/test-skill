import { apiService } from '@/shared/api/apiService';
import { IUser } from '../model/types';

export const getUsersRequest = async () => {
    const response = await apiService.get<IUser[]>('/users');
    return response.data;
};

export const createUserRequest = async (user: Pick<IUser, 'name' | 'avatar'>) => {
    const response = await apiService.post('/users', user);
    return response.data;
};

export const editUserRequest = async (user: IUser) => {
    const response = await apiService.post('/users/:id', user);
    return response.data;
};
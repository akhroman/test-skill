import { apiService } from '@/shared/api/apiService';
import { IUser } from '../model/types';

export const getUsersRequest = async () => {
    const response = await apiService.get<IUser[]>('/users');
    return response.data;
};

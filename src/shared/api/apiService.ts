import axios, { AxiosHeaders } from 'axios';
import { getToken } from '../lib/auth/auth';

export const apiService = axios.create({
    baseURL: 'https://69ad3d13b50a169ec87ef7bf.mockapi.io/api/v1'
});

apiService.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers = new AxiosHeaders({
            ...config.headers,
            Authorization: `Bearer ${token}`
        });
    }
    return config;
});

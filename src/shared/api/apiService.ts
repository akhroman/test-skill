import axios, { AxiosHeaders } from 'axios';
import { getToken } from '../lib/auth/auth';

export const apiService = axios.create({
  baseURL: 'https://base-url.com',
});

apiService.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = new AxiosHeaders({
      ...config.headers,
      Authorization: `Bearer ${token}`,
    });
  }
  return config;
});

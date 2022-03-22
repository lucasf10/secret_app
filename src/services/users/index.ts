import { AxiosResponse } from 'axios';
import api from '../api';

export const performAuth = (
  username: string,
  password: string,
): Promise<AxiosResponse> => api.post('auth/authenticate', { username, password });

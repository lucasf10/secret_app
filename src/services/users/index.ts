import { AxiosResponse } from 'axios';
import { UserForm } from '../../types/user';
import api from '../api';

export const performAuth = (
  username: string,
  password: string,
): Promise<AxiosResponse> => api.post('auth/authenticate', { username, password });

export const performSignUp = (payload: UserForm): Promise<AxiosResponse> =>
  api.post('auth/register', payload);

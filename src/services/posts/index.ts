import { AxiosResponse } from 'axios';
import api from '../api';

export const getPosts = (): Promise<AxiosResponse> => api.get('posts');

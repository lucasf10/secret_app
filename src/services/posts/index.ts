import { AxiosResponse } from 'axios';
import api from '../api';

export const getPosts = (limit = 10, offset = 0, city: string): Promise<AxiosResponse> => {
    return api.get(`posts?limit=${limit}&offset=${offset}&city=${city}`);
};

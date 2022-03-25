import { AxiosResponse } from 'axios';
import api from '../api';

export const getPosts = (limit = 10, offset = 0, city: string): Promise<AxiosResponse> => {
    return api.get(`posts?limit=${limit}&offset=${offset}&city=${city}`);
};

export const likePost = (postId: string): Promise<AxiosResponse> => api.post(`posts/${postId}/like`);

export const dislikePost = (postId: string): Promise<AxiosResponse> => api.post(`posts/${postId}/dislike`);

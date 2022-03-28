import { AxiosResponse } from 'axios';
import api from '../api';

export const createComment = (post: string, text: string): Promise<AxiosResponse> => {
    return api.post('comment', { post, text });
};

export const deleteComment = (commentId: string): Promise<AxiosResponse> => api.delete(`comment/${commentId}`);

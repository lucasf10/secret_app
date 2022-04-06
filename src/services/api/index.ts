import axios, { AxiosInstance } from 'axios';
import { API_URL } from '@env';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
  },
});

export default api;

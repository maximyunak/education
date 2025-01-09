import axios from 'axios';
import ls from 'localstorage-slim';

export const BASE_URL = 'http://your-api-url.com/api';

const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  const token = ls.get('token', {
    decrypt: true,
  });
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default $api;

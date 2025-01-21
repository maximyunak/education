import axios from 'axios';
import ls from 'localstorage-slim';

export const BASE_URL = 'https://api.ebtest.ru/api/v1/';

const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  const token = ls.get('access_token', {
    decrypt: true,
  });
  const type = ls.get('token_type', {
    decrypt: true,
  });
  if (token) {
    config.headers.Authorization = `${type} ${token}`;
  }
  return config;
});

export default $api;

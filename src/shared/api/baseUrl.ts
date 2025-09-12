import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import axios from 'axios';
import ls from 'localstorage-slim';

export const BASE_URL = 'http://127.0.0.1:8000/api';

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

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = ls.get('access_token', { decrypt: true });
    const type = ls.get('token_type', { decrypt: true });
    if (token && type) {
      headers.set('Authorization', `${type} ${token}`);
    }
    return headers;
  },
  paramsSerializer: (params) => {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          searchParams.append(key, item.toString());
        });
      } else if (value !== null && value !== undefined) {
        searchParams.append(key, value.toString());
      }
    });

    return searchParams.toString();
  },
});

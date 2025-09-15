import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import axios from 'axios';
import ls from 'localstorage-slim';

export const BASE_URL = 'http://127.0.0.1:8000/api';

const $api = axios.create({
  baseURL: BASE_URL,
});

export default $api;

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
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

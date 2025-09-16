import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';
import axios from 'axios';

export const BASE_URL = 'http://127.0.0.1:8000/api';

const $api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default $api;

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
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

export const baseQueryWithRefresh: BaseQueryFn<
  {
    url: string;
    method?: string;
    body?: any;
    params?: any;
    headers?: Record<string, string>;
  },
  unknown,
  unknown
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if ((result as any)?.error?.status === 422) {
    try {
      const refreshResp = await $api.post('/auth/refresh');
      if (refreshResp.status === 200) {
        result = await baseQuery(args, api, extraOptions);
      } else {
      }
    } catch (refreshError) {
      return result;
    }
  }

  return result;
};

import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'shared/api/baseUrl';
import { TestType } from '../model/TestType';

export interface FetchTestsResponse {
  items: TestType[];
  total: number;
  page: number;
  size: number;
}

export interface FetchTestsParams {
  limit?: number;
  page?: number;
  search?: string;
  theme_id?: number[];
  sort_by?: string;
}

export const testsApi = createApi({
  reducerPath: 'testsApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getTests: builder.query<FetchTestsResponse, FetchTestsParams>({
      query: (params) => ({
        url: 'tests',
        params: {
          // limit: params?.limit,
          // page: params?.page,
          // sort_by: params?.sort_by,
          // search: params?.search,
          // theme_id: params?.theme_id,
          // theme_id: params?.theme_id ? JSON.stringify(params.theme_id) : undefined,
        },
      }),
    }),
  }),
});

export const { useGetTestsQuery } = testsApi;

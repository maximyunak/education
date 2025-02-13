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
  theme_ids?: number[];
  sort_by?: string;
}

export const testsApi = createApi({
  reducerPath: 'testsApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getTests: builder.query<FetchTestsResponse, FetchTestsParams>({
      query: (params) => ({
        url: 'tests',
        params,
      }),
    }),
  }),
});

export const { useGetTestsQuery } = testsApi;

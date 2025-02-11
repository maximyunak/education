import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TestPreview } from 'entities/TestPreview';

export interface FetchTestsResponse {
  items: TestPreview[];
  total: number;
  page: number;
  size: number;
  pages: number;
}

export interface FetchTestsParams {
  limit?: number;
  page?: number;
}

export const testsApi = createApi({
  reducerPath: 'testsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.ebtest.ru/api/v1/',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getTests: builder.query<FetchTestsResponse, FetchTestsParams>({
      query: (params) => ({
        url: 'tests',
        params: {
          limit: params?.limit,
          page: params?.page,
        },
      }),
    }),
  }),
});

export const { useGetTestsQuery } = testsApi;

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
  tagTypes: ['Tests'],
  endpoints: (builder) => ({
    getTests: builder.query<FetchTestsResponse, FetchTestsParams>({
      query: (params) => ({
        url: 'tests',
        params,
      }),
      providesTags: () => ['Tests'],
    }),
    createTest: builder.mutation<void, TestType>({
      query: (testData) => ({
        url: 'tests',
        method: 'post',
        body: testData,
      }),
      invalidatesTags: () => ['Tests'],
    }),
  }),
});

export const { useGetTestsQuery, useCreateTestMutation } = testsApi;

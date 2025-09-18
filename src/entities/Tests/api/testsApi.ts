import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRefresh } from 'shared/api/baseUrl';
import { TestType } from '../model/TestType';

export interface FetchTestsResponse {
  items: TestType[];
  total: number;
  page: number;
  size: number;
}

export interface FetchTestsParams {
  limit?: number;
  skip?: number;
  search?: string;
  theme_ids?: number[];
  sort_by?: string;
}

export const testsApi = createApi({
  reducerPath: 'testsApi',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['Tests'],
  endpoints: (builder) => ({
    getTests: builder.query<FetchTestsResponse, FetchTestsParams>({
      query: (params) => {
        const filteredParams: Record<string, any> = {};

        for (const key in params) {
          const value = params[key as keyof FetchTestsParams];

          if (value === null || value === undefined || value === '') continue;

          if (Array.isArray(value) && value.length === 0) continue;

          filteredParams[key] = value;
        }

        return {
          url: 'test',
          params: filteredParams,
        };
      },
      providesTags: ['Tests'],
    }),
    createTest: builder.mutation<void, TestType>({
      query: (testData) => ({
        url: 'test',
        method: 'post',
        body: testData,
      }),
      invalidatesTags: () => ['Tests'],
    }),
  }),
});

export const { useGetTestsQuery, useCreateTestMutation } = testsApi;

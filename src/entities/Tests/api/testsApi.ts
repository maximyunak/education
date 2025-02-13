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
      // query: (params) => ({
      //   url: 'tests',
      //   params,
      // }),
      // providesTags: () => ['Tests'],
      // query: (params) => {
      //   const queryParams: Record<string, any> = { ...params };

      //   const filteredParams: Record<string, any> = {};

      //   for (const key in queryParams) {
      //     const value = queryParams[key];

      //     if (Array.isArray(value)) {
      //       if (value.length > 0) {
      //         filteredParams[key] = value;
      //       }
      //     } else if (value !== null && value !== undefined && value !== '') {
      //       filteredParams[key] = value;
      //     }
      //   }
      //   return {
      //     url: 'tests',
      //     params: filteredParams,
      //   };
      // },
      query: (params) => {
        // Фильтрация параметров
        const filteredParams: Record<string, any> = {};

        console.log('🚀 ~ filteredParams:', filteredParams);
        for (const key in params) {
          const value = params[key as keyof FetchTestsParams];

          // Удаляем пустые значения
          if (value === null || value === undefined || value === '') continue;

          // Для массивов оставляем только непустые
          if (Array.isArray(value) && value.length === 0) continue;

          filteredParams[key] = value;
        }

        return {
          url: 'tests',
          params: filteredParams,
        };
      },
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

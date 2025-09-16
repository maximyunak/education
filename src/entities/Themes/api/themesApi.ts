import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRefresh } from 'shared/api/baseUrl';
import { ThemeType } from '../model/ThemeType';

export interface FetchThemesResponse {
  success: boolean;
  message: string;
  items: ThemeType[];
}

export const themesApi = createApi({
  reducerPath: 'themesApi',
  baseQuery: baseQueryWithRefresh,
  endpoints: (builder) => ({
    getThemes: builder.query<FetchThemesResponse, void>({
      query: () => ({
        url: 'themes',
      }),
    }),
  }),
});

export const { useGetThemesQuery } = themesApi;

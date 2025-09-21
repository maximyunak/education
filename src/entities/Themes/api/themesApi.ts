import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRefresh } from 'shared/api/baseUrl';
import { ThemeType } from '../model/ThemeType';

export const themesApi = createApi({
  reducerPath: 'themesApi',
  baseQuery: baseQueryWithRefresh,
  endpoints: (builder) => ({
    getThemes: builder.query<ThemeType[], void>({
      query: () => ({
        url: 'theme',
      }),
    }),
  }),
});

export const { useGetThemesQuery } = themesApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TestPreview } from 'entities/TestPreview';
import { ThemesType } from 'entities/Thems/model/ThemesType';
import { baseQuery } from 'shared/api/baseUrl';

export interface FetchThemesResponse {
  success: boolean;
  message: string;
  items: ThemesType[];
}

export const themesApi = createApi({
  reducerPath: 'themesApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getThemes: builder.query<FetchThemesResponse, void>({
      query: () => ({
        url: 'themes',
      }),
    }),
  }),
});

export const { useGetThemesQuery } = themesApi;

import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRefresh } from 'shared/api/baseUrl';
import { UserType } from '../model/UserType';

export interface LoginDataType {
  email: string;
  password: string;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getCurrentUser: builder.query<UserType, void>({
      query: () => {
        return {
          url: 'me',
        };
      },
      providesTags: ['User'],
    }),
    // login: builder.mutation<void, LoginDataType>({
    //   query: (userData) => ({
    //     url: 'auth/login',
    //     method: 'POST',
    //     body: userData,
    //   }),
    // }),
  }),
});

export const { useGetCurrentUserQuery } = userApi;

import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from 'shared/api/baseUrl';
import { isAxiosError } from 'axios';
import { LoginData } from '../models/LoginSlice';

export const loginThunk = createAsyncThunk(
  'login/loginUser',
  async (data: LoginData, { rejectWithValue }) => {
    try {
      const response = await $api.post('/auth', data);
      const { accessToken } = response.data;

      if (accessToken) {
        localStorage.setItem('token', accessToken);
        $api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      }

      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'Ошибка при входе в систему');
      }
      return rejectWithValue('Произошла неизвестная ошибка');
    }
  },
);

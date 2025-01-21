import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from 'shared/api/baseUrl';
import { isAxiosError } from 'axios';
import { LoginData } from '../models/LoginSlice';
import ls from 'localstorage-slim';

export const loginThunk = createAsyncThunk(
  'login/loginUser',
  async (data: LoginData, { rejectWithValue }) => {
    try {
      const response = await $api.post('/auth', data);
      const { access_token, token_type } = response.data;

      if (access_token) {
        ls.set('access_token', access_token, { encrypt: true });
        ls.set('token_type', token_type, { encrypt: true });
      }

      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = error.response?.data?.detail;
        // throw new Error(errorMessage || 'Ошибка при входе в систему');
        return rejectWithValue(errorMessage || 'Ошибка при входе в систему');
      }
      return rejectWithValue('Произошла неизвестная ошибка');
    }
  },
);

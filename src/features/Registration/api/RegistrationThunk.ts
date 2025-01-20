import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from 'shared/api/baseUrl';
import { RegistrationData } from '../model/RegistrationSlice';
import { isAxiosError } from 'axios';

export const registrationThunk = createAsyncThunk(
  'registration/registerUser',
  async (data: RegistrationData, { rejectWithValue }) => {
    try {
      const response = await $api.post('/register', data);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'Произошла ошибка при регистрации');
      }
      return rejectWithValue('Произошла неизвестная ошибка');
    }
  },
);
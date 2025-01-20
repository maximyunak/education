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
        const errorMessage = error.response?.data?.detail;
        return rejectWithValue(errorMessage || 'Произошла ошибка при регистрации');
      }
      return rejectWithValue('Произошла неизвестная ошибка');
    }
  },
);

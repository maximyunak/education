import $api from 'shared/api/baseUrl';
import { RegistrationDataType } from '../model/RegistrationDataType';
import { AxiosError } from 'axios';

export const registerRequest = async (userData: RegistrationDataType) => {
  try {
    return await $api.post('/register', userData);
  } catch (error) {
    throw error;
  }
};

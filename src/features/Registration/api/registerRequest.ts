import $api from 'shared/api/baseUrl';
import { RegistrationDataType } from '../model/RegistrationDataType';

export const registerRequest = async (userData: RegistrationDataType) => {
  const response = await $api.post('/register', userData);
  return response.data;
};

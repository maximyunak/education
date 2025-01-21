import $api from 'shared/api/baseUrl';
import { LoginDataType } from '../model/LoginDataType';

export const authRequest = async (userData: LoginDataType) => {
  const { data } = await $api.post('/auth', userData);
  return data;
};

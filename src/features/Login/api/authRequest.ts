import $api from 'shared/api/baseUrl';
import { LoginDataType } from '../model/LoginDataType';

export const authRequest = async (userData: LoginDataType) => {
  try {
    const res = await $api.post('/auth/login', userData);

    return 'ok';
  } catch (error) {
    console.log(error);
    throw error;
  }
};

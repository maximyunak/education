import $api from 'shared/api/baseUrl';
import { LoginDataType } from '../model/LoginDataType';
import ls from 'localstorage-slim';

interface AuthResponse {
  access_token: string;
  token_type: string;
}

export const authRequest = async (userData: LoginDataType): Promise<void> => {
  try {
    const res = await $api.post<AuthResponse>('auth', userData);

    const { access_token, token_type } = res.data;

    ls.set('access_token', access_token, {
      encrypt: true,
    });

    ls.set('token_type', token_type, {
      encrypt: true,
    });

    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

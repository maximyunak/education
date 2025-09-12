import $api from 'shared/api/baseUrl';
import { LoginDataType } from '../model/LoginDataType';
import ls from 'localstorage-slim';

interface AuthResponse {
  access_token: string;
  token_type: string;
}

export const authRequest = async (userData: LoginDataType): Promise<string> => {
  try {
    // const formData = new FormData();
    // formData.append('username', userData.username);
    // formData.append('password', userData.password);

    const res = await $api.post<AuthResponse>('auth', userData);

    // const { access_token, token_type } = res.data;

    // ls.set('access_token', access_token, {
    //   encrypt: true,
    // });

    // ls.set('token_type', token_type, {
    //   encrypt: true,
    // });

    return 'ok';
  } catch (error) {
    console.log(error);
    throw error;
  }
};

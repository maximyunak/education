import $api from 'shared/api/baseUrl';

export interface LoginData {
  email: string;
  password: string;
}

export const authRequest = async (userData: LoginData) => {
  const { data } = await $api.post('/auth', userData);
  return data;
};

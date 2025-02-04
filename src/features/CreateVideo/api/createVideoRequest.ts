import $api from 'shared/api/baseUrl';
import ls from 'localstorage-slim';

interface AuthResponse {
  access_token: string;
  token_type: string;
}

export const authRequest = async (userData: LoginDataType): Promise<void> => {};

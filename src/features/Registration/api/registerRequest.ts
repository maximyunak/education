import $api from 'shared/api/baseUrl';
import { RegistrationDataType } from '../model/RegistrationDataType';

export const registerRequest = (userData: RegistrationDataType) => {
  $api.post('/register', userData);
};

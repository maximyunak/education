import { LoginDataType } from '../model/LoginDataType';

interface IValidate {
  isValid: boolean;
  errors: LoginDataType;
}

export const validateForm = (userData: LoginDataType): IValidate => {
  let isValid = true;

  const errors = {
    email: '',
    password: '',
  };

  if (!userData.email) {
    errors.email = 'Введите email';
    isValid = false;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)) {
    errors.email = 'Некорректный email';
    isValid = false;
  }

  // Проверка пароля
  if (!userData.password) {
    errors.password = 'Введите пароль';
    isValid = false;
  } else if (userData.password.length < 8) {
    errors.password = 'Пароль должен содержать минимум 8 символов';
    isValid = false;
  }

  return {
    isValid,
    errors,
  };
};

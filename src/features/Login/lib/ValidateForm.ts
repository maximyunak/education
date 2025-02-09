import { LoginDataType } from '../model/LoginDataType';

export const validateForm = (
  userData: LoginDataType,
  setErrors: (errors: LoginDataType) => void,
): boolean => {
  const newErrors: LoginDataType = {
    username: '',
    password: '',
  };

  let isValid = true;

  // Проверка username
  if (!userData.username) {
    newErrors.username = 'Введите username';
    isValid = false;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.username)) {
    newErrors.username = 'Некорректный username';
    isValid = false;
  }

  // Проверка пароля
  if (!userData.password) {
    newErrors.password = 'Введите пароль';
    isValid = false;
  } else if (userData.password.length < 8) {
    newErrors.password = 'Пароль должен содержать минимум 8 символов';
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};

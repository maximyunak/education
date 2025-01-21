import { RegistrationDataType } from 'features/Registration/model/RegistrationDataType';

export const validateForm = (
  userData: RegistrationDataType,
  setErrors: (errors: RegistrationDataType) => void,
): boolean => {
  const newErrors: RegistrationDataType = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
  };

  let isValid = true;

  if (!userData.first_name.trim()) {
    newErrors.first_name = 'Введите имя';
    isValid = false;
  }

  if (!userData.last_name.trim()) {
    newErrors.last_name = 'Введите фамилию';
    isValid = false;
  }

  if (!userData.email) {
    newErrors.email = 'Введите email';
    isValid = false;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)) {
    newErrors.email = 'Некорректный email';
    isValid = false;
  }

  if (!userData.phone) {
    newErrors.phone = 'Введите телефон';
    isValid = false;
  } else if (userData.phone.replace(/\D/g, '').length !== 11) {
    newErrors.phone = 'Некорректный номер телефона';
    isValid = false;
  }

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

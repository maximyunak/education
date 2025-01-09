import React from 'react';
import {
  InputTitle,
  StyledButton,
  StyledInput,
  Title,
  useAppSelector,
  useAppDispatch,
} from 'shared/lib';
import { ButtonWrapper, InputColumn, InputWrapper, TextContainer } from './RegistrationForm.styles';
import { setUserData } from 'features/Registration/model/RegistrationSlice';
import { RegistrationFormContainer } from './RegistrationForm.styles';
import { IconButton } from '@mui/material';
import { InputAdornment } from '@mui/material';

import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';

interface ValidationErrors {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.registration);
  console.log(userData);
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const validateField = (field: string, value: string) => {
    let error = '';

    switch (field) {
      case 'firstName':
        if (!value.trim()) error = 'Введите имя';
        break;
      case 'lastName':
        if (!value.trim()) error = 'Введите фамилию';
        break;
      case 'email':
        if (!value) {
          error = 'Введите email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'Некорректный email';
        }
        break;
      case 'phone':
        if (!value) {
          error = 'Введите телефон';
        } else if (value.replace(/\D/g, '').length !== 11) {
          error = 'Некорректный номер телефона';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Введите пароль';
        } else if (value.length < 8) {
          error = 'Пароль должен содержать минимум 8 символов';
        }
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (field === 'phone') {
      // Убираем все нецифровые символы
      const numbersOnly = value.replace(/\D/g, '');

      // Ограничиваем длину до 11 цифр
      if (numbersOnly.length <= 11) {
        let formattedPhone = '';

        // Форматируем номер телефона
        if (numbersOnly.length > 0) {
          formattedPhone = '+7 ';
          if (numbersOnly.length > 1) {
            formattedPhone += `(${numbersOnly.slice(1, 4)}`;
          }
          if (numbersOnly.length > 4) {
            formattedPhone += `) ${numbersOnly.slice(4, 7)}`;
          }
          if (numbersOnly.length > 7) {
            formattedPhone += `-${numbersOnly.slice(7, 9)}`;
          }
          if (numbersOnly.length > 9) {
            formattedPhone += `-${numbersOnly.slice(9, 11)}`;
          }
        }

        dispatch(setUserData({ [field]: formattedPhone }));
        validateField(field, formattedPhone);
      }
      return;
    }

    dispatch(setUserData({ [field]: value }));
    validateField(field, value);
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    };

    let isValid = true;

    if (!userData.firstName.trim()) {
      newErrors.firstName = 'Введите имя';
      isValid = false;
    }

    if (!userData.lastName.trim()) {
      newErrors.lastName = 'Введите фамилию';
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid', userData);
      // Здесь будет логика отправки формы
    }
  };

  return (
    <RegistrationFormContainer>
      <Title>Регистрация</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputColumn>
            <TextContainer>
              <InputTitle>Фамилия</InputTitle>
              <StyledInput
                placeholder="Фамилия"
                value={userData.lastName}
                onChange={handleChange('lastName')}
                error={!!errors.lastName}
                errorMessage={errors.lastName}
              />
            </TextContainer>

            <TextContainer>
              <InputTitle>Имя</InputTitle>
              <StyledInput
                placeholder="Имя"
                value={userData.firstName}
                onChange={handleChange('firstName')}
                error={!!errors.firstName}
                errorMessage={errors.firstName}
              />
            </TextContainer>

            <TextContainer>
              <InputTitle>Отчество</InputTitle>
              <StyledInput
                placeholder="Отчество"
                value={userData.patronymic}
                onChange={handleChange('patronymic')}
              />
            </TextContainer>
          </InputColumn>

          <InputColumn>
            <TextContainer>
              <InputTitle>Электронная почта</InputTitle>
              <StyledInput
                placeholder="Электронная почта"
                type="email"
                value={userData.email}
                onChange={handleChange('email')}
                error={!!errors.email}
                errorMessage={errors.email}
              />
            </TextContainer>

            <TextContainer>
              <InputTitle>Телефон</InputTitle>
              <StyledInput
                placeholder="+7 (___) ___-__-__"
                type="tel"
                value={userData.phone}
                onChange={handleChange('phone')}
                error={!!errors.phone}
                errorMessage={errors.phone}
              />
            </TextContainer>

            <TextContainer>
              <InputTitle>Пароль</InputTitle>
              <StyledInput
                placeholder="Пароль"
                type={showPassword ? 'text' : 'password'}
                value={userData.password}
                onChange={handleChange('password')}
                error={!!errors.password}
                errorMessage={errors.password}
                endAdornment={
                  <InputAdornment position="end" sx={{ marginRight: '5px' }}>
                    <IconButton
                      aria-label={showPassword ? 'hide the password' : 'display the password'}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </TextContainer>
          </InputColumn>
        </InputWrapper>

        <ButtonWrapper>
          <StyledButton type="submit">Зарегистрироваться</StyledButton>
        </ButtonWrapper>
      </form>
    </RegistrationFormContainer>
  );
};

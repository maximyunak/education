import React from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { RootState } from 'app/store';
import { setLoginData } from '../../models/LoginSlice';
import {
  Form,
  Line,
  LoginWith,
  LoginWithContainer,
  LoginWithIcon,
  LoginWithText,
  StyledLink,
  TextContainer,
} from './LoginForm.styles';
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

import { LoginWithSocial } from '../Buttons/LoginWithSocial';
import { googleIcon, vkIcon, yandexIcon } from 'shared/assets';
import { InputTitle, StyledButton, StyledInput, Title } from 'shared/lib';
import { useState } from 'react';

interface ValidationErrors {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state: RootState) => state.login);
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({
    email: '',
    password: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      case 'email':
        if (!value) {
          error = 'Введите email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'Некорректный email';
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
    dispatch(setLoginData({ [field]: value }));

    // Проверяем ошибки только если форма уже была отправлена
    if (isSubmitted) {
      validateField(field, value);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {
      email: '',
      password: '',
    };

    let isValid = true;

    // Проверка email
    if (!userData.email) {
      newErrors.email = 'Введите email';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)) {
      newErrors.email = 'Некорректный email';
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true); // Устанавливаем флаг, что форма была отправлена
    if (validateForm()) {
      console.log('Form is valid', userData);
      // Здесь будет логика отправки формы
    }
  };

  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <Title>Вход</Title>
      <Form onSubmit={handleSubmit}>
        <TextContainer>
          <InputTitle>Электронная почта</InputTitle>
          <StyledInput
            placeholder="Email"
            type="email"
            value={userData.email}
            onChange={handleChange('email')}
            error={isSubmitted && !!errors.email}
            errorMessage={errors.email}
          />
        </TextContainer>
        <TextContainer>
          <InputTitle>Пароль</InputTitle>
          <StyledInput
            placeholder="Пароль"
            type={showPassword ? 'text' : 'password'}
            value={userData.password}
            onChange={handleChange('password')}
            error={isSubmitted && !!errors.password}
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
          <StyledLink to="/">Забыли пароль?</StyledLink>
        </TextContainer>

        <StyledButton type="submit">Войти</StyledButton>
      </Form>

      <LoginWith>
        <Line />
        <LoginWithText>Войти с помощью</LoginWithText>
      </LoginWith>

      <LoginWithContainer>
        <LoginWithSocial>
          <LoginWithIcon src={googleIcon} alt="google" />
          Google
        </LoginWithSocial>
        <LoginWithSocial>
          <LoginWithIcon src={yandexIcon} alt="yandex" />
          Yandex
        </LoginWithSocial>
        <LoginWithSocial>
          <LoginWithIcon src={vkIcon} alt="vk" />
          VK
        </LoginWithSocial>
      </LoginWithContainer>
    </div>
  );
};

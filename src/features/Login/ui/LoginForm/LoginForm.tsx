import React from 'react';
import { UppercaseTitle } from 'shared/lib';
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
import { InputTitle, StyledButton, StyledInput } from 'shared/lib';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { authRequest } from '../../api/authRequest';
import { LoginDataType } from '../../model/LoginDataType';
import { validateForm } from '../../lib/ValidateForm';
// import { $api } from 'shared/api';

export const LoginForm = () => {
  // ! consts
  const [userData, setUserData] = useState<LoginDataType>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = useState<LoginDataType>({
    email: '',
    password: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [serverError, setServerError] = useState<string>('');

  const navigate = useNavigate();

  // ! handlers

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserData((prev) => ({ ...prev, [field]: value }));

    if (isSubmitted) {
      validateForm(userData, setErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validateForm(userData, setErrors)) {
      try {
        await authRequest(userData);
        navigate('/');
      } catch (err) {
        const error = err as AxiosError<{ detail: string }>;
        setServerError(error.response?.data?.detail || 'Произошла ошибка при входе');
      }
    }
  };

  const handleLoginWithSocial = async (social: string) => {
    window.location.href = `https://api.ebtest.ru/api/v1/oauth/${social}`;
  };

  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <UppercaseTitle>Вход</UppercaseTitle>
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
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseUp={(e) => e.preventDefault()}
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

      {serverError && <div style={{ color: 'red' }}>{serverError}</div>}

      <LoginWith>
        <Line />
        <LoginWithText>Войти с помощью</LoginWithText>
      </LoginWith>

      <LoginWithContainer>
        <LoginWithSocial onClick={() => handleLoginWithSocial('google')}>
          <LoginWithIcon src={googleIcon} alt="google" />
          Google
        </LoginWithSocial>
        <LoginWithSocial onClick={() => handleLoginWithSocial('yandex')}>
          <LoginWithIcon src={yandexIcon} alt="yandex" />
          Yandex
        </LoginWithSocial>
        <LoginWithSocial onClick={() => handleLoginWithSocial('vk')}>
          <LoginWithIcon src={vkIcon} alt="vk" />
          VK
        </LoginWithSocial>
      </LoginWithContainer>
    </div>
  );
};

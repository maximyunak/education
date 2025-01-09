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

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state: RootState) => state.login);
  const [showPassword, setShowPassword] = React.useState(false);
  console.log(userData);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLoginData({ [field]: event.target.value }));
  };

  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <Title>Вход</Title>
      <Form>
        <TextContainer>
          <InputTitle>Электронная почта</InputTitle>
          <StyledInput
            placeholder="Email"
            value={userData.email}
            onChange={handleChange('email')}
          />
        </TextContainer>
        <TextContainer>
          <InputTitle>Пароль</InputTitle>
          <StyledInput
            placeholder="Пароль"
            type={showPassword ? 'text' : 'password'}
            value={userData.password}
            onChange={handleChange('password')}
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

        <StyledButton>Войти</StyledButton>
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

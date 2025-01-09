import { LoginForm } from 'features/Login';
import React from 'react';

import { Login, LoginContainer, LoginImage } from './Login.styles';
import { loginImage } from 'shared/assets';

export const LoginPage = () => {
  return (
    <Login>
      <LoginContainer>
        <LoginForm />
        <LoginImage src={loginImage} alt="loginImage" />
      </LoginContainer>
    </Login>
  );
};

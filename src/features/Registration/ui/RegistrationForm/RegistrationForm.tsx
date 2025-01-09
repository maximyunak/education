import React from 'react';
import { InputTitle, StyledButton, StyledInput, Title } from 'shared/lib';
import {
  ButtonWrapper,
  InputColumn,
  InputWrapper,
  TextContainer,
  RegistrationFormContainer,
} from './RegistrationForm.styles';
import { IconButton } from '@mui/material';
import { InputAdornment } from '@mui/material';

import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

// @ts-ignore

export const RegistrationForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <RegistrationFormContainer>
      <Title>Регистрация</Title>
      <InputWrapper>
        <InputColumn>
          <TextContainer>
            <InputTitle>Фамилия</InputTitle>
            <StyledInput placeholder="Фамилия" />
          </TextContainer>

          <TextContainer>
            <InputTitle>Имя</InputTitle>
            <StyledInput placeholder="Имя" />
          </TextContainer>

          <TextContainer>
            <InputTitle>Отчество</InputTitle>
            <StyledInput placeholder="Отчество" />
          </TextContainer>
        </InputColumn>

        <InputColumn>
          <TextContainer>
            <InputTitle>Электронная почта</InputTitle>
            <StyledInput placeholder="Электронная почта" />
          </TextContainer>

          <TextContainer>
            <InputTitle>Телефон</InputTitle>
            <StyledInput placeholder="Телефон" />
          </TextContainer>

          <TextContainer>
            <InputTitle>Пароль</InputTitle>
            <StyledInput
              placeholder="Пароль"
              type={showPassword ? 'text' : 'password'}
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
        <StyledButton>Зарегистрироваться</StyledButton>
      </ButtonWrapper>
    </RegistrationFormContainer>
  );
};

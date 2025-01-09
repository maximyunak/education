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

export const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.registration);
  console.log(userData);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
      }
      return;
    }

    dispatch(setUserData({ [field]: value }));
  };

  return (
    <RegistrationFormContainer>
      <Title>Регистрация</Title>
      <InputWrapper>
        <InputColumn>
          <TextContainer>
            <InputTitle>Фамилия</InputTitle>
            <StyledInput
              placeholder="Фамилия"
              value={userData.lastName}
              onChange={handleChange('lastName')}
            />
          </TextContainer>

          <TextContainer>
            <InputTitle>Имя</InputTitle>
            <StyledInput
              placeholder="Имя"
              value={userData.firstName}
              onChange={handleChange('firstName')}
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
            />
          </TextContainer>

          <TextContainer>
            <InputTitle>Телефон</InputTitle>
            <StyledInput
              placeholder="+7 (___) ___-__-__"
              type="tel"
              value={userData.phone}
              onChange={handleChange('phone')}
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
          </TextContainer>
        </InputColumn>
      </InputWrapper>

      <ButtonWrapper>
        <StyledButton>Зарегистрироваться</StyledButton>
      </ButtonWrapper>
    </RegistrationFormContainer>
  );
};

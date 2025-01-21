import React from 'react';
import { InputTitle, StyledButton, StyledInput, UppercaseTitle } from 'shared/lib';
import { ButtonWrapper, InputColumn, InputWrapper, TextContainer } from './RegistrationForm.styles';
import { RegistrationFormContainer } from './RegistrationForm.styles';
import { IconButton } from '@mui/material';
import { InputAdornment } from '@mui/material';

import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';
import { RegistrationDataType } from 'features/Registration/model/RegistrationDataType';
import { registerRequest } from 'features/Registration/api/registerRequest';
import { useNavigate } from 'react-router-dom';
import { validateForm } from 'features/Registration/lib/ValidateForm';
import { formatPhoneNumber } from 'features/Registration/lib/PhoneMask';

export const RegistrationForm = () => {
  // ! consts
  const navigate = useNavigate();
  const [userData, setUserData] = useState<RegistrationDataType>({
    first_name: '',
    last_name: '',
    middle_name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = useState<RegistrationDataType>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ! handlers

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (field === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setUserData({ ...userData, [field]: formattedPhone });
      if (isSubmitted) {
        validateForm(userData, setErrors);
      }
      return;
    }

    setUserData({ ...userData, [field]: value });
    if (isSubmitted) {
      validateForm(userData, setErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validateForm(userData, setErrors)) {
      try {
        const res = await registerRequest(userData);
        console.log('res', res);
        navigate('/login');
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  return (
    <RegistrationFormContainer>
      <UppercaseTitle>Регистрация</UppercaseTitle>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputColumn>
            <TextContainer>
              <InputTitle>Фамилия</InputTitle>
              <StyledInput
                placeholder="Фамилия"
                value={userData.last_name}
                onChange={handleChange('last_name')}
                error={isSubmitted && !!errors.last_name}
                errorMessage={isSubmitted ? errors.last_name : ''}
              />
            </TextContainer>

            <TextContainer>
              <InputTitle>Имя</InputTitle>
              <StyledInput
                placeholder="Имя"
                value={userData.first_name}
                onChange={handleChange('first_name')}
                error={isSubmitted && !!errors.first_name}
                errorMessage={isSubmitted ? errors.first_name : ''}
              />
            </TextContainer>

            <TextContainer>
              <InputTitle>Отчество</InputTitle>
              <StyledInput
                placeholder="Отчество"
                value={userData.middle_name}
                onChange={handleChange('middle_name')}
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
                error={isSubmitted && !!errors.email}
                errorMessage={isSubmitted ? errors.email : ''}
              />
            </TextContainer>

            <TextContainer>
              <InputTitle>Телефон</InputTitle>
              <StyledInput
                placeholder="+7 (___) ___-__-__"
                type="tel"
                value={userData.phone}
                onChange={handleChange('phone')}
                error={isSubmitted && !!errors.phone}
                errorMessage={isSubmitted ? errors.phone : ''}
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
                errorMessage={isSubmitted ? errors.password : ''}
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

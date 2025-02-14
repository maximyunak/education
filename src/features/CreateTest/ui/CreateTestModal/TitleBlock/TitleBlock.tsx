import React from 'react';

import { InputTitle, InputsBlock } from '../CreateTestModal.styles';
import { FormHelperText, Input, styled } from '@mui/material';
import { setField } from 'features/CreateTest/model/CreateTestSlice';
import { useAppDispatch } from 'shared/lib';
interface TitleBlockProps {
  data: {
    title: string;
    description: string;
  };
  titleError?: string;
}

const ErrorText = styled(FormHelperText)({
  color: 'red',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '10px',
  letterSpacing: '0.25px',
  position: 'absolute',
  bottom: '-18px',
  opacity: 0,
  transform: 'translateY(-10px)',
  animation: 'slideIn 0.3s ease forwards',
  '@keyframes slideIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

export const TitleBlock = ({ data, titleError }: TitleBlockProps) => {
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(setField({ name, value }));
  };

  return (
    <InputsBlock>
      <div>
        <InputTitle
          value={data.title}
          name="title"
          onChange={handleChange}
          placeholder="Введите название теста"
          error={!!titleError}
        />
        {titleError && <ErrorText id="component-helper-text">{titleError}</ErrorText>}
      </div>
      <Input
        name="description"
        value={data.description}
        onChange={handleChange}
        fullWidth
        placeholder="Описание теста"
      />
    </InputsBlock>
  );
};

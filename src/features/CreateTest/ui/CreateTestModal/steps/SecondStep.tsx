import React, { useState } from 'react';
import {
  ButtonsBlock,
  CloseIconContainer,
  DescriptionContainer,
  InputTitle,
  InputsBlock,
  ModalContainer,
  QuestionsBlock,
  AddQuestionContainer,
  ButtonsContainer,
} from '../CreateTestModal.styles';

import CloseIcon from '@mui/icons-material/Close';
import { Button, Input, MenuItem, Select } from '@mui/material';
import {
  StyledButton,
  StyledInput,
  Text20,
  Text20Bold,
  Title,
  useAppDispatch,
  useAppSelector,
} from 'shared/lib';
import { thems } from 'entities/Thems';
import { CreateTestSlice, setField } from 'features/CreateTest/model/CreateTestSlice';
import { createTestRequest } from 'features/CreateTest/api/createTestRequest';

interface SecondStepProps {
  data: CreateTestSlice;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePage: (page: number) => void;
}

export const SecondStep = ({ data, handleChange, handleChangePage }: SecondStepProps) => {
  const [max_attempts, setMax_attempts] = React.useState<number | string>(data.max_attempts);
  const [duration, setDuration] = React.useState<number | string>(data.duration);

  const dispatch = useAppDispatch();

  const formatTimeValue = (value: string | number) => {
    return `Время выполнения - ${value}`;
  };

  const formatInputValue = (value: number | string): string => {
    return `Количество попыток - ${value}`;
  };

  const handleChangeAssepts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const valueString = e.target.value;
    const valueNumber = parseInt(valueString.replace(/\D/g, ''), 10);

    if (isNaN(valueNumber) || valueNumber === 0) {
      if (name === 'duration') {
        dispatch(setField({ name: 'duration', value: 90 }));
        setDuration('');
      } else if (name === 'attempts') {
        dispatch(setField({ name: 'max_attempts', value: 3 }));
        setMax_attempts('');
      }
      return;
    }

    if (name === 'duration') {
      dispatch(setField({ name: 'duration', value: valueNumber }));
      setDuration(valueNumber);
    } else if (name === 'attempts') {
      dispatch(setField({ name: 'max_attempts', value: valueNumber }));
      setMax_attempts(valueNumber);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const name = e.target.name;
    name === 'attempts' ? setMax_attempts(data.max_attempts) : setDuration(data.duration);
  };

  const handleCreateTest = async () => {
    const res = await createTestRequest(data);
    console.log(res);
  };

  return (
    <>
      <InputsBlock>
        <InputTitle
          value={data.title}
          name="title"
          onChange={handleChange}
          placeholder="Введите название теста"
        />
        <Input
          name="description"
          value={data.description}
          onChange={handleChange}
          fullWidth
          placeholder="Описание теста"
        />
      </InputsBlock>
      <Select
        fullWidth
        defaultValue={thems[0]}
        // value={type}
        sx={{ maxWidth: '406px', maxHeight: '53px', borderRadius: '6px' }}
        // onChange={handleChangeType}
      >
        {thems.map((el) => (
          <MenuItem value={el}>{el}</MenuItem>
        ))}
      </Select>
      <StyledInput
        maxWidth={406}
        rounded={6}
        placeholder="Укажите время"
        value={formatTimeValue(duration)}
        onChange={handleChangeAssepts}
        // value={data.duration}
        name={'duration'}
        onBlur={handleBlur}
        endAdornment={'минут'}
      />
      {/* <TimeInput /> */}
      <StyledInput
        maxWidth={406}
        rounded={6}
        placeholder="Количество попыток"
        onChange={handleChangeAssepts}
        onBlur={handleBlur}
        name={'attempts'}
        // value={`Количество попыток - ${data.max_attempts}`}
        value={formatInputValue(max_attempts)}
      />

      <StyledInput maxWidth={406} rounded={6} placeholder="Привязать видеолекцию" />

      <ButtonsContainer>
        <StyledButton variant="outlined" maxWidth="160px" onClick={() => handleChangePage(1)}>
          Назад
        </StyledButton>
        <StyledButton maxWidth="160px" onClick={handleCreateTest}>
          Готово
        </StyledButton>
      </ButtonsContainer>
    </>
  );
};

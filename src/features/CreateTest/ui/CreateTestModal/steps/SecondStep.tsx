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

  const [passing_score, setPassingScore] = React.useState<number | string>(data.passing_score);

  const dispatch = useAppDispatch();

  // ! format input values

  const formatTimeValue = (value: string | number) => {
    return `Время выполнения - ${value}`;
  };

  const formatInputValue = (value: number | string): string => {
    return `Количество попыток - ${value}`;
  };

  const formatPassingScore = (value: number | string): string => {
    return `Проходной балл - ${value}`;
  };

  // ! actions

  const handleChangeFields = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      } else if (name === 'passing_score') {
        const value = Math.ceil(
          data.questions.reduce((sum, obj) => {
            return sum + Number(obj.points);
          }, 0) / 2,
        );
        dispatch(setField({ name: 'passing_score', value }));
        setPassingScore('');
      }
      return;
    }
    if (name === 'duration') {
      dispatch(setField({ name: 'duration', value: valueNumber }));
      setDuration(valueNumber);
    } else if (name === 'attempts') {
      dispatch(setField({ name: 'max_attempts', value: valueNumber }));
      setMax_attempts(valueNumber);
    } else if (name === 'passing_score') {
      dispatch(setField({ name: 'passing_score', value: valueNumber }));
      setPassingScore(valueNumber);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const name = e.target.name;
    name === 'attempts' && setMax_attempts(data.max_attempts);
    name === 'passing_score' && setPassingScore(data.passing_score);
    name === 'duration' && setDuration(data.duration);
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
        {thems.map((el, index) => (
          <MenuItem value={el} key={`${el}_${index}_`}>
            {el}
          </MenuItem>
        ))}
      </Select>
      <StyledInput
        maxWidth={406}
        rounded={6}
        placeholder="Укажите время"
        value={formatTimeValue(duration)}
        onChange={handleChangeFields}
        name={'duration'}
        onBlur={handleBlur}
        endAdornment={'минут'}
      />
      <StyledInput
        maxWidth={406}
        rounded={6}
        placeholder="Количество попыток"
        onChange={handleChangeFields}
        onBlur={handleBlur}
        name={'attempts'}
        value={formatInputValue(max_attempts)}
      />

      <StyledInput maxWidth={406} rounded={6} placeholder="Привязать видеолекцию" />
      <StyledInput
        maxWidth={406}
        rounded={6}
        name="passing_score"
        onChange={handleChangeFields}
        placeholder="Проходной балл"
        onBlur={handleBlur}
        value={formatPassingScore(passing_score)}
      />

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

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
import { Button, Input, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import {
  StyledButton,
  StyledInput,
  Text20,
  Text20Bold,
  Title,
  useAppDispatch,
  useAppSelector,
} from 'shared/lib';
import { CreateTestSlice, clearSlice, setField } from 'features/CreateTest/model/CreateTestSlice';
import { useGetThemesQuery } from 'entities/Themes';
import { useCreateTestMutation } from 'entities/Tests';
import { TestType } from 'entities/Tests';

interface SecondStepProps {
  data: TestType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePage: (page: number) => void;
  onClose: () => void;
}

export const SecondStep = ({ data, handleChange, handleChangePage, onClose }: SecondStepProps) => {
  // ! themes data
  const { data: themesData, isLoading, error } = useGetThemesQuery();

  const currentTheme = themesData?.items.find((el) => el.id === data.theme_id);
  console.log('🚀 ~ SecondStep ~ currentTheme:', currentTheme);

  // ! create test
  const [createTest, { isError, isSuccess, status }] = useCreateTestMutation();

  // ! empty string form
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
    try {
      await createTest(data);
      dispatch(clearSlice());
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeTheme = (e: SelectChangeEvent) => {
    const value = parseInt(e.target.value);
    dispatch(
      setField({
        name: 'theme_id',
        value,
      }),
    );
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
        defaultValue={themesData?.items[0].id.toString() || 'Ничего не найдено'}
        value={currentTheme?.id?.toString()}
        sx={{ maxWidth: '406px', maxHeight: '53px', borderRadius: '6px' }}
        onChange={handleChangeTheme}
      >
        {themesData &&
          themesData.items.map((el, index) => (
            <MenuItem value={el.id.toString()} key={`${el.name}_${index}_`}>
              {el.name}
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

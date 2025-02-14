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
  NoWrapText,
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
import { validatePassingScore } from 'features/CreateTest/lib/ValidateForm';

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

  // ! create test
  const [createTest, { isError, isSuccess, status }] = useCreateTestMutation();

  // ! redux
  const dispatch = useAppDispatch();
  const maxScore = data.questions.reduce((sum, question) => sum + Number(question.points), 0);

  // ! actions
  const handleChangeTheme = (e: SelectChangeEvent) => {
    const value = parseInt(e.target.value);
    dispatch(
      setField({
        name: 'theme_id',
        value,
      }),
    );
  };

  const handleCreateTest = async () => {
    try {
      if (!validatePassingScore(data.passing_score, maxScore)) {
      }
      await createTest(data);
      dispatch(clearSlice());
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const regExp = /^(?:[1-9]\d*|-(?:[1-9]\d*))$|^$/;

    if (regExp.test(value)) {
      switch (name) {
        case 'duration':
          dispatch(setField({ name, value }));
          break;
        case 'max_attempts':
          dispatch(setField({ name, value }));
          break;
        case 'passing_score':
          dispatch(setField({ name, value }));
          break;
        default:
          break;
      }
    }
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
        value={data.duration}
        onChange={handleChangeFields}
        name={'duration'}
        startAdornment={<NoWrapText>Время выполнения - </NoWrapText>}
        endAdornment={'минут'}
      />
      <StyledInput
        maxWidth={406}
        rounded={6}
        placeholder="Количество попыток"
        onChange={handleChangeFields}
        name={'max_attempts'}
        value={data.max_attempts}
        startAdornment={<NoWrapText>Количество попыток - </NoWrapText>}
      />

      <StyledInput maxWidth={406} rounded={6} placeholder="Привязать видеолекцию" />
      <StyledInput
        maxWidth={406}
        rounded={6}
        name="passing_score"
        onChange={handleChangeFields}
        placeholder="Укажите проходной балл"
        startAdornment={<NoWrapText>Проходной балл - </NoWrapText>}
        value={data.passing_score}
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

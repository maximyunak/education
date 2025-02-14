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
  InfoBlockContainer,
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
import { TitleBlock } from '../TitleBlock/TitleBlock';
interface SecondStepProps {
  data: TestType;
  handleChangePage: (page: number) => void;
  onClose: () => void;
}

export const SecondStep = ({ data, handleChangePage, onClose }: SecondStepProps) => {
  // ! themes data
  const { data: themesData, isLoading, error } = useGetThemesQuery();
  const currentTheme = themesData?.items.find((el) => el.id === data.theme_id);

  // ! create test
  const [createTest, { isError, isSuccess, status }] = useCreateTestMutation();

  // ! errors
  const [errors, setErrors] = React.useState({
    maxAttemptsError: '',
    durationError: '',
    passingScoreError: '',
    titleError: '',
  });

  console.log(errors);

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

  console.log('passing_score:', +data.passing_score);

  const validateFields = () => {
    const newErrors = {
      maxAttemptsError: '',
      durationError: '',
      passingScoreError: '',
      titleError: '',
    };

    if (!data.max_attempts || +data.max_attempts <= 0) {
      newErrors.maxAttemptsError = 'Количество попыток должно быть больше 0';
    }

    if (!data.duration || +data.duration <= 0) {
      newErrors.durationError = 'Время выполнения должно быть больше 0';
    }

    if (!data.passing_score || +data.passing_score > maxScore) {
      console.log('error', data.passing_score);

      newErrors.passingScoreError = `Проходной балл не должен превышать ${maxScore}`;
    }

    if (!data.title) {
      newErrors.titleError = 'Название теста обязательно';
    } else if (data.title.length < 10) {
      newErrors.titleError = 'Название теста должно быть больше 10 символов';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleCreateTest = async () => {
    if (validateFields()) {
      try {
        // await createTest(data);
        // dispatch(clearSlice());
        // onClose();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChangeFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const regExp = /^(?:[1-9]\d*|-(?:[1-9]\d*))$|^$/;

    if ((name === 'passing_score' && regExp.test(value)) || (+value === 0 && value !== '00')) {
      dispatch(setField({ name, value }));
    }

    if (regExp.test(value)) {
      switch (name) {
        case 'duration':
          dispatch(setField({ name, value }));
          break;
        case 'max_attempts':
          dispatch(setField({ name, value }));
          break;
        default:
          break;
      }
    }
  };

  console.log(errors.titleError);

  return (
    <>
      <TitleBlock data={data} titleError={errors.titleError} />
      <InfoBlockContainer>
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
          error={!!errors.durationError}
          errorMessage={errors.durationError}
        />
        <StyledInput
          maxWidth={406}
          rounded={6}
          placeholder="Количество попыток"
          onChange={handleChangeFields}
          name={'max_attempts'}
          value={data.max_attempts}
          startAdornment={<NoWrapText>Количество попыток - </NoWrapText>}
          error={!!errors.maxAttemptsError}
          errorMessage={errors.maxAttemptsError}
        />

        <StyledInput
          maxWidth={406}
          rounded={6}
          name="passing_score"
          onChange={handleChangeFields}
          placeholder="Укажите проходной балл"
          startAdornment={<NoWrapText>Проходной балл - </NoWrapText>}
          value={data.passing_score}
          error={!!errors.passingScoreError}
          errorMessage={errors.passingScoreError}
        />

        <StyledInput
          maxWidth={406}
          rounded={6}
          placeholder="Привязать видеолекцию ( в разработке )"
        />
        <StyledInput maxWidth={406} rounded={6} placeholder="Привязать лекцию ( в разработке )" />
      </InfoBlockContainer>

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

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
} from './CreateTestModal.styles';

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
import { Question } from '../Question';
import { addQuestion, setField } from '../../model/CreateTestSlice';
import { thems } from 'entities/Thems';

export const CreateTestModal = React.forwardRef<HTMLDivElement, { onClick: () => void }>(
  ({ onClick }, modalRef) => {
    // ! store
    const data = useAppSelector((state) => state.createTest);
    console.log('🚀 ~ data:', data);
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      dispatch(setField({ name, value }));
    };

    const handleAddQuestion = () => {
      dispatch(addQuestion());
    };

    const handleChangePage = (page: number) => {
      dispatch(
        setField({
          name: 'page',
          value: page,
        }),
      );
    };

    const formatTimeValue = (value: string | number) => {
      return `Время выполнения - ${value}`;
    };

    const formatInputValue = (value: number | string): string => {
      return `Количество попыток - ${value}`;
    };

    const [max_attempts, setMax_attempts] = React.useState<number | string>(data.max_attempts);
    const [duration, setDuration] = React.useState<number | string>(data.duration);

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

    return (
      <ModalContainer ref={modalRef} tabIndex={-1}>
        <CloseIconContainer>
          <CloseIcon onClick={onClick} />
        </CloseIconContainer>
        {data.page === 1 ? (
          <>
            <DescriptionContainer>
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
              <ButtonsBlock>
                <StyledButton variant="outlined" maxWidth="160px">
                  Предпросмотр
                </StyledButton>
                <StyledButton maxWidth="160px" onClick={() => handleChangePage(2)}>
                  Дальше
                </StyledButton>
              </ButtonsBlock>
            </DescriptionContainer>
            <QuestionsBlock>
              {data.questions.map((el, id) => (
                <Question {...el} id={id} key={`$_${id}`} />
              ))}
            </QuestionsBlock>
            <AddQuestionContainer>
              <Button
                variant="contained"
                onClick={handleAddQuestion}
                sx={{
                  textTransform: 'none',
                  '@media (max-width: 450px)': {
                    padding: '3px 15px',
                  },
                }}
              >
                Новый вопрос
              </Button>
            </AddQuestionContainer>
          </>
        ) : (
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
              <StyledButton maxWidth="160px" onClick={() => handleChangePage(1)}>
                Готово
              </StyledButton>
            </ButtonsContainer>
          </>
        )}
      </ModalContainer>
    );
  },
);

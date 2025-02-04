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
} from './CreateTestModal.styles';

import CloseIcon from '@mui/icons-material/Close';
import { Button, Input } from '@mui/material';
import {
  StyledButton,
  StyledInput,
  Text20,
  Text20Bold,
  useAppDispatch,
  useAppSelector,
} from 'shared/lib';
import { Question } from '../Question';
import { addQuestion, setDescription, setTitle } from '../../model/CreateTestSlice';

export const CreateTestModal = React.forwardRef<HTMLDivElement, { onClick: () => void }>(
  ({ onClick }, modalRef) => {
    // ! store
    const data = useAppSelector((state) => state.createTest);
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      switch (name) {
        case 'title':
          dispatch(setTitle(value));
          break;
        case 'desc':
          dispatch(setDescription(value));
          break;
      }
    };

    const handleAddQuestion = () => {
      dispatch(addQuestion());
    };

    return (
      <ModalContainer ref={modalRef} tabIndex={-1}>
        <CloseIconContainer>
          <CloseIcon onClick={onClick} />
        </CloseIconContainer>
        <DescriptionContainer>
          <InputsBlock>
            <InputTitle
              value={data.title}
              name="title"
              onChange={handleChange}
              placeholder="Введите название теста"
            />
            <Input
              name="desc"
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
            <StyledButton maxWidth="160px">Дальше</StyledButton>
          </ButtonsBlock>
        </DescriptionContainer>
        <QuestionsBlock>
          {data.questions.map((el, id) => (
            <Question {...el} id={id} key={`${el.questionTitle}_${id}`} />
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
      </ModalContainer>
    );
  },
);

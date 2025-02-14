import React, { useState } from 'react';
import {
  ButtonsBlock,
  DescriptionContainer,
  InputTitle,
  InputsBlock,
  QuestionsBlock,
  AddQuestionContainer,
} from '../CreateTestModal.styles';

import { Button, Input } from '@mui/material';
import { StyledButton, useAppDispatch, useAppSelector } from 'shared/lib';
import { addQuestion } from 'features/CreateTest/model/CreateTestSlice';
import { Question } from '../../Question';
import { TitleBlock } from '../TitleBlock/TitleBlock';

interface FirstStepProps {
  handleChangePage: (page: number) => void;
}

export const FirstStep = ({ handleChangePage }: FirstStepProps) => {
  const data = useAppSelector((state) => state.createTest);

  const dispatch = useAppDispatch();

  const handleAddQuestion = () => {
    dispatch(addQuestion());
  };

  return (
    <>
      <DescriptionContainer>
        <TitleBlock data={data} />
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
  );
};

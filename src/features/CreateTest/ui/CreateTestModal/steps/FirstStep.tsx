import React from 'react';
import {
  ButtonsBlock,
  DescriptionContainer,
  QuestionsBlock,
  AddQuestionContainer,
  ButtonsBlockMobile,
} from '../CreateTestModal.styles';

import { Button } from '@mui/material';
import { StyledButton, useAppDispatch, useAppSelector } from 'shared/lib';
import { addQuestion } from 'features/CreateTest/model/CreateTestSlice';
import { Question } from '../../Question';
import { TitleBlock } from '../TitleBlock/TitleBlock';
import { QuestionError, AnswerError } from 'features/CreateTest/model/ErrorsType';
import { QuestionVariant } from 'entities/Tests';

interface FirstStepProps {
  handleChangePage: (page: number) => void;
}

export const FirstStep = ({ handleChangePage }: FirstStepProps) => {
  const data = useAppSelector((state) => state.createTest);

  const dispatch = useAppDispatch();

  const handleAddQuestion = () => {
    dispatch(addQuestion());
  };

  const [errors, setErrors] = React.useState<QuestionError[]>([]);

  const handleValidate = () => {
    const newErrors: QuestionError[] = [];

    data.questions.forEach((el, id) => {
      const questionError: QuestionError = { id };
      const answerErrors: AnswerError[] = [];

      if (el.text === '' || !el.text) {
        questionError.textError = 'Вопрос не может быть пустым';
      }

      if (el.type === QuestionVariant.MULTIPLE) {
        const hasCorrectAnswer = el.answers.some((answer) => answer.is_correct);
        if (!hasCorrectAnswer) {
          questionError.textError = 'Выберите хотя бы один правильный ответ';
        }
      }

      el.answers.forEach((answer, answerId) => {
        if (answer.text === '' || !answer.text) {
          answerErrors.push({
            textError: 'Ответ не может быть пустым',
            answerId,
          });
        }
      });

      if (answerErrors.length > 0) {
        questionError.answersError = answerErrors;
      }

      if (questionError.textError || questionError.answersError) {
        newErrors.push(questionError);
      }
    });

    setErrors(newErrors);

    return newErrors.length === 0;
  };

  const handleNextStep = () => {
    if (handleValidate()) {
      handleChangePage(2);
    }
  };

  return (
    <>
      <DescriptionContainer>
        <TitleBlock data={data} />
        <ButtonsBlock>
          <StyledButton variant="outlined" maxWidth="160px">
            Предпросмотр
          </StyledButton>
          <StyledButton maxWidth="160px" onClick={handleNextStep}>
            Дальше
          </StyledButton>
        </ButtonsBlock>
      </DescriptionContainer>
      <QuestionsBlock>
        {data.questions.map((el, id) => (
          <Question
            {...el}
            id={id}
            key={`$_${id}`}
            error={errors.find((error) => error.id === id)}
          />
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
      <ButtonsBlockMobile>
        <StyledButton variant="outlined" maxWidth="160px">
          Предпросмотр
        </StyledButton>
        <StyledButton maxWidth="160px" onClick={handleNextStep}>
          Дальше
        </StyledButton>
      </ButtonsBlockMobile>
    </>
  );
};

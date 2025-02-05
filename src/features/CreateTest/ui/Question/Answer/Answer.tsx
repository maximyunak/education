import { Checkbox, Radio } from '@mui/material';
import { editAnswer, removeAnswer } from 'features/CreateTest/model/CreateTestSlice';
import { AnswerType, QuestionVariant } from 'features/CreateTest/model/TestType';
import React from 'react';
import { StyledInput, useAppDispatch } from 'shared/lib';
import { AnswerContainer, InputContainer } from './Answer.styles';

export const AnswerBlock = ({
  answerTitle,
  is_correct,
  answerId,
  questionId,
  type,
}: AnswerType & { answerId: number; questionId: number; type: QuestionVariant }) => {
  const dispatch = useAppDispatch();

  const handleChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(
      editAnswer({
        answerTitle: value,
        answerId,
        questionId,
      }),
    );
  };

  const handleChangeCurrentAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const is_checked = e.target.checked;
    dispatch(
      editAnswer({
        answerId,
        questionId,
        is_correct: is_checked,
      }),
    );
  };

  const handleRemoveAnswer = () => {
    dispatch(removeAnswer({ questionId, answerId }));
  };

  return (
    <AnswerContainer>
      <InputContainer>
        <StyledInput
          onChange={handleChangeAnswer}
          startAdornment={
            type === QuestionVariant.MULTIPLE ? (
              <Checkbox
                onChange={handleChangeCurrentAnswer}
                sx={{ padding: 0, marginRight: 2 }}
                checked={is_correct}
              />
            ) : (
              <Radio
                sx={{ padding: 0, marginRight: 2 }}
                onChange={handleChangeCurrentAnswer}
                checked={is_correct}
              />
            )
          }
          value={answerTitle}
          maxWidth={406}
          rounded={6}
        />
      </InputContainer>
      <button onClick={handleRemoveAnswer}>delete</button>
    </AnswerContainer>
  );
};

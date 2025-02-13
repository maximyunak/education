import { Checkbox, IconButton, Radio, useMediaQuery } from '@mui/material';
import { editAnswer, removeAnswer } from 'features/CreateTest/model/CreateTestSlice';
import React from 'react';
import { StyledInput, useAppDispatch } from 'shared/lib';
import { AnswerContainer, ButtonsContainer, InputContainer } from './Answer.styles';

import { trashIcon } from 'shared/assets/icons';

import { AnswerType, QuestionVariant } from 'entities/Tests';

export const AnswerBlock = ({
  text,
  is_correct,
  answerId,
  questionId,
  type,
}: AnswerType & { answerId: number; questionId: number; type: QuestionVariant }) => {
  const [isVisibleOptions, setIsVisibleOptions] = React.useState(false);

  const isMobile = useMediaQuery('(max-width: 550px)');

  const dispatch = useAppDispatch();

  const handleChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(
      editAnswer({
        text: value,
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
    <AnswerContainer
      onMouseEnter={() => setIsVisibleOptions(true)}
      onMouseLeave={() => setIsVisibleOptions(false)}
    >
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
          endAdornment={
            isMobile && (
              <IconButton sx={{ width: '37px', height: '37px' }}>
                <img src={trashIcon} onClick={handleRemoveAnswer} />
              </IconButton>
            )
          }
          value={text}
          maxWidth={406}
          rounded={6}
        />
      </InputContainer>
      {!isMobile && (
        <ButtonsContainer className={`${isVisibleOptions && 'active'} button`}>
          <IconButton sx={{ width: '46px', height: '46px' }} onClick={handleRemoveAnswer}>
            <img src={trashIcon} />
          </IconButton>
        </ButtonsContainer>
      )}
    </AnswerContainer>
  );
};

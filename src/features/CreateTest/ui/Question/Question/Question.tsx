import React from 'react';
import {
  AnswersContainer,
  Line,
  QuestionTitle,
  QuestionTitleBlock,
  QuestionsContainer,
} from './Question.styles';
import { StyledInput, Text20, useAppDispatch } from 'shared/lib';
import { AnswerType, IQuestion, QuestionVariant } from 'features/CreateTest/model/TestType';
import { AnswerBlock } from '../Answer/Answer';
import {
  Checkbox,
  IconButton,
  MenuItem,
  Radio,
  Select,
  SelectChangeEvent,
  useMediaQuery,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import {
  addAnswer,
  editQuestion,
  removeQuestion,
  setField,
} from 'features/CreateTest/model/CreateTestSlice';

import { trashIcon } from 'shared/assets/icons';

interface IQuestionProps extends IQuestion {
  id: number;
}

export const Question = ({ questionTitle, points, answers, type, id }: IQuestionProps) => {
  const isMobile = useMediaQuery('(max-width: 550px)');

  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(editQuestion({ questionTitle: value, id }));
  };

  const handleAddAnswer = () => {
    dispatch(addAnswer(id));
  };

  const handleChangeType = (e: SelectChangeEvent) => {
    const editedType = e.target.value as QuestionVariant;

    dispatch(editQuestion({ type: editedType, id }));
  };

  const handleDeleteQuestion = () => {
    dispatch(removeQuestion(id));
  };

  return (
    <QuestionsContainer>
      <QuestionTitleBlock>
        <QuestionTitle>
          {!isMobile && <Text20>{id + 1}.</Text20>}
          <StyledInput
            maxWidth={406}
            rounded={6}
            placeholder="Вопрос без названия"
            value={questionTitle}
            onChange={handleInputChange}
            startAdornment={isMobile && <Text20>{id + 1}.</Text20>}
            endAdornment={
              isMobile && (
                <IconButton sx={{ width: '37px', height: '37px' }} onClick={handleDeleteQuestion}>
                  <img src={trashIcon} />
                </IconButton>
              )
            }
          />
        </QuestionTitle>
        <Select
          fullWidth
          defaultValue={QuestionVariant.SINGLE}
          value={type}
          sx={{ maxWidth: '406px', maxHeight: '53px', borderRadius: '6px' }}
          onChange={handleChangeType}
          startAdornment={
            type === QuestionVariant.SINGLE ? (
              <Radio sx={{ padding: 0, marginRight: 2 }} checked={true} />
            ) : (
              <Checkbox sx={{ padding: 0, marginRight: 2 }} checked={true} />
            )
          }
        >
          <MenuItem value={QuestionVariant.SINGLE}>один правильный ответ</MenuItem>
          <MenuItem value={QuestionVariant.MULTIPLE}>несколько правильных ответов</MenuItem>
        </Select>
        {!isMobile && (
          <IconButton onClick={handleDeleteQuestion}>
            <img src={trashIcon} />
          </IconButton>
        )}
      </QuestionTitleBlock>
      <AnswersContainer>
        {answers.map((el, index) => (
          <AnswerBlock
            answerId={index}
            type={type}
            questionId={id}
            key={`${id}-${index}`}
            {...el}
          />
        ))}
        <div onClick={handleAddAnswer} style={{ cursor: 'pointer' }}>
          <StyledInput
            startAdornment={
              type === QuestionVariant.MULTIPLE ? (
                <Checkbox
                  name={`question_answer_${id}`}
                  disabled
                  sx={{ padding: 0, marginRight: 2 }}
                  checked={false}
                />
              ) : (
                <Radio
                  name={`question_answer_${id}`}
                  disabled
                  sx={{ padding: 0, marginRight: 2 }}
                />
              )
            }
            placeholder={'Добавить новый вариант'}
            maxWidth={406}
            rounded={6}
            disabled
          />
        </div>
      </AnswersContainer>
      <Line />
    </QuestionsContainer>
  );
};

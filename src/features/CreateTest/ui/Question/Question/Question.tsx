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
import { Checkbox, MenuItem, Radio, Select } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

interface IQuestionProps extends IQuestion {
  id: number;
}

export const Question = ({ questionTitle, points, answers, type, id }: IQuestionProps) => {
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // dispatch();
  };

  return (
    <QuestionsContainer>
      <QuestionTitleBlock>
        <QuestionTitle>
          <Text20>{id + 1}.</Text20>
          <StyledInput
            maxWidth={406}
            rounded={6}
            placeholder="Вопрос без названия"
            value={questionTitle}
            onChange={handleInputChange}
          />
        </QuestionTitle>
        {/* <Select
          startAdornment={<Radio sx={{ padding: 0, marginRight: 2 }} checked={true} />}
          value={'один правильный ответ'}
          // maxWidth={406}
          // rounded={6}
        /> */}
        <Select
          fullWidth
          defaultValue={QuestionVariant.SINGLE}
          value={type}
          sx={{ maxWidth: '406px' }}
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
        <div>
          <DeleteIcon sx={{ display: 'block' }} />
        </div>
      </QuestionTitleBlock>
      <AnswersContainer>
        {answers.map((el, id) => (
          <AnswerBlock key={`${id}__${el.answerTitle}`} {...el} />
        ))}
      </AnswersContainer>
      <Line />
    </QuestionsContainer>
  );
};

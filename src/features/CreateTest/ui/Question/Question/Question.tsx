import React from 'react';
import {
  AnswersContainer,
  Line,
  OptionBlock,
  QuestionTitle,
  QuestionTitleBlock,
  QuestionsContainer,
} from './Question.styles';
import { StyledInput, Text16, Text16Bold, Text17, Text20, useAppDispatch } from 'shared/lib';
import { AnswerType, IQuestion, QuestionVariant } from 'features/CreateTest/model/TestType';
import { AnswerBlock } from '../Answer/Answer';
import {
  Checkbox,
  IconButton,
  MenuItem,
  Popover, // Импортируем Popover
  Radio,
  Select,
  SelectChangeEvent,
  useMediaQuery,
} from '@mui/material';

import {
  addAnswer,
  editQuestion,
  removeQuestion,
  setField,
} from 'features/CreateTest/model/CreateTestSlice';

import { trashIcon } from 'shared/assets/icons';

import MoreVertIcon from '@mui/icons-material/MoreVert';

interface IQuestionProps extends IQuestion {
  id: number;
}

export const Question = ({ questionTitle, points, answers, type, id }: IQuestionProps) => {
  const isMobile = useMediaQuery('(max-width: 550px)');
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(editQuestion({ questionTitle: value, id }));
  };

  const handleAddAnswer = () => {
    dispatch(addAnswer(id));
  };

  const handleDeleteQuestion = () => {
    dispatch(removeQuestion(id));
    handleClosePopover();
  };

  const handleChangePoints = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(editQuestion({ points: +value, id }));
  };

  const handleChangeType = (e: SelectChangeEvent) => {
    const editedType = e.target.value as QuestionVariant;

    dispatch(editQuestion({ type: editedType, id }));
  };

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsVisiblePopup(true);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setIsVisiblePopup(false);
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
                <IconButton sx={{ width: '50px', height: '50px' }} onClick={handleOpenPopover}>
                  <MoreVertIcon />
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
          <IconButton sx={{ width: '50px', height: '50px' }} onClick={handleOpenPopover}>
            <MoreVertIcon />
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

      <Popover
        open={isVisiblePopup}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <OptionBlock>
          <Text16Bold>Выберите действие:</Text16Bold>
          <div style={{ marginTop: '10px' }}>
            <MenuItem className="points">
              <Text16>Количество баллов </Text16>{' '}
              <input
                name="points"
                onChange={handleChangePoints}
                value={points}
                type="number"
                src=""
                alt=""
              />
            </MenuItem>
            <MenuItem sx={{}} onClick={handleDeleteQuestion}>
              <Text16>Удалить вопрос</Text16>
            </MenuItem>
            <MenuItem onClick={handleClosePopover}>Закрыть</MenuItem>
          </div>
        </OptionBlock>
      </Popover>
    </QuestionsContainer>
  );
};

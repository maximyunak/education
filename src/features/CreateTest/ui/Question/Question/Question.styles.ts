import { styled } from '@mui/material';

export const QuestionsContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const QuestionTitleBlock = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const QuestionTitle = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 406px;
  margin-left: 36px;

  position: relative;

  h1 {
    position: absolute;

    left: -40px;
  }
`;

export const AnswersContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding-left: 36px;
`;

export const Line = styled('div')`
  width: 100%;
  height: 1px;
  margin: 40px 0;
  background-color: #e5e5e5;
`;

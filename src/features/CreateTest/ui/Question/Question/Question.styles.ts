import { styled } from '@mui/material';

export const QuestionsContainer = styled('div')`
  display: flex;
  flex-direction: column;

  .MuiRadio-colorPrimary {
    @media (max-width: 700px) {
      margin-right: 10px;
    }
  }
`;

export const QuestionTitleBlock = styled('div')`
  /* display: flex; */
  display: grid;
  grid-template-columns: 406px 406px 50px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 36px;

  img {
    cursor: pointer;
  }

  @media (max-width: 1050px) {
    grid-template-columns: 406px 50px;

    row-gap: 20px;

    .MuiInputBase-root {
      order: 3;
    }
  }

  @media (max-width: 550px) {
    padding-left: 0;

    grid-template-columns: 1fr;
    row-gap: 10px;
    margin-bottom: 10px;
  }
`;

export const QuestionTitle = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 406px;

  position: relative;

  h1 {
    position: absolute;
    left: -40px;

    @media (max-width: 550px) {
      position: static;
      margin-right: 7px;
      margin-top: 1px;
    }
  }
`;

export const AnswersContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding-left: 36px;

  @media (max-width: 550px) {
    padding-left: 0;
  }
`;

export const Line = styled('div')`
  width: 100%;
  height: 1px;
  margin: 40px 0;
  background-color: #e5e5e5;
`;

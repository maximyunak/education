import { styled } from '@mui/material/styles';

export const ExampleCourseCardContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 760px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ExampleTextInfo = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  max-width: 570px;
  white-space: nowrap;
  h2,
  p {
    overflow: hidden;
    text-overflow: ellipsis; /* Добавляем троеточие */
  }
  button {
    margin-top: 40px;
  }
  @media (max-width: 1180px) {
    max-width: 470px;
    gap: 0px;
    button {
      margin-top: 20px;
    }
  }
  @media (max-width: 950px) {
    max-width: 370px;
    button {
      margin-top: 10px;
    }
  }
  @media (max-width: 760px) {
    max-width: 100%;
    button {
      display: none;
    }
  }
`;

export const MobileButton = styled('div')`
  display: none;
  margin-top: 20px;
  @media (max-width: 760px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 550px) {
    margin-top: 10px;
  }
`;

export const ExampleCourseImage = styled('img')`
  @media (max-width: 1180px) {
    max-width: 430px;
    height: auto;
  }
  @media (max-width: 950px) {
    max-width: 360px;
  }
  @media (max-width: 760px) {
    max-width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 550px) {
    max-width: 100%;
  }
`;

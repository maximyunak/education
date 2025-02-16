import { styled } from '@mui/material';

export const ModalContainer = styled('div')`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 1200px;
  overflow-y: auto !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background-color: #fff;

  transition: 0.3s width;

  max-height: 750px;

  border-radius: 12px;
  padding: 20px 40px;

  @media (max-width: 750px) {
    padding: 20px;
  }
  @media (max-width: 450px) {
    padding: 15px 10px;
  }
`;

export const CloseIconContainer = styled('div')`
  align-self: flex-end;
  cursor: pointer;
`;

export const DescriptionContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  button {
    @media (max-width: 670px) {
      display: none;
    }
  }
`;

export const InputsBlock = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 700px;
  width: 100%;
  div {
    position: relative;
  }
`;

export const ButtonsBlock = styled('div')`
  display: flex;
  gap: 15px;
  align-items: center;

  button {
    width: 160px;
  }
`;

export const ButtonsBlockMobile = styled('div')`
  display: none;
  gap: 15px;
  align-items: center;
  justify-content: center;

  button {
    width: 160px;
  }

  @media (max-width: 670px) {
    display: flex;
  }
`;

export const InputTitle = styled('input')<{ error?: boolean }>`
  font-size: 32px;
  font-weight: 600;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: ${({ error }) => (error ? '2px solid #d32f2f' : '1px solid transparent')};

  ${({ error }) =>
    error &&
    `
    animation: shake 0.5s ease;
  `}

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translateX(-2px);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translateX(2px);
    }
  }

  @media (max-width: 840px) {
    font-size: 28px;
  }
  @media (max-width: 740px) {
    font-size: 24px;
  }
  @media (max-width: 640px) {
    font-size: 24px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
  }
  @media (max-width: 340px) {
    font-size: 18px;
  }
`;

export const AddQuestionContainer = styled('div')`
  width: 100%;
  border: 3px dashed #3d8be4;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: clamp(6.25rem, 4.432rem + 9.09vw, 11.25rem);

  @media (max-width: 750px) {
    margin-top: 10px;
  }
  @media (max-width: 450px) {
    margin-top: 0px;
  }
`;

export const QuestionsBlock = styled('div')`
  margin-top: 15px;
`;

export const ButtonsContainer = styled('div')`
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const NoWrapText = styled('span')`
  white-space: nowrap;
  margin-right: 5px;
`;

export const InfoBlockContainer = styled('div')`
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }
  gap: 25px;
`;

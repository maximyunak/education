import { styled } from '@mui/material';

export const ModalContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 1200px;
  overflow-y: auto !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: #fff;

  max-height: 750px;
  height: 100%;

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
  gap: 15px;
  max-width: 700px;
  width: 100%;
`;

export const ButtonsBlock = styled('div')`
  display: flex;
  gap: 15px;
  align-items: center;

  button {
    width: 160px;
  }
`;

export const InputTitle = styled('input')`
  font-size: 32px;
  font-weight: 600;
  width: 100%;
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

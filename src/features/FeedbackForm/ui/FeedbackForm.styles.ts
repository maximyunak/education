import { styled } from '@mui/material';

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  border-radius: 20px;
  width: 100%;
  max-width: 570px;
  text-align: center;
  box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
    button {
      height: 40px;
    }
  }
`;

export const InputsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const CheckboxContainer = styled('div')`
  text-align: left;
  margin-top: 15px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

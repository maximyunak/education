import { styled } from '@mui/material';

export const VideoFilterContainer = styled('div')`
  display: flex;
  /* gap: 60px; */
  justify-content: space-between;
  margin: 45px 0;
  align-items: center;
  gap: 20px;
  @media (max-width: 1060px) {
    gap: 6px;
    input {
      max-width: 130px;
    }
  }
  @media (max-width: 880px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
    margin: 25px 0;
    input {
      max-width: 400px;
    }
  }
`;

export const SwitchContainer = styled('div')`
  display: flex;
  gap: 10px;
  align-items: center;
  @media (max-width: 1060px) {
    gap: 5px;
  }
  @media (max-width: 370px) {
    gap: 3px;
    h3 {
      font-size: 13px;
    }
  }
`;

export const Flex = styled('div')`
  display: flex;
  overflow-x: auto;
  gap: 8px;
`;

export const InputsContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 50%;
  gap: 20px;
  align-items: center;
  @media (max-width: 880px) {
    width: 100%;
    gap: 50px;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    max-width: 70%;
    gap: 30px;
  }
  @media (max-width: 450px) {
    max-width: 100%;
    gap: 20px;
  }
`;

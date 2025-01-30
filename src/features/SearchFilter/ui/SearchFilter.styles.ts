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
    p {
      font-size: 13px;
    }
  }
`;

export const Flex = styled('div')`
  display: flex;
  overflow-x: auto;
  gap: 8px;
`;

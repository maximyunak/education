import { styled } from '@mui/material';

export const Section = styled('section')`
  padding: 80px 0;
  &.bg-blue {
    background-color: #f6f8f9;
  }
  @media (max-width: 1180px) {
    padding: 80px 0;
  }
  @media (max-width: 800px) {
    padding: 60px 0;
  }
  @media (max-width: 620px) {
    padding: 40px 0;
  }
`;

export const TestsContainer = styled('div')`
  display: grid;
  justify-content: start;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: space-between;

  row-gap: 20px;
  @media (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FlexCenter = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

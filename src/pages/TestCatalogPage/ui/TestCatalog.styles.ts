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

export const TestContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 650px) {
    justify-content: center;
  }
`;

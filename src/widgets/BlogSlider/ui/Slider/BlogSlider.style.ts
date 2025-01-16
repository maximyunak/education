import styled from '@mui/material/styles/styled';

export const BlogSliderContainer = styled('div')`
  margin-top: 73px;
  position: relative;
  @media (max-width: 800px) {
    margin-top: 40px;
  }
  @media (max-width: 540px) {
    margin-bottom: 20px;
  }
`;

export const SliderControls = styled('div')`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;

  @media (max-width: 800px) {
    margin-top: 40px;
  }
  @media (max-width: 620px) {
    margin-top: 20px;
  }
  @media (max-width: 450px) {
    button {
      display: none;
    }
  }
`;

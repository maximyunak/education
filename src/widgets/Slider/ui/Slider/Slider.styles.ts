import { styled } from '@mui/material/styles';

export const SliderControls = styled('div')`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
`;

export const SwiperPagination = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 540px) {
    display: none;
  }
`;

export const SliderContainer = styled('div')`
  position: relative;
`;

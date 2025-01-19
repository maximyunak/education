import { styled } from '@mui/material/styles';

export const CourseContainer = styled('div')`

`;

export const BgContainer = styled('div')`
  position: relative;
`;

export const BgBlock = styled('div')`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  z-index: -100;
`;

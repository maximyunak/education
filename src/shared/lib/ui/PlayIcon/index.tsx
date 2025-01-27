import { styled } from '@mui/material';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const PlayIconStyle = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #3d8be4;
  border-radius: 50%;
  box-shadow: 0 8px 30px 0 #00000010;
`;

export const PlayIcon = () => {
  return (
    <PlayIconStyle>
      <PlayArrowIcon />
    </PlayIconStyle>
  );
};

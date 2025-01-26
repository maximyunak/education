import { styled } from '@mui/material';

export const VideoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 367px;
  width: 100%;
`;

export const Preview = styled('image')`
  position: relative;
  width: 367px;
  height: 208px;
  border-radius: 12px;

  box-shadow: 0 8px 30px 0 #00000010;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    filter: blur(3px);
  }
`;

export const PlayIcon = styled('div')`
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

export const InfoContainer = styled('div')`
  margin-top: -10px;
  display: flex;
  align-items: center;
  gap: 15px;
  div {
    display: flex;
    align-items: center;
    gap: 6px;
    svg {
      width: 14px;
    }
  }
`;

export const TimeContainer = styled('div')`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background-color: #666666;
  color: white;
  padding: 6px 15px;
  border-radius: 16px;
`;

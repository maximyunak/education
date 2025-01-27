import { styled } from '@mui/material';

export const VideoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 367px;
  width: 100%;

  @media (max-width: 1180px) {
    max-width: 300px;
  }
  @media (max-width: 968px) {
    max-width: 370px;
  }
  @media (max-width: 800px) {
    max-width: 300px;
  }

  @media (max-width: 650px) {
    max-width: 370px;
  }
`;

export const Preview = styled('image')`
  position: relative;
  max-width: 367px;
  max-height: 208px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 30px 0 #00000010;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    filter: blur(3px);
  }
  @media (max-width: 1180px) {
    max-height: calc(300px / 1.76);
  }

  @media (max-width: 968px) {
    max-height: calc(370px / 1.76);
  }

  @media (max-width: 800px) {
    max-height: calc(300px / 1.76);
  }

  @media (max-width: 650px) {
    max-height: calc(370px / 1.76);
  }

  @media (max-width: 375px) {
    max-height: calc((100vw - 30px) / 1.76);
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

  @media (max-width: 800px) {
    padding: 5px 10px;
  }
`;

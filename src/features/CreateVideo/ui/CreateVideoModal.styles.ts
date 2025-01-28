import { styled } from '@mui/material';

export const ModalContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 1200px;
  overflow-y: auto !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: #fff;

  max-height: 750px;
  height: 100%;

  border-radius: 12px;
  padding: 20px 40px;

  @media (max-width: 750px) {
    padding: 20px;
  }
  @media (max-width: 450px) {
    padding: 15px 10px;
  }
`;

export const CloseIconContainer = styled('div')`
  align-self: flex-end;
  cursor: pointer;
`;

export const DescriptionContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 700px;
    width: 100%;
  }
  button {
    @media (max-width: 670px) {
      display: none;
    }
  }
`;

export const InputTitle = styled('input')`
  font-size: 32px;
  font-weight: 600;
  width: 100%;
  @media (max-width: 840px) {
    font-size: 28px;
  }
  @media (max-width: 740px) {
    font-size: 24px;
  }
  @media (max-width: 640px) {
    font-size: 24px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
  }
  @media (max-width: 340px) {
    font-size: 18px;
  }
`;

export const UploadContainer = styled('div')`
  width: 100%;
  border: 3px dashed #3d8be4;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: clamp(6.25rem, 4.432rem + 9.09vw, 11.25rem);
  margin-top: 40px;

  @media (max-width: 750px) {
    margin-top: 10px;
  }
  @media (max-width: 450px) {
    margin-top: 0px;
  }
`;

export const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const VideoPreviewContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 0px;

  img,
  video {
    box-shadow: 0px 0px 30px 9px #00000010;
    max-width: 80%;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }

  div {
    display: flex;
    gap: 15px;
    align-items: self-start;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    img,
    video {
      max-width: 100%;
      max-height: 400px;
    }
  }
  @media (max-width: 450px) {
    gap: 10px;
    img,
    video {
      max-height: 300px;
    }
  }
`;

export const MobileButton = styled('div')`
  justify-content: center;
  display: none;
  @media (max-width: 670px) {
    display: flex;
    margin-top: 10px;
  }
`;

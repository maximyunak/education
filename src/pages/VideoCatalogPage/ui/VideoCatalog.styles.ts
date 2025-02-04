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

export const VideosContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 650px) {
    justify-content: center;
  }
`;

export const MoreButton = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
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

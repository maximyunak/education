import { styled } from '@mui/material';

export const TestPreviewContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.1);

  max-width: clamp(20rem, 3.333rem + 26.67vw, 25rem);
  width: 100%;

  padding: 40px 30px;
  border-radius: 12px;
  height: auto;
  @media (max-width: 670px) {
    max-width: 600px;
    padding: 20px 15px;
    gap: 10px;
  }
  @media (max-width: 600px) {
    max-width: 400px;
  }
`;

export const TestInfo = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p,
  svg {
    color: #3d8be4;
  }

  .info {
    display: flex;
    align-items: center;
    gap: clamp(0.313rem, -0.938rem + 2.5vw, 1.25rem);
  }

  .duration {
    display: flex;
    gap: 8px;
    align-items: center;
    @media (max-width: 600px) {
      gap: 3px;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 5px;
  }
`;

export const DescContainer = styled('div')`
  h1 {
    /* max-height: 100px; */
    /* height: 100%; */
    /* overflow: hidden; */
    /* white-space: nowrap; */
    /* text-overflow: ellipsis; */
  }
`;

export const AuthorContainer = styled('div')`
  margin-top: auto;
`;

import { styled } from '@mui/material';

export const TestPreviewContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0px;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.1);

  max-width: clamp(20rem, 3.333rem + 26.67vw, 25rem);
  width: 100%;

  padding: 30px;
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
    white-space: nowrap;
  }

  .info {
    display: flex;
    align-items: center;
    /* gap: clamp(0.313rem, -0.938rem + 2.5vw, 1.25rem); */
    gap: 4px;
  }

  .duration {
    display: flex;
    gap: 3px;
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
  margin-top: 10px;
  div {
    margin-top: 5px;
    overflow: hidden;
    /* height: 100px; */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  margin-bottom: 13px;
`;

export const AuthorContainer = styled('div')`
  margin-top: auto;
`;

export const SortedInfo = styled('div')`
  margin-top: 5px;
  /* color: #282828; */
  display: flex;
  justify-content: space-between;
`;

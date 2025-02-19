import { styled } from '@mui/material';

export const DialogContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h1 {
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 40px;

    button {
      width: 100%;
    }
  }
  @media (max-width: 540px) {
    padding: 10px;
    div {
      flex-direction: column;
    }
  }
  /* align-items: center; */
`;

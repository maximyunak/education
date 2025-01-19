import styled from '@mui/material/styles/styled';

export const AdwantageItem = styled('div')`
  display: flex;
  gap: 30px;
  align-items: start;

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 470px;

    h3 {
      font-size: 20px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
    }
  }
  @media (max-width: 1180px) {
    gap: 10px;
    div {
      max-width: 400px;
      gap: 10px;
      h3 {
        font-size: 17px;
      }

      p {
        font-size: 14px;
      }
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
  @media (max-width: 980px) {
    gap: 5px;
    div {
      max-width: 320px;

      h3 {
        font-size: 15px;
      }
      p {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 800px) {
    gap: 10px;
    div {
      max-width: 400px;

      h3 {
        font-size: 16.8px;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;

export const AdwantagesContainer = styled('div')`
  margin-top: 90px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  column-gap: 10px;
  row-gap: 70px;
  @media (max-width: 1180px) {
    row-gap: 50px;
    margin-top: 50px;
  }
`;

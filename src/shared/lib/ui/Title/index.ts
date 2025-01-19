import styled from '@mui/material/styles/styled';

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  @media (max-width: 540px) {
    font-size: 24px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
  }
  @media (max-width: 340px) {
    font-size: 18px;
  }
`;
export const UppercaseTitle = styled(Title)`
  text-transform: uppercase;
`;

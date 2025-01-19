import styled from '@mui/material/styles/styled';

export const CardContainer = styled('div')`
  border-radius: 12px;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 30px;

  @media (max-width: 1180px) {
    padding: 20px;
  }
  @media (max-width: 1000px) {
    padding: 10px;
  }
`;

export const ContactsContainer = styled('div')`
  display: flex;
  /* gap: 30px; */
  margin-top: 20px;
  justify-content: space-between;
`;

export const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 32px;
  margin-bottom: 40px;
  @media (max-width: 1180px) {
    margin-top: 20px;
    gap: 10px;
    margin-bottom: 20px;
  }
`;

import styled from 'styled-components';

export const Registration = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  /* align-items: center; */
`;

export const RegistrationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1187px;
  margin: 0 auto;
  @media (max-width: 980px) {
    width: 100%;
    justify-content: center;
  }
`;

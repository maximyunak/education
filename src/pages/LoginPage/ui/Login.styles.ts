import styled from 'styled-components';

export const Login = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  align-items: center;
`;

export const LoginImage = styled.img`
  width: 645px;
  @media (max-width: 1050px) {
    width: 550px;
    height: 504px;
  }
  @media (max-width: 980px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
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

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Form = styled.form`
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 450px) {
    gap: 15px;
    margin-top: 30px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  color: #000;
  display: flex;
  justify-content: flex-end;
`;

export const LoginWith = styled.div`
  margin-top: 38px;
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
  justify-content: center;
  @media (max-width: 450px) {
    margin-top: 20px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d8dadc;
  position: absolute;
`;

export const LoginWithText = styled.p`
  font-size: 14px;
  color: #00000070;
  background-color: #fff;
  padding: 0 4px;
  z-index: 2;
`;

export const LoginWithIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const LoginWithContainer = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

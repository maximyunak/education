import styled from 'styled-components';

export const RegistrationFormContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  margin-top: 30px;

  @media (max-width: 600px) {
    width: 353px;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 600px) {
    margin-top: 30px;
    align-items: center;
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
  max-width: 353px;
`;

export const ButtonWrapper = styled.div`
  margin: 60px auto 0;
  max-width: 353px;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    margin: 30px auto 0;
  }
`;

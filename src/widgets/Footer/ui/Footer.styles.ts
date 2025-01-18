import styled from 'styled-components';

export const FooterLine = styled('div')`
  /* margin-top: 30px; */
  width: 90%;
  /* margin: 0 auto; */
  height: 1px;
  background-color: #dee0e1;
`;

export const FooterContainer = styled('footer')`
  margin-top: 60px;
  display: flex;
  padding-bottom: clamp(
    1.875rem,
    1.319rem + 2.78vw,
    3.75rem
  ); // from 30px to 60px vp from 320 to 1400
  justify-content: space-between;
  gap: clamp(1.875rem, -15.625rem + 28vw, 6.25rem); // from 30px to 100px vp from 1000 to 1250
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const ListBlockContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
  width: 100%;
  @media (max-width: 720px) {
    grid-template-columns: repeat(2, auto);
    gap: 20px 40px;
    & > *:nth-of-type(3) {
      order: 2;
    }
    & > *:nth-of-type(2) {
      order: 3;
    }
  }
`;

export const ListBlock = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > :nth-of-type(1) {
    margin-bottom: 4px;
  }
`;

export const ContactsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 253px;
  img {
    width: 150px;
  }
  @media (max-width: 1000px) {
    min-width: 100%;
    gap: 20px;
  }
`;

export const SocialIconsContainer = styled('div')`
  display: flex;
  gap: 30px;
  img,
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ContactItem = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 11px;

  div {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

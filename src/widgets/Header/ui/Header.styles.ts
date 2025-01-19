import styled from '@mui/material/styles/styled';

export const HeaderBase = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  height: 50px;
  padding: 0 15px;

  img {
    width: 100px;
  }
`;
export const Menu = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #000;
    transition: all 0.3s ease;
  }
  &.open span:nth-of-type(1) {
    transform: rotate(-45deg);
    margin-top: 14px;
  }
  &.open span:nth-of-type(2) {
    opacity: 0;
  }
  &.open span:nth-of-type(3) {
    transform: rotate(45deg);
    margin-top: -14px;
    margin-bottom: 14px;
  }
`;

export const HeaderContainer = styled('header')`
  width: 100%;
  /* height: 95px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  /* display: none; */
  a {
    color: #000000;
  }
  @media (max-width: 970px) {
    width: 300px;
    height: 100vh;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    box-shadow: none;
    padding: 0 100px 0 30px;
  }
`;

export const HeaderContent = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 37px;
  padding: 26px 0;
  @media (max-width: 1500px) {
    gap: 20px;
    padding: 18px 0;
  }
  @media (max-width: 970px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const ProfileContainer = styled('div')`
  display: flex;
  align-items: center;
  @media (max-width: 970px) {
    flex-direction: column;
    align-items: start;
    align-self: end;
    margin-top: auto;
    margin-bottom: 50px;
  }
`;

export const LogoBlock = styled('div')`
  display: flex;
  align-items: center;
  gap: 60px;
  @media (max-width: 1500px) {
    gap: 30px;
    img {
      width: 120px;
    }
  }
  @media (max-width: 1180px) {
    gap: 20px;
  }
  @media (max-width: 970px) {
    flex-direction: column;
    gap: 30px;
    align-items: start;
    img {
      width: 130px;
    }
    button {
      width: 130px;
    }
  }
`;

export const NavBlock = styled('nav')`
  display: flex;
  align-items: center;
  gap: 45px;
  @media (max-width: 1500px) {
    gap: 20px;
  }
  @media (max-width: 1180px) {
    gap: 10px;
  }
  @media (max-width: 970px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;

export const Text = styled('p')`
  font-size: 16px;
  @media (max-width: 1500px) {
    font-size: 14px;
  }
  @media (max-width: 970px) {
    font-size: 16px;
  }
`;

export const ProfileBlock = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 22px;

  cursor: pointer;
  @media (max-width: 1500px) {
    margin-left: 10px;
    gap: 5px;
  }
  @media (max-width: 1180px) {
    p {
      display: none;
    }
  }
  @media (max-width: 970px) {
    margin-left: 0;
    margin-top: 20px;
    p {
      display: block;
      /* font-size: 14px; */
    }
    div {
      display: none;
    }
  }
`;
export const PhoneBlock = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  @media (max-width: 1180px) {
    svg {
      display: none;
    }
  }
`;

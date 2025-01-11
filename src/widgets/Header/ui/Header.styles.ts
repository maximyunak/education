import styled from '@mui/material/styles/styled';

export const HeaderContainer = styled('header')`
  width: 100%;
  height: 95px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  a {
    color: #000000;
  }
`;

export const HeaderContent = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 37px;
`;

export const ProfileContainer = styled('div')`
  display: flex;
  align-items: center;
`;

export const LogoBlock = styled('div')`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const NavBlock = styled('nav')`
  display: flex;
  align-items: center;
  gap: 45px;
`;

export const Text = styled('p')`
  font-size: 16px;
`;

export const ProfileBlock = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 22px;
  cursor: pointer;
`;
export const PhoneBlock = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

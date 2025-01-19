import styled from '@mui/material/styles/styled';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled('div')`
  min-width: 100vw;
  min-height: 100vh;
  padding: 0 15px;
`;

export const AuthLayout = () => {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
};

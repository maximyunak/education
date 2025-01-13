import styled from '@mui/material/styles/styled';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/Header';

const LayoutContainer = styled('div')`
  min-width: 100vw;
  min-height: 100vh;
`;

export const Container = styled('div')`
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      {/* <Container> */}
      {/* <main> */}
      <Outlet />
      {/* </main> */}
      {/* </Container> */}
    </LayoutContainer>
  );
};

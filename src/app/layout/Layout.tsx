import styled from '@mui/material/styles/styled';
import { Outlet } from 'react-router-dom';
import { Footer } from 'widgets/Footer';
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

export const BlueContainer = styled('div')`
  background-color: #f6f8f9;
`;

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <BlueContainer>
        <Container>
          <Footer />
        </Container>
      </BlueContainer>
    </LayoutContainer>
  );
};

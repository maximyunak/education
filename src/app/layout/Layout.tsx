import styled from '@mui/material/styles/styled';
import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/Header';

interface LayoutProps {
  children?: ReactNode;
}

const LayoutContainer = styled('div')`
  min-width: 100vw;
  min-height: 100vh;
  main {
    padding: 0 15px;
  }
`;

const Container = styled('div')`
  max-width: 1260px;
  margin: 0 auto;
`;

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <LayoutContainer>
      <Header />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </LayoutContainer>
  );
};

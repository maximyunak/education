import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

interface LayoutProps {
  children?: ReactNode;
}

const LayoutContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding: 0 15px;
`;

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <LayoutContainer>
      <div className="container flex gap-4 justify-center">
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </LayoutContainer>
  );
};

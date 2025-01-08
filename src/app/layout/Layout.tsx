import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className={`min-w-screen min-h-screen transition text-xl`}>
      <div className="container flex gap-4 justify-center">
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

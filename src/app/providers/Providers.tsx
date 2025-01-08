import { setupStore } from '../store';
import React from 'react';
import { Provider } from 'react-redux';

interface ProvidersProps {
  children: JSX.Element;
}

const store = setupStore();

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

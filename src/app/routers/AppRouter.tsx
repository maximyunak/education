import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import { HomePage } from 'pages/HomePage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

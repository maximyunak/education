import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import { RegistrationPage, LoginPage, HomePage } from 'pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

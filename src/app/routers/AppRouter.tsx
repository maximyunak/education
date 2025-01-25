import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthLayout, Layout } from '../layout';
import { RegistrationPage, LoginPage, HomePage } from 'pages';
import { VideoCatalogPage } from 'pages/VideoCatalogPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="video-lectures" element={<VideoCatalogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

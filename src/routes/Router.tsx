import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import BaseLayout from '@pages/BaseLayout';
import InitialPage from '@pages/InitialPage';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';
import VacanciesPage from '@pages/VacanciesPage';

const Router = () => (
  <BrowserRouter>
    <BaseLayout>
      <Routes>
        <Route element={<InitialPage />} index />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="vacancies" element={<VacanciesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BaseLayout>
  </BrowserRouter>
);

export default Router;

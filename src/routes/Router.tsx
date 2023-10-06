import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import BaseLayout from '@pages/BaseLayout';
import InitialPage from '@pages/InitialPage';

const Router = () => (
  <BrowserRouter>
    <BaseLayout>
      <Routes>
        <Route element={<InitialPage />} index />
        <Route path="login" element={<div>Login Page</div>} />
        <Route path="register" element={<div>Register Page</div>} />
        <Route path="vacancies" element={<div>Vacancies Page</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BaseLayout>
  </BrowserRouter>
);

export default Router;

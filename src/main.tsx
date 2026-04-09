import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.tsx';
import AdminLogin from './admin/AdminLogin.tsx';
import AdminLayout from './admin/AdminLayout.tsx';
import AdminProducts from './admin/AdminProducts.tsx';
import AdminCategories from './admin/AdminCategories.tsx';
import AdminCompany from './admin/AdminCompany.tsx';
import AdminSettings from './admin/AdminSettings.tsx';
import RequireAuth from './admin/RequireAuth.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<RequireAuth><AdminLayout /></RequireAuth>}>
          <Route index element={<Navigate to="products" replace />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="company" element={<AdminCompany />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../services/api';

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
};

export default RequireAuth;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    // User is not authenticated
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // User does not have the required role
    return <Navigate to="/unauthorized" replace />;
  }

  // User is authorized
  return <Outlet />;
};

export default ProtectedRoute;

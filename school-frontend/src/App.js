import "../src/App.css"

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Homepage from './components/HomePage';
import LoginPage from './components/LoginPage';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import AdminDashboard from './components/AdminDashboard';
import Unauthorized from './components/Unauthorized';
import RoleBasedContent from './components/RoleBasedContent';

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Routes */}
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher-dashboard"
          element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Role-Based Content */}
        <Route path="/dashboard" element={<RoleBasedContent />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

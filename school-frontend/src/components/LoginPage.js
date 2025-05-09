// src/components/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Determine role based on email
    let role = '';
    if (email.endsWith('@student.com')) {
      role = 'student';
    } else if (email.endsWith('@teacher.com')) {
      role = 'teacher';
    } else if (email.endsWith('@admin.com')) {
      role = 'admin';
    } else {
      role = 'guest';
    }

    // Call login function with email and role
    login(email, role);

    // Navigate to the appropriate dashboard
    if (role === 'student') {
      navigate('/student-dashboard');
    } else if (role === 'teacher') {
      navigate('/teacher-dashboard');
    } else if (role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;

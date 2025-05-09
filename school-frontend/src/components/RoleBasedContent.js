import React from 'react';
import { useAuth } from '../context/AuthContext';

const RoleBasedContent  = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Please log in to access content.</p>;
  }

  switch (user.role) {
    case 'admin':
      return <p>Welcome, Admin! You have full access.</p>;
    case 'teacher':
      return <p>Welcome, Teacher! You can manage courses and students.</p>;
    case 'student':
      return <p>Welcome, Student! You can view and enroll in courses.</p>;
    default:
      return <p>Welcome! Please log in to access more features.</p>;
  }
};

export default RoleBasedContent ;

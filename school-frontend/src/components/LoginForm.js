// src/components/LoginForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    login(data.email);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

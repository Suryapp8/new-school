// src/components/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div>
    <h1>Welcome to the Homepage</h1>
    <Link to="/login">Go to Login</Link>
  </div>
);

export default Homepage;

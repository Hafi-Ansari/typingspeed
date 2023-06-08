// Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout().then(() => {
      // Redirect to the login page after logout
      navigate('/login');
    });
  }, [logout, navigate]);

  // Return a message to the user
  return <h1>Logging out...</h1>;
}


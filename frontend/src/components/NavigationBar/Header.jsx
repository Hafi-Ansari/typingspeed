import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="header">
    <h1>Typing Speed</h1>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/typingtest">Typing Test</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  </header>
);

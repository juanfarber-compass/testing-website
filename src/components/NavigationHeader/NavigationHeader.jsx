// src/components/NavigationHeader.jsx

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationHeader.css';

const NavigationHeader = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/testing-website" className="logo">
          Home
        </Link>
        <div className="nav-links">
          <NavLink to="/testing-website/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
          <NavLink to="/testing-website/properties" className="nav-link" activeClassName="active">
            Properties By Internal ID
          </NavLink>
        </div>
        <NavLink to="/testing-website/login" className="nav-link" activeClassName="active">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default NavigationHeader;

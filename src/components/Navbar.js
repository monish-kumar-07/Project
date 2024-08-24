import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/orders">Order Management</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

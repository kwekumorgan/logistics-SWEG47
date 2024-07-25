
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="ribbon">
      <Link to="/">Home</Link>
      <Link to="/about">Product</Link>
      <Link to="/research">Carts</Link>
      <Link to="/undergraduate">Shipping</Link>
      <Link to="/graduate">About</Link>
    </nav>
  );
};

export default Navbar;

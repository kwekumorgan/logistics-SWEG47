import React from 'react';
import './Navbar.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';  // Import Font Awesome icons

const Navbar = () => {
  return (
    <nav className="ribbon">
      <div className="navbar-left">
        <div className="contact-info">
          <FaEnvelope className="icon" />
          <span>contact@kashlogistics.com</span>
          <span className="vertical-line">|</span>
          <FaPhone className="icon" />
          <span>+233 501 382 035</span>
        </div>
      </div>
      <h1>KASH LOGISTICS</h1>
    </nav>
  );
};

export default Navbar;

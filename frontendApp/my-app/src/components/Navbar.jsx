import React from 'react';
import './Navbar.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';  // Import Font Awesome icons

const Navbar = () => {
  return (
    <nav className="ribbon">
      <div className="navbar-left">
        <div className="contact-info">
          <a href="mailto:contact@kashlogistics.com" className="contact-link">
            <FaEnvelope className="icon" />
            <span>contact@kashlogistics.com</span>
          </a>
          <span className="vertical-line">|</span>
          <div className="phone-info">
            <FaPhone className="icon" />
            <span>+233 501 382 035</span>
          </div>
        </div>
      </div>
      <h1>KASH LOGISTICS</h1>
    </nav>
  );
};

export default Navbar;

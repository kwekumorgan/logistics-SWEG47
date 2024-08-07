import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import facebookIcon from '../Media/fbook.jpg';
import instagramIcon from '../Media/instagram.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
      <div className="footer-content">
        <div className="contact-info">
          <p>Contact Us<br />
            Phone & Email<br />
            +233 501 382 035<br />
            +233 559 145 698<br />
            dcs@ug.edu.gh
          </p>
        </div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button" onClick={() => alert('Perform search operation')}>Search</button>
        </div>
      </div>
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
      &copy; 2023 Department of Computer Science, University of Ghana
    </footer>
  );
};

export default Footer;

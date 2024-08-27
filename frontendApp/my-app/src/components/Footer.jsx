import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import facebookIcon from '../Media/fbook.jpg';
import instagramIcon from '../Media/instagram.jpg';
import SearchIcon1 from '../Media/Search.png';

const Footer = () => {
  const handleSearch = () => {
    alert('Perform search operation');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

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
        <div className="footer-search-container">
          <input
            type="text"
            className="footer-search-input"
            placeholder="Search"
            onKeyPress={handleKeyPress}
          />
          <button className="footer-search-button" onClick={handleSearch}>
            <img src={SearchIcon1} alt="Search" />
          </button>
        </div>
      </div>
      <div className="footer-links">
        <Link to="/about">About</Link>
       
        <Link to="/contact">Contact</Link>
      </div>
      &copy; 2023, Kash Logistics
    </footer>
  );
};

export default Footer;

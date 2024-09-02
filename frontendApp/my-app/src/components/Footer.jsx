import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebookIcon from '../Media/fbook.jpg';
import instagramIcon from '../Media/instagram.jpg';
//import SearchIcon from '../Media/Search.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contact-info">
          <h3>ADDRESS:</h3>
          <p>Kash Logistics<br />
             +233 501 382 035<br />
             +233 559 145 698<br />
             Kashlogistics@gmail.com
          </p>
        </div>
        <div className="footer-account-links">
          <h3>ACCOUNT</h3>
          <ul>
          <li><Link to="/forgot-password">Recovery Password</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/register">Register</Link></li>
           
          </ul>
        </div>
        <div className="footer-links">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li><Link to="/customer-care">Customer Care</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h3>SUBSCRIBE TO OUR NEWSLETTER!</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
        <p>&copy; 2024, Kash Logistics</p>
      </div>
    </footer>
  );
};

export default Footer;


import { Link } from 'react-router-dom';
import './Header.css';
import KashLogo from '../Media/KASHLOGO1.jpg';
import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector('.header');
      const navbarHeight = document.querySelector('.ribbon').offsetHeight;
      if (window.scrollY > navbarHeight) {
        header.style.position = 'fixed';
        header.style.top = '0';
      } else {
        header.style.position = 'relative';
        header.style.top = '';
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className="header">
      <img src={KashLogo} height="80" alt="Department Of Computer Science" />
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/Carts">Carts</Link>
      <Link to="/About">About</Link>
      <Link to="/login"> {/* Update Sign In button to navigate to LoginRegister page */}
        <button>Sign In</button>
      </Link>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button" onClick={() => alert('Perform search operation')}>Search</button>
      </div>
    </header>
  );
};

export default Header;

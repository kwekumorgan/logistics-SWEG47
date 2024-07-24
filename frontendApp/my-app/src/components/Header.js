import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import KashLogo from '../Media/KASHLOGO1.jpg';

const Header = () => {
  return (
    <header className="header">
      <img src={KashLogo} height="80" alt="Department Of Computer Science" />
      <Link to="/events">Events</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/shipping">Shipping</Link>
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

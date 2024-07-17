
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import KashLogo from '../Media/KASHLOGO1.jpg';
const Header = () => {
  const displayAlert = () => {
    alert("Sign In");
  };

  return (
    <header className="header">
      <img src={KashLogo} height="80" alt="Department Of Computer Science" />
      <Link to="/Events">Events</Link>
      <Link to="/Inventory">Inventory</Link>
      <Link to="/Categories">Categories</Link>
      <Link to="/Shipping">Shipping</Link>
      <button onClick={displayAlert}>Sign In</button>
    
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button" onClick={() => alert('Perform search operation')}>Search</button>
      </div>
    </header>
  );
};

export default Header;

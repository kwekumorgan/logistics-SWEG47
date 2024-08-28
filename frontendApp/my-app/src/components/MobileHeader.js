import React from 'react';
import './MobileHeader.css'; // Separate CSS file for mobile header
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import SearchIcon from '../Media/Search.png';
import CartIcon from '../Media/carts1.png';
import KashLogo from '../Media/KASHLOGO1.jpg';

const MobileHeader = () => {
  const { cart } = useCart();

  // Handle search functionality (currently just alerts)
  const handleSearch = () => {
    alert('Perform search operation');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Calculate total quantity in the cart
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="mobile-header-container">
      <div className="container">
        <span className="textB"><img src={KashLogo} height="80" alt="Department Of Computer Science" /></span>
        <Link to="/Carts" className="cart-text-link">
          <img src={CartIcon} alt="Cart" className="cart-icon" />
          {totalQuantity > 0 && (
            <span className="cart-count1">{totalQuantity}</span>
          )}
        </Link>
      </div>

      <div className="textbox">
        <input type="text"
        onKeyPress={handleKeyPress}
         placeholder="Search Products" />
        <img
          src={SearchIcon}
          alt="Search"
          className="icon left"
          onClick={handleSearch}
        />
      </div>





      <div className="header-menu">
        <Link to="/" className="header-menu-item">Home</Link>
        <Link to="/login" className="header-menu-item">Sign In</Link>
        <Link to="/About" className="header-menu-item">About</Link>
      </div>
    </div>
  );
};

export default MobileHeader;

import React, { useEffect } from 'react';
import './MobileHeader.css'; // Separate CSS file for mobile header
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import SearchIcon2 from '../Media/Search.png';
import CartIcon from '../Media/carts1.png';
import KashLogo from '../Media/KASHLOGO1.jpg';

const MobileHeader = () => {
  const { cart } = useCart();

  useEffect(() => {
    function handleScroll() {
      const mobileheader = document.querySelector('.mobile-header-container'); // Updated to correct class
      const navbarHeight = document.querySelector('.ribbon')?.offsetHeight || 0;
      if (window.scrollY > navbarHeight) {
        mobileheader.style.position = 'fixed';
        mobileheader.style.top = '0';
        mobileheader.style.zIndex = '1000'; // Ensure it stays on top
        mobileheader.style.width = '100%'; // Ensure it doesn't shrink when fixed
      } else {
        mobileheader.style.position = 'relative';
        mobileheader.style.top = '';
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle search functionality (currently just alerts)
  const handleSearch1 = () => {
    alert('Perform search operation');
  };

  const handleKeyPress1 = (event) => {
    if (event.key === 'Enter') {
      handleSearch1();
    }
  };

  // Calculate total quantity in the cart
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="mobile-header-container">
      <div className="container">
        <span className="textB"><img src={KashLogo} height="80" alt="Kash Logo" /></span>
        <Link to="/Carts" className="cart-text-link">
          <img src={CartIcon} alt="Cart" className="cart-icon" />
          {totalQuantity > 0 && (
            <span className="cart-count1">{totalQuantity}</span>
          )}
        </Link>
      </div>

      <div className="textbox">
        <input
          type="text"
          className="search-input"
          placeholder="Search Products"
          onKeyPress={handleKeyPress1}
        />
        <img
          src={SearchIcon2}
          alt="Search"
          className="icon left"
          onClick={handleSearch1}
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

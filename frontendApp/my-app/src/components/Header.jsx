import { Link } from 'react-router-dom';
import './Header.css';
import KashLogo from '../Media/KASHLOGO1.jpg';
import SearchIcon from '../Media/Search.png';
import CartIcon from '../Media/carts1.png';
import React, { useEffect } from 'react';
import { useCart } from '../components/CartContext';

const Header = () => {
  const { cart } = useCart();

  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector('.header');
      if (window.scrollY > 0) {
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

  const handleSearch = () => {
    alert('Perform search operation');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Calculate the total quantity in the cart
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <img src={KashLogo} height="80" alt="Department Of Computer Science" />
      <Link to="/">Home</Link>
      

      <Link to="/login">
        <button className="sign-in-button">Sign In</button>
      </Link>
      <div className="cart-container"><Link to="/Carts" className="cart-text-link">
        <img src={CartIcon} alt="Cart" className="cart-icon" />
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}</span>
        )}
        Carts
      </Link></div>
      <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            onKeyPress={handleKeyPress}
          />
          <button className="search-button" onClick={handleSearch}>
            <img src={SearchIcon} alt="Search" />
          </button>
        </div>
     
    </header>
  );
};

export default Header;

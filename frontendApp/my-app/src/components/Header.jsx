import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import './Header.css';
import KashLogo from '../Media/KASHLOGO1.jpg';
import SearchIcon from '../Media/Search.png';
import CartIcon1 from '../Media/carts1.png';
;


const Header = () => {
  const { cart } = useCart();
  

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
    <header className="header">
      <img src={KashLogo} height="80" alt="Kash logo" />
      <Link to="/">Home</Link>

      <Link to="/login">
        <button className="sign-in-button">Sign In</button>
      </Link>


      
      
      <div className='cart-container'>  <Link to="/Carts" className="cart-text-link">
        Carts
        <img src={CartIcon1} alt="Cart" className="cart-icon1" />
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}
         
          </span>
          
        )}
        
       
      </Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onKeyPress={handleKeyPress}
        />
        <img
          src={SearchIcon}
          alt="Search"
          className="search-button"
          onClick={handleSearch}
        />
      </div>
      
    </header>
  );
};

export default Header;

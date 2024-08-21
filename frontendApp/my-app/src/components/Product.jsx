import React, { useEffect } from 'react';
import product_card from "../components/ProductData";
import { Link } from 'react-router-dom'; 
import { useCart } from '../components/CartContext'; 
import "./Header.css"; 
import KashLogo from '../Media/KASHLOGO1.jpg';
import "./Product.module.css";
import SearchIcon from '../Media/Search.png';

const Product = () => {
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

  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    console.log('Adding to cart:', item);
    addToCart(item);
  };

  const listItems = product_card.map((item) =>
    <div className="product-card" key={item.id}>
      <div className="product-card-img">
        <img src={item.thumb} alt={item.product_name} />
      </div>
      <div className="product-card-header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">{item.price}<span>{item.currency}</span></p>
        <div className="product-btn" onClick={() => handleAddToCart(item)}>Add to cart</div>
      </div>
    </div>
  );

  return (
    <div className="product-page">
      <header className="header">
        <img src={KashLogo} height="80" alt="Department Of Computer Science" />
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/Carts">Carts</Link>
        <Link to="/About">About</Link>
        <Link to="/login">
          <button className="sign-in-button">Sign In</button>
        </Link>
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
      <div className="main-content">
        <div className="card-container">
          {listItems}
        </div>
        <div className="vertical-text-box">
          <h2>Vertical Text Box</h2>
          <p>Some text here...</p>
        </div>
      </div>
      
    </div>
  );
}

export default Product;

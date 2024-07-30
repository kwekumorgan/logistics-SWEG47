import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { useCart } from '../components/CartContext'; 
import "./Header.css"; 
import KashLogo from '../Media/KASHLOGO1.jpg';
import "./Carts.css"; 

const Carts = () => {
  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector('.header');
      const navbarHeight = document.querySelector('.ribbon')?.offsetHeight || 0;
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

  const { cart, removeFromCart } = useCart();

  return (
    <div className="main_content">
      <header className="header">
        <img src={KashLogo} height="80" alt="Department Of Computer Science" />
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/about">About</Link>
        <Link to="/login">
          <button>Sign In</button>
        </Link>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button" onClick={() => alert('Perform search operation')}>Search</button>
        </div>
      </header>

      <div className="card-container">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div className="card" key={item.id}>
              <div className="card_img">
                <img src={item.thumb} alt={item.product_name} />
              </div>
              <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn" onClick={() => removeFromCart(item.id)}>Remove</div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Checkout Button */}
      <div className="checkout-container">
        <Link to="/payment">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Carts;

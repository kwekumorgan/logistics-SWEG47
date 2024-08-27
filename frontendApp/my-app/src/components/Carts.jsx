import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import "./Header.css";
import KashLogo from '../Media/KASHLOGO1.jpg';
import "./Carts.css";
import SearchIcon from '../Media/Search.png';
import product_data from '../components/product_data';
import CartIcon from '../Media/carts1.png';

const regionLocations = {
  'Greater Accra': ['Accra', 'Tema', 'Madina'],
  'Ashanti': ['Kumasi', 'Obuasi'],
  'Central': ['Cape Coast', 'Winneba'],
  'Eastern': ['Koforidua', 'Nkawkaw'],
  'Western': ['Takoradi', 'Sekondi'],
  'Northern': ['Tamale', 'Yendi'],
  'Volta': ['Ho', 'Keta'],
  'Upper East': ['Bolgatanga', 'Navrongo'],
  'Upper West': ['Wa', 'Nadowli'],
  'Bono': ['Sunyani', 'Berekum'],
  'Bono East': ['Techiman', 'Kintampo'],
  'Ahafo': ['Goaso', 'Bechem'],
  'Western North': ['Sefwi Wiawso', 'Bibiani'],
  'Oti': ['Dambai', 'Nkwanta'],
  'North East': ['Nalerigu', 'Walewale'],
  'Savannah': ['Damongo', 'Salaga']
};

const Carts = () => {
  
  const { cart, removeFromCart, changeQuantity } = useCart();
  const [locations, setLocations] = useState([]);

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setLocations(regionLocations[region] || []);
  };

  const handleSearch = () => {
    alert('Perform search operation');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Get categories of items in the cart
  const cartCategories = [...new Set(cart.map(item => item.category))];

  // Determine similar products to show based on the cart content
  const similarProducts = Object.values(product_data).flat().filter(product => {
    if (cartCategories.length === 0) {
      return true; // If cart is empty, show all products
    }
    return cartCategories.includes(product.category); // Show products from the same categories
  });


  // Calculate total quantity in the cart

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <div className="main_content-custom">
      <header className="header">
      <img src={KashLogo} height="80" alt="Department Of Computer Science" />
      <Link to="/">Home</Link>

      <Link to="/login">
        <button className="sign-in-button">Sign In</button>
      </Link>

      <div className='cart-container'> <Link to="/Carts" className="cart-text-link">
       <header className="header">
      <img src={KashLogo} height="80" alt="Department Of Computer Science" />
      <Link to="/">Home</Link>
      
      <Link to="/About">About</Link>
      <Link to="/login">
        <button className="sign-in-button">Sign In</button>
      </Link>
      <div className="cart-container"><Link to="/Carts" className="cart-text-link">

        <img src={CartIcon} alt="Cart" className="cart-icon" />
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}</span>
        )}
        Carts

      </Link>
      </div>
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


      <div className="cart-content-custom">
        <div className="card-container-custom">
          {cart.length === 0 ? (
            <p1>Your cart is empty</p1>
          ) : (
            cart.map((item, index) => (
              <div className="card-custom" key={item.id}>
                <div className="card_img-custom">
                  <img src={item.thumb} alt={item.product_name} />
                  <div className="btn-custom" onClick={() => removeFromCart(item.id)}>Remove</div>
                </div>
                <div className="card_header-custom">
                  <h2>{item.product_name}</h2>
                  <p>{item.description}</p>
                  <p className="price">{item.price}<span>{item.currency}</span></p>
                  <div className="quantity-control">
                    <button onClick={() => changeQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => changeQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="summary-delivery-wrapper">
          <div className="delivery-details-custom">
            <h3>DELIVERY</h3>
            <hr />
            <select className="dropdown-region" onChange={handleRegionChange}>
              <option value="" disabled>Select Region</option>
              {Object.keys(regionLocations).map((region) => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>

            <select className="dropdown-location">
              <option value="" disabled>Select Location</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            <div className="delivery-fee">
              <span>Delivery Fee</span>
              <span>10 GHC</span>
            </div>
            <p>Estimated delivery: 3-5 business days</p>
          </div>

          <div className="cart-summary-custom">
            <h3>CART SUMMARY</h3>
            <hr />
            <div className="summary-details">
              <span>Subtotal</span>
              <span>{getSubtotal().toFixed(2)} GHC</span>
            </div>
            <Link to="/payment">
              <button className="checkout-btn-custom">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="cart-content-custom">
        <div className="similar-products-section">
          <h3>Items You May Like</h3>
          <div className="similar-products-grid">
            {similarProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="similar-product-card">
                <img src={product.thumb} alt={product.product_name} />
                <h4>{product.product_name}</h4>
                <p>{product.currency}{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;

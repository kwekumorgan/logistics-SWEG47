import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import "./Header.css";
import "./Carts.css";
import product_data from '../components/product_data';
import MobileHeader from '../components/MobileHeader';
import Header from '../components/Header'

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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    useEffect(() => {
      function handleScroll() {
        const header = document.querySelector('.header');
        const navbarHeight = document.querySelector('.ribbon')?.offsetHeight || 0; // Safe navigation with optional chaining
    
        if (header) {
          if (window.scrollY > navbarHeight) {
            header.classList.add('fixed-header');
          } else {
            header.classList.remove('fixed-header');
          }
        }
      }
    
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    

  
  

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setLocations(regionLocations[region] || []);
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

  
  return (
    <div>
    {isMobile ? <MobileHeader /> : <Header />}
    <div className="main_content-custom">
       

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
    </div>
  );
};

export default Carts;

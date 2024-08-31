import React, { useEffect } from 'react';
import './ProductDetailPage.css';
import { useCart } from './CartContext';
import { useParams, Link } from 'react-router-dom';
import product_data from './product_data'; // Correct import
import './Header.css';
import KashLogo from '../Media/KASHLOGO1.jpg';
import SearchIcon from '../Media/Search.png';
import CartIcon from '../Media/carts1.png';


const ProductDetailPage = () => {
  const { cart } = useCart();
  const { addToCart } = useCart();
  const { id } = useParams();

  // Flattening the product array and finding the product by ID
  const allProducts = Object.values(product_data).flat();
  const product = allProducts.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (!product) return;

    // Example: Handle any DOM manipulation here, after the component has rendered
    const productImage = document.querySelector('.product-image img');
    if (productImage) {
      // Perform any necessary DOM manipulations safely
    }
  }, [product]);

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
  const handleAddToCart = (product, event) => {
    addToCart(product);
  
    const button = event.currentTarget;
    button.classList.add('clicked');
  
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 200); // The duration should match the CSS animation duration
  };


  

    // Calculate the total quantity in the cart
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  

  return (
    <div className="main_content1">
     <header className="header">
      <img src={KashLogo} height="80" alt="Department Of Computer Science" />
      <Link to="/">Home</Link>

      <Link to="/login">
        <button className="sign-in-button">Sign In</button>
      </Link>


      
      <Link to="/Carts">
        Carts
      </Link>
      <div className='cart-container'> <Link to="/Carts" className="cart-text-link">
        <img src={CartIcon} alt="Cart" className="cart-icon" />
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}</span>
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
        <button className="search-button" onClick={handleSearch}>
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>
      
    </header>
      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.thumb} alt={product.product_name} />
        </div>
        <div className="product-details">
          <h2>{product.product_name}</h2>
          <p className="product-price">{product.currency} {product.price}</p>
          <p className="product-description">{product.description}</p>
          <button 
  className="add-to-cart-btn" 
  onClick={(event) => handleAddToCart(product, event)}>
  Add to Cart
</button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

import React, { useEffect, useState } from 'react';
import './ProductDetailPage.css';
import { useCart } from './CartContext';
import { useParams } from 'react-router-dom';  // Added import for useParams
import product_data from './product_data';
import './Header.css';
import MobileHeader from '../components/MobileHeader';
import Header from '../components/Header';

const ProductDetailPage = () => {
  const { addToCart } = useCart(); // Removed the unused `cart` destructure
  const { id } = useParams(); // useParams to get the product ID from the URL
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
      const navbarHeight = document.querySelector('.ribbon')?.offsetHeight || 0;

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProducts = Object.values(product_data).flat();
  const product = allProducts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (!product) return;

    const productImage = document.querySelector('.product-image img');
    if (productImage) {
      // Perform any necessary DOM manipulations safely
    }
  }, [product]);

  const handleAddToCart = (product, event) => {
    addToCart(product);

    const button = event.currentTarget;
    button.classList.add('clicked');

    setTimeout(() => {
      button.classList.remove('clicked');
    }, 200);
  };

  return (
    <div>
      {isMobile ? <MobileHeader /> : <Header />}
      <div className="main_content1">
        <div className="product-detail-container">
          <div className="product-image">
            <img src={product.thumb} alt={product.product_name} />
          </div>
          <div className="product-details">
            <h2>{product.product_name}</h2>
            <p className="product-price">
              {product.currency} {product.price}
            </p>
            <p className="product-description">{product.description}</p>
            <button
              className="add-to-cart-btn"
              onClick={(event) => handleAddToCart(product, event)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

import React from 'react';
import product_data from '../components/product_data';
import './ProductsContainer.css';
import { useCart } from '../components/CartContext';

const ProductsContainer = () => {
  const { addToCart } = useCart();

  const allProducts = [
    ...product_data.boltSeals,
    ...product_data.cableSeals,
    ...product_data.plasticSeals,
  ];

  const handleAddToCart = (product, event) => {
    addToCart(product);
    const button = event.currentTarget;
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 200);
  };

  return (
    <div className="nd-container">
      <div className="featuredP-text">Featured Products</div>
      <div className="product-list">
        {allProducts.map((product) => (
          <div key={product.id} className="Products-container32">
            <img src={product.thumb} alt={product.product_name} className="image" />
            <div className="product-name text">{product.product_name}</div>
            <div className="product-description text">{product.description}</div>
            <div className="product-price text">{`${product.currency} ${product.price}`}</div>
            <button
              className="button32"
              onClick={(event) => handleAddToCart(product, event)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;

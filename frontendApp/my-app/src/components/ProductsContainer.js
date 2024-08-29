import React from 'react';
import product_data from '../components/product_data'; // Import product data
import './ProductsContainer.css'; // Ensure this file has the styling
import { useCart } from './CartContext'; // Import the useCart hook

const ProductsContainer = () => {
  const { addToCart } = useCart(); // Destructure addToCart from the CartContext

  // Combine all product categories into a single array
  const allProducts = [
    ...product_data.boltSeals,
    ...product_data.cableSeals,
    ...product_data.plasticSeals,
  ];

  // Handler to add the product to the cart
  const handleAddToCart = (product, event) => {
    addToCart(product);

    const button = event.currentTarget;
    button.classList.add('clicked');

    setTimeout(() => {
      button.classList.remove('clicked');
    }, 200); // The duration should match the CSS animation duration
  };

  return (
    <div className="nd-container">
      <div className="featuredP-text">Featured Products</div>
      <div className="product-list">
        {allProducts.map((product) => (
          <div key={product.id} className="Products-container">
            <img src={product.thumb} alt={product.product_name} className="image" />
            <div className="product-name text">{product.product_name}</div>
            <div className="product-description text">{product.description}</div>
            <div className="product-price text">{`${product.currency} ${product.price}`}</div>
            <button 
              className="button" 
              onClick={(event) => handleAddToCart(product, event)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;

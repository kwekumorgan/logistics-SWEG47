// src/components/ProductsContainer.jsx
import React from 'react';
import product_data from '../components/product_data'; // Import product data
import './ProductsContainer.css'; // Ensure this file has the styling

const ProductsContainer = () => {
  // Combine all product categories into a single array
  const allProducts = [
    ...product_data.boltSeals,
    ...product_data.cableSeals,
    ...product_data.plasticSeals,
  ];

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
            <button className="button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;

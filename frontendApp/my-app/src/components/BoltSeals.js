// BoltSeals.js
import React from 'react';
import { Swipeable } from 'react-swipeable'; // Or use react-slick
import './BoltSeals.css';

const BoltSeals = () => {
  const boltSeals = [
    // Extracted product data for Bolt Seals
  ];

  return (
    <div className="category-container">
      <h2>Bolt Seals</h2>
      <Swipeable className="swipe-container">
        {boltSeals.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumb} alt={product.product_name} />
            <div className="product-description">{product.product_name}</div>
            <div className="product-price">{product.currency} {product.price}</div>
          </div>
        ))}
      </Swipeable>
    </div>
  );
};

export default BoltSeals;

import React from 'react';
import './Product.css'; // Ensure your CSS handles the styling
import product_card from './product_data.jsx'; // Assuming PlasticSeals are part of the product data

const PlasticSeals = () => {
  const plasticSeals = product_card.filter(product => product.category === 'PlasticSeals');

  return (
    <div className="products-container">
      <h1>Plastic Seals</h1>
      <div className="text-box-container">
        {plasticSeals.map(product => (
          <div className="text-box" key={product.id}>
            <img src={product.thumb} alt={product.product_name} />
            <div className="product-description">{product.product_name}</div>
            <div className="product-price">{product.currency} {product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlasticSeals;

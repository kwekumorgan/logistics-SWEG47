import React from 'react';
import './TextBox.css';
import product_card from '../components/product_card'; // Import the product data
import { useNavigate } from 'react-router-dom';

const TextBox = () => {
  const navigate = useNavigate();

  const handleImageClick = (product) => {
    navigate(`/product/${product.id}`); // Navigate to the ProductDetailPage
  };

  return (
    <div className="text-box-container">
      {product_card.map(product => (
        <div className="text-box" key={product.id} onClick={() => handleImageClick(product)}>
          <img src={product.thumb} alt={product.product_name} />
          <div className="product-description">{product.product_name}</div>
          <div className="product-price">{product.currency} {product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default TextBox;

import React from 'react';
import './Product.css';
import product_data from './product_data.jsx'; // Import the product data
import { useNavigate } from 'react-router-dom';

const TextBox = () => {
  const navigate = useNavigate();

  const handleImageClick = (product) => {
    navigate(`/product/${product.id}`); // Navigate to the ProductDetailPage
  };

  // Combine all products from different categories into one array
  const combinedProducts = [
    ...product_data.boltSeals,
    ...product_data.cableSeals,
    ...product_data.plasticSeals,
  ];

  // Shuffle the combined products array
  const shuffledProducts = combinedProducts.sort(() => Math.random() - 0.5);

  return (
    <div className="text-box-container">
      <div className="category-products">
        {shuffledProducts.map(product => (
          <div className="text-box" key={product.id} onClick={() => handleImageClick(product)}>
            <img src={product.thumb} alt={product.product_name} />
            <div className="product-description">{product.product_name}</div>
            <div className="product-price">{product.currency} {product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextBox;

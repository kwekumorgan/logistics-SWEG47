import React from 'react';
import './Product.css';
import product_data from './product_data.jsx'; // Import the product data
import { useNavigate } from 'react-router-dom';

const TextBox = () => {
  const navigate = useNavigate();

  const handleImageClick = (product) => {
    navigate(`/product/${product.id}`); // Navigate to the ProductDetailPage
  };

  const renderCategory = (category) => (
    <div className="category-section">
      <h2>{category.name}</h2>
      <div className="category-products">
        {category.products.map(product => (
          <div className="text-box" key={product.id} onClick={() => handleImageClick(product)}>
            <img src={product.thumb} alt={product.product_name} />
            <div className="product-description">{product.product_name}</div>
            <div className="product-price">{product.currency} {product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="text-box-container">
      {renderCategory({  products: product_data.boltSeals })}
      {renderCategory({  products: product_data.cableSeals })}
      {renderCategory({  products: product_data.plasticSeals })}
    </div>
  );
};

export default TextBox;

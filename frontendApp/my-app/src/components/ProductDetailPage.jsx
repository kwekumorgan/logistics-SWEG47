import React from 'react';
import './ProductDetailPage.css';
import { useCart } from './CartContext';
import { useParams } from 'react-router-dom';
import product_card from '../components/product_card'; // Ensure correct path

const ProductDetailPage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = product_card.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found!</div>;

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.thumb} alt={product.description} />
      </div>
      <div className="product-details">
        <h2>{product.product_name}</h2>
        <p className="product-price">{product.currency} {product.price}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;

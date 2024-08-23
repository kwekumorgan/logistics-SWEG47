import React from 'react';
import './Product.css';
import p1 from '../Media/p1.jpg';
import p12 from '../Media/TRYB2.png';
import p7 from '../Media/PsSQ.jpg';
import p4 from '../Media/TRYB.png';
import p3 from '../Media/p3.jpg';

const TextBox = () => {
  return (
    <div className="text-box-container">
      
      <div className="text-box">
        <img src={p12} alt="Product 6" />
        <div className="product-description">Product 6</div>
      </div>
      <div className="text-box">
        <img src={p7} alt="Product 7" />
        <div className="product-description">Product 7</div>
      </div>
      <div className="text-box">
        <img src={p1} alt="Product 8" />
        <div className="product-description">Product 8</div>
      </div>
      <div className="text-box">
        <img src={p4} alt="Product 9" />
        <div className="product-description">Product 9</div>
      </div>
      <div className="text-box">
        <img src={p3} alt="Product 10" />
        <div className="product-description">Product 10</div>
      </div>
    </div>
  );
};

export default TextBox;

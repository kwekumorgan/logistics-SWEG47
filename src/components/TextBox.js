import React from 'react';
import './TextBox.css';
import p1 from '../Media/p1.jpg';
import p8 from '../Media/P8.jpg';
import p7 from '../Media/p7.jpg';
import p4 from '../Media/p4.jpg';
import p3 from '../Media/p3.jpg';

const TextBox = () => {
  return (
    <div className="text-box-container">
      <div className='Products'>
        <h1>Featured Products</h1>
      </div>
      <div className="text-box">
        <img src={p8} alt="Product 1" />
        <div className="product-description">Product 1</div>
      </div>
      <div className="text-box">
        <img src={p7} alt="Product 2" />
        <div className="product-description">Product 2</div>
      </div>
      <div className="text-box">
        <img src={p1} alt="Product 3" />
        <div className="product-description">Product 3</div>
      </div>
      <div className="text-box">
        <img src={p4} alt="Product 4" />
        <div className="product-description">Product 4</div>
      </div>
      <div className="text-box">
        <img src={p3} alt="Product 5" />
        <div className="product-description">Product 5</div>
      </div>
    </div>
  );
};

export default TextBox;

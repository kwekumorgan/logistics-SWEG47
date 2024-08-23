import React from 'react';
import './Product.css';
import BoltSeals from './BoltSeals';
import CableSeals from './CableSeals';
import PlasticSeals from './PlasticSeals';

const ProductPage = () => {
  return (
    <div className="product-page-container">
      <BoltSeals />
      <CableSeals />
      <PlasticSeals />
    </div>
  );
};

export default ProductPage;

// src/components/MobileTextBox.jsx
import React from 'react';
import './MobileTextBox.css'; // Ensure you create this CSS file
import BoltImage from '../Media/P8Q.jpg';
import PlasticImage from '../Media/p4Q.jpg';
import CableImage from '../Media/p7Q.jpg';
import ProductsContainer from './ProductsContainer'; // Import ProductsContainer

const MobileTextBox = () => {
  return (
    <div>
      <div className="container32">
        <div className="container32-text">Bolt Seals</div>
        <img
          src={BoltImage}
          alt="Bolt Seals Category"
          className="container32-image"
        />
      </div>

      <div className="container32">
        <div className="container32-text">Cable Seals</div>
        <img
          src={CableImage}
          alt="Cable Seals Category"
          className="container32-image"
        />
      </div>

      <div className="container32">
        <div className="container32-text">Plastic Seals</div>
        <img
          src={PlasticImage}
          alt="Plastic Seals Category"
          className="container32-image"
        />
      </div>

      <div className="nd-container">
        
        <ProductsContainer /> {/* Use ProductsContainer here */}
      </div>
    </div>
  );
};

export default MobileTextBox;

import React, { useRef } from 'react';
import './MobileHome.css'; // Create a separate CSS file for mobile styles
import MobileHeader from '../components/MobileHeader';
import MobileSlider from '../components/MobileSlider.js'; // Use only one instance of the slider
import MobileTextBox from '../components/MobileTextBox.js'; // Create mobile-specific TextBox component

const MobileHome = () => {
  const productSectionRef = useRef(null); // Create a ref for the product section

  const handleNavigateToProduct = () => {
    if (productSectionRef.current) {
      // Scroll to the element with a specific offset
      const offset = 150; // Adjust this value to set how much above or below the target element you want to scroll
      const elementPosition = productSectionRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="MobileHome">
      <MobileHeader />
      {/* Use only one slider component */}
      <MobileSlider onNavigateToProduct={handleNavigateToProduct} />
      <div className="mobile-products-container">
        <h1 className="mobile-products-title">Product Categories</h1>
        <MobileTextBox />
      </div>
    </div>
  );
};

export default MobileHome;

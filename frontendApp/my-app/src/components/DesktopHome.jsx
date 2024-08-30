import React, { useRef } from 'react';
import ImageSlider from './Slider';
import TextBox from './Product';
import DepartmentEvents from './Events';
import Header from './Header';
import './DesktopHome.css';

const Home = () => {
  const productSectionRef = useRef(null); // Create a ref for the product section

  const handleNavigateToProduct = () => {
    if (productSectionRef.current) {
      // Scroll to the element with a specific offset
      const offset = 150; // Adjust this value to set how much above or below the target element you want to scroll
      const elementPosition = productSectionRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };
  

  return (
    <div className='DesktopHome'>
      <Header />
      <ImageSlider onNavigateToProduct={handleNavigateToProduct} />
      <div ref={productSectionRef} className="products-container">
        <h1 className="products-title">Featured Products</h1>
        <TextBox />
      </div>
      <DepartmentEvents />
    </div>
  );
};

export default Home;

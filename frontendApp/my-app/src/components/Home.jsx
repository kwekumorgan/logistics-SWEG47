import React from 'react';
import ImageSlider from './Slider';
import TextBox from './Product';
import DepartmentEvents from './Events';
import Header from '../components/Header';
import './Home.css';


const Home = () => {
  
  return (
    <div>
      <Header />
      <ImageSlider />
      <div className="products-container">
        <h1 className="products-title">Featured Products</h1> {/* Apply the CSS class */}
        <TextBox />
      </div>
      
      <DepartmentEvents />
    </div>
  );
};

export default Home;

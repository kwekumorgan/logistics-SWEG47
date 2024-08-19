import React from 'react';
import ImageSlider from './Slider';
import TextBox from './TextBox';
import Grid from './Grid';
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
      <Grid />
      <DepartmentEvents />
    </div>
  );
};

export default Home;

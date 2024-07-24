import React from 'react';
import ImageSlider from './Slider';
import TextBox from './TextBox';
import Grid from './Grid';
import DepartmentEvents from './Events';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header/>
      <ImageSlider />
      <TextBox />
      <Grid />
      <DepartmentEvents />
    </div>
  );
};

export default Home;

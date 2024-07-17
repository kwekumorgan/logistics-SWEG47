import React from 'react';
import ImageSlider from './Slider';
import TextBox from './TextBox';
import Grid from './Grid';
import DepartmentEvents from './Events';

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <TextBox />
      <Grid />
      <DepartmentEvents />
    </div>
  );
};

export default Home;

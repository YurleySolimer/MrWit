import React from 'react';
import '../assets/styles/components/CircleCarousel.scss';

const CircleCarousel = ({ children, searchTerm }) => {
  return (
    <div className='CircleCarousel'>
      <div className='CircleCarousel__carousel'>
        {children}
        <h2 className='Search-Item'>{searchTerm}</h2>
      </div>
    </div>
  );
};

export default CircleCarousel;

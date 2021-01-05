import React from 'react';
import '../assets/styles/components/CircleCarousel.scss';

const CircleCarousel = ({ children }) => {
  return (
    <div className='CircleCarousel'>
      {children}
    </div>
  );
};

export default CircleCarousel;
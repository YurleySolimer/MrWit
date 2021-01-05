import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/SearchElements.scss';

const SearchElements = (link, imgSrc, title) => {
  return (
    <Link to={link}>
      <div className='SearchElements'>
        <div className='SearchElements__circle'>
          <img src={imgSrc} alt='icon' className='SearchElements__icon' />
        </div>
        <span className='SearchElements__title'>{title}</span>
      </div>
    </Link>
  );
};

export default SearchElements;

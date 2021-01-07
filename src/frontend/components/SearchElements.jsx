import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/SearchElements.scss';
import categoryIcon from '../assets/static/icons/category_ex.svg';

const SearchElements = ({ link, title, className }) => {
  return (
    <Link to={link} className={className}>
      <div className='SearchElements'>
        <div className='SearchElements__circle'>
          <img src={categoryIcon} alt='icon' className='SearchElements__icon' />
        </div>
        <span className='SearchElements__title'>{title}</span>
      </div>
    </Link>
  );
};

export default SearchElements;

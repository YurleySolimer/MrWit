import React from 'react';
import '../assets/styles/components/SearchElements.scss';
import categoryIcon from '../assets/static/icons/category_ex.svg';
import moreIcon from '../assets/static/icons/more.svg';

const SearchElements = ({ value, handler, title, more }) => {

  const handleHandler = () => {
    if (value === 'more') {
      handler();
    } else {
      handler(value);
    }
  };

  if (more) {
    return (
      <button onClick={handleHandler} type='button' className='SearchElements more'>
        <div className='SearchElements__circle'>
          <img src={moreIcon} alt='icon' className='SearchElements__icon' />
        </div>
        <span className='SearchElements__title'>{title}</span>
      </button>
    );
  }

  return (
    <button onClick={handleHandler} type='submit' className='SearchElements'>
      <div className='SearchElements__circle'>
        <img src={categoryIcon} alt='icon' className='SearchElements__icon' />
      </div>
      <span className='SearchElements__title'>{title}</span>
    </button>
  );
};

export default SearchElements;

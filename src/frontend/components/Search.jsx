import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <div className='Search'>
    <input type='text' placeholder='¿Qué necesitas?' className='Search__input' />
    <button type='submit' className='Search__submit'>
      <img src='../assets/static/icons/lupa.svg' alt='Buscador' className='Search__submit__img' />
    </button>
  </div>
);

export default Search;

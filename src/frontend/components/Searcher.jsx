import React from 'react';
import '../assets/styles/components/Searcher.scss';
import lupa from '../assets/static/icons/lupa.svg';

const Searcher = () => {
  return (
    <div className='Search'>
      <input type='text' placeholder='¿Qué necesitas?' className='Search__input' />
      <button type='submit' className='Search__submit'>
        <img src={lupa} alt='Buscador' />
      </button>
    </div>
  );
};

export default Searcher;

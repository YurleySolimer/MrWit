import React from 'react';
import '../assets/styles/components/Results.scss';
import icon from '../assets/static/symbol.png';

const Results = () => {
  return (
    <div className='Results'>
      <div className='Results__headlineSearch'>
        <span className='Results__headlineSearch__word'>Palabra buscada</span>
        <span className='Results__headlineSearch__type'>tipo de busqueda</span>
        <div className='Results__headlineSearch__search'>
          <img src={icon} alt='' className='icon' />
        </div>
      </div>
      <h3 className='Results__title'>Resultados</h3>
      <div className='Results__profiles'>
        <div className='Results__profiles__profile'>
          <img src='' alt='' className='profile__img' />
          <p className='profile__name'>Name</p>
          <p className='profile__title'>Title</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src='' alt='' className='profile__img' />
          <p className='profile__name'>Name</p>
          <p className='profile__title'>Title</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src='' alt='' className='profile__img' />
          <p className='profile__name'>Name</p>
          <p className='profile__title'>Title</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src='' alt='' className='profile__img' />
          <p className='profile__name'>Name</p>
          <p className='profile__title'>Title</p>
        </div>
      </div>
    </div>
  );
};

export default Results;

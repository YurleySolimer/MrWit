import React from 'react';
import '../assets/styles/components/Results.scss';
import prof1 from '../assets/static/profile_1.jpg';
import prof2 from '../assets/static/profile_2.jpg';
import prof3 from '../assets/static/profile_3.jpg';
import prof4 from '../assets/static/profile_4.jpg';

const Results = () => {
  return (
    <div className='Results'>
      <h3 className='Results__title'>Resultados</h3>
      <div className='Results__profiles'>
        <div className='Results__profiles__profile'>
          <img src={prof1} alt='' className='profile__img' />
          <p className='profile__name'>Rosalinda Mendoza</p>
          <p className='profile__title'>Digital Marketer</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src={prof3} alt='' className='profile__img' />
          <p className='profile__name'>Jhon Doe</p>
          <p className='profile__title'>Economist</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src={prof4} alt='' className='profile__img' />
          <p className='profile__name'>Carlos Peñuela</p>
          <p className='profile__title'>Accountant</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src={prof2} alt='' className='profile__img' />
          <p className='profile__name'>Lina Albornoz</p>
          <p className='profile__title'>UX Designer</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src={prof1} alt='' className='profile__img' />
          <p className='profile__name'>Rosalinda Mendoza</p>
          <p className='profile__title'>Digital Marketer</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src={prof3} alt='' className='profile__img' />
          <p className='profile__name'>Jhon Doe</p>
          <p className='profile__title'>Economist</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src={prof4} alt='' className='profile__img' />
          <p className='profile__name'>Carlos Peñuela</p>
          <p className='profile__title'>Accountant</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src={prof2} alt='' className='profile__img' />
          <p className='profile__name'>Lina Albornoz</p>
          <p className='profile__title'>UX Designer</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src={prof1} alt='' className='profile__img' />
          <p className='profile__name'>Rosalinda Mendoza</p>
          <p className='profile__title'>Digital Marketer</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src={prof3} alt='' className='profile__img' />
          <p className='profile__name'>Jhon Doe</p>
          <p className='profile__title'>Economist</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src={prof4} alt='' className='profile__img' />
          <p className='profile__name'>Carlos Peñuela</p>
          <p className='profile__title'>Accountant</p>
        </div>
        <div className='Results__profiles__profile'>
          <img src={prof2} alt='' className='profile__img' />
          <p className='profile__name'>Lina Albornoz</p>
          <p className='profile__title'>UX Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Results;

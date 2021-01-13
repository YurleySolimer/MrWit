import React from 'react';
import '../assets/styles/components/OtherResults.scss';
import minimal from '../assets/static/logo/mrwit-logo-minimal.png';
import noresults from '../assets/static/icons/noresults.svg';
import prof1 from '../assets/static/images/profile_1.jpg';
import prof2 from '../assets/static/images/profile_2.jpg';
import prof3 from '../assets/static/images/profile_3.jpg';
import prof4 from '../assets/static/images/profile_4.jpg';

const OtherResults = ({ category, top, results }) => {

  if (top && results) {

    return (
      <div className='OtherResults'>
        <div className='OtherResults__category'>
          <span className='OtherResults__category__name'>
            {category}
          </span>
          <img src={minimal} alt='profile' className='OtherResults__category__img' />
        </div>
        <div className='OtherResults__profiles'>
          <div className='OtherResults__profiles__profile'>
            <img src={prof1} alt='profile' className='profile__img' />
            <p className='profile__name'>Eva Lunger</p>
            <p className='profile__title'>Graphic Designer</p>
          </div>
          <div className='OtherResults__profiles__profile'>
            <img src={prof3} alt='profile' className='profile__img' />
            <p className='profile__name'>Adam Gray</p>
            <p className='profile__title'>Accountant</p>
          </div>
          <div className='OtherResults__profiles__profile'>
            <img src={prof2} alt='profile' className='profile__img' />
            <p className='profile__name'>Elisa Graham</p>
            <p className='profile__title'>Attorney</p>
          </div>
          <div className='OtherResults__profiles__profile'>
            <img src={prof4} alt='profile' className='profile__img' />
            <p className='profile__name'>Jhon Hancock</p>
            <p className='profile__title'>Creative Director</p>
          </div>
          <div className='OtherResults__profiles__profile'>
            <img src={prof1} alt='profile' className='profile__img' />
            <p className='profile__name'>Eva Lunger</p>
            <p className='profile__title'>Graphic Designer</p>
          </div>
          <div className='OtherResults__profiles__profile'>
            <img src={prof3} alt='profile' className='profile__img' />
            <p className='profile__name'>Adam Gray</p>
            <p className='profile__title'>Accountant</p>
          </div>
          <div className='OtherResults__profiles__profile'>
            <img src={prof2} alt='profile' className='profile__img' />
            <p className='profile__name'>Elisa Graham</p>
            <p className='profile__title'>Attorney</p>
          </div>
          <div className='OtherResults__profiles__profile'>
            <img src={prof4} alt='profile' className='profile__img' />
            <p className='profile__name'>Jhon Hancock</p>
            <p className='profile__title'>Creative Director</p>
          </div>
        </div>
      </div>
    );
  }

  if (results) {
    return (
      <div className='OtherResults'>
        <div className='OtherResults__category'>
          <span className='OtherResults__category__name'># </span>
          <span className='OtherResults__category__name'>{category}</span>
        </div>
        <div className='OtherResults__profiles'>
          <div className='OtherResults__profiles__profile'>
            <img src={prof1} alt='profile' className='profile__img' />
            <p className='profile__name'>Eva Lunger</p>
            <p className='profile__title'>Graphic Designer</p>
          </div>
          <div className='OtherResults__profiles__profile'>
            <img src={prof4} alt='profile' className='profile__img' />
            <p className='profile__name'>Jhon Hancock</p>
            <p className='profile__title'>Creative Director</p>
          </div>
          <div className='OtherResults__profiles__profile'>
            <img src={prof2} alt='profile' className='profile__img' />
            <p className='profile__name'>Elisa Graham</p>
            <p className='profile__title'>Attorney</p>
          </div>
          <div className='OtherResults__profiles__profile'>
            <img src={prof3} alt='profile' className='profile__img' />
            <p className='profile__name'>Adam Gray</p>
            <p className='profile__title'>Accountant</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='OtherResults'>
      <div className='OtherResults__category'>
        <span className='OtherResults__category__name'># </span>
        <span className='OtherResults__category__name'>{category}</span>
      </div>
      <div className='OtherResults__noresults'>
        <img src={noresults} alt='no results icon' className='OtherResults__noresults__img' />
        <h2 className='OtherResults__noresults__text'>¡Vaya! En este momento no hay ninguno disponible, intenta más tarde.</h2>
      </div>
    </div>
  );

};

export default OtherResults;

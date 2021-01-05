import React from 'react';
import '../assets/styles/components/OtherResults.scss';
import minimal from '../assets/static/mrwit-logo-minimal.png';

const OtherResults = ({ category }) => {
  return (
    <div className='OtherResults'>
      <div className='OtherResults__category'>
        <span className='OtherResults__category__name'>{category}</span>
        <img src={minimal} alt='' className='OtherResults__category__img' />
      </div>
      <div className='OtherResults__profiles'>
        <div className='OtherResults__profiles__profile'>
          <img src='' alt='' className='profile__img' />
          <p className='profile__name'>Name</p>
          <p className='profile__title'>Title</p>
        </div>
        <div className='OtherResults__profiles__profile'>
          <img src='' alt='' className='profile__img' />
          <p className='profile__name'>Name</p>
          <p className='profile__title'>Title</p>
        </div>
        <div className='OtherResults__profiles__profile'>
          <img src='' alt='' className='profile__img' />
          <p className='profile__name'>Name</p>
          <p className='profile__title'>Title</p>
        </div>
        <div className='OtherResults__profiles__profile'>
          <img src='' alt='' className='profile__img' />
          <p className='profile__name'>Name</p>
          <p className='profile__title'>Title</p>
        </div>
        <div className='OtherResults__profiles__profile'>
          <img src='' alt='' className='profile__img' />
          <p className='profile__name'>Name</p>
          <p className='profile__title'>Title</p>
        </div>
      </div>
    </div>
  );
};

export default OtherResults;

import React from 'react';
import '../assets/styles/components/Feedback.scss';
import star from '../assets/static/icons/star.svg';
import profile from '../assets/static/images/profile_pic.png';

const Feedback = ({ name, country, description }) => {
  return (
    <div className='Feedback'>
      <div className='Feedback__left'>
        <img src={profile} alt='Profile pic' className='Feedback__left__img' />
        <div className='Feedback__left__score'>
          <img src={star} alt='star' className='star' />
          <img src={star} alt='star' className='star' />
          <img src={star} alt='star' className='star' />
          <img src={star} alt='star' className='star' />
          <img src={star} alt='star' className='star' />
        </div>
      </div>
      <div className='Feedback__right'>
        <h3 className='Feedback__right__name'>{name}</h3>
        <span className='Feedback__right__country'>{country}</span>
        <p className='Feedback__right__description'>{description}</p>
      </div>
    </div>
  );
};

export default Feedback;

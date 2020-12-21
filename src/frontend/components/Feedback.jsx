import React from 'react';
import '../assets/styles/components/Feedback.scss';

const Feedback = (name, country, description) => (
  <div className='Feedback'>
    <div className='Feedback__left'>
      <img src='' alt='' className='Feedback__left__img' />
      <div className='Feedback__left__score'>
        <img src='' alt='' className='star' />
        <img src='' alt='' className='star' />
        <img src='' alt='' className='star' />
        <img src='' alt='' className='star' />
        <img src='' alt='' className='star' />
      </div>
    </div>
    <div className='Feedback__right'>
      <h3 className='Feedback__right__name'>{name}</h3>
      <span className='Feedback__right__country'>{country}</span>
      <p className='Feedback__right__description'>{description}</p>
    </div>
  </div>
);

export default Feedback;

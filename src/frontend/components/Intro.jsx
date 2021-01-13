import React from 'react';
import '../assets/styles/components/Intro.scss';
import introBlue from '../assets/static/assets/intro-blue.svg';
import introRed from '../assets/static/assets/intro-red.svg';
import logo from '../assets/static/logo/mrwit-logo.png';

const Intro = () => {
  return (
    <div className='intro'>
      <img className='intro_red' src={introRed} alt='img' />
      <img className='intro_blue' src={introBlue} alt='img' />
      <img className='intro_logo' src={logo} alt='logo' />
    </div>
  );
};

export default Intro;

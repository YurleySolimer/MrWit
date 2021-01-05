import React from 'react';
import '../assets/styles/containers/Consultants.scss';
import background from '../assets/static/intro-yellow.svg';
import icon from '../assets/static/symbol.png';
import Results from '../components/Results';
import OtherResults from '../components/OtherResults';

const Consultants = () => (
  <div className='Consultants'>
    <img src={background} alt='' className='Consultants__background' />
    <Results />
    <span className='Consultants__others'>Otros consultores activos</span>
    <OtherResults />
    <img src={icon} alt='' className='Consultants__icon' />
  </div>
);

export default Consultants;

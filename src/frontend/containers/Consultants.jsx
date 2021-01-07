import React from 'react';
import '../assets/styles/containers/Consultants.scss';
import { Link } from 'react-router-dom';
import background from '../assets/static/intro-blue.svg';
import Results from '../components/Results';
import OtherResults from '../components/OtherResults';
import lupa from '../assets/static/icons/lupa.svg';
import darkArrow from '../assets/static/darkgrey_arrow.svg';
import lightArrow from '../assets/static/lightgrey_arrow.svg';

const Consultants = () => (
  <div className='Consultants'>
    <div className='Consultants__headlin'>
      <div className='Results__headlineSearch__word'>
        Palabra buscada
        <img src={darkArrow} alt='' />
      </div>
      <div className='Results__headlineSearch__type'>
        tipo de busqueda
        <img src={lightArrow} alt='' />
      </div>
      <div className='Results__headlineSearch__search'>
        <Link to='/buscar'>
          <img src={lupa} alt='' />
        </Link>
      </div>
    </div>
    <img src={background} alt='' className='Consultants__background' />
    <Results />
    <span className='Consultants__others'>Otros consultores activos</span>
    <OtherResults />
  </div>
);

export default Consultants;

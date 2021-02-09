import React from 'react';
import { Link } from 'react-router-dom';
import introYellow from '../assets/static/assets/intro-yellow.svg';
import journey from '../assets/static/assets/intro-journey.svg';
import '../assets/styles/components/SelectionIntro.scss';

const SelectionIntro = ({ children }) => {
  return (
    <div className='introSelect'>
      <img className='intro_yellow' src={introYellow} alt='img' />
      <img className='journey' src={journey} alt='img' />
      <div className='slogan'>
        <h2>Te conectamos con el consultor a tu medida y paga por minuto.</h2>
        <h3>Mr. Wit</h3>
      </div>
      {children}
      <p className='alreadyAccount'>
        ¿Ya tienes cuenta?
        <Link to='/login'><b>Inicia sesión</b></Link>
      </p>
    </div>
  );
};

export default SelectionIntro;

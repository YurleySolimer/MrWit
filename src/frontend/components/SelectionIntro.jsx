import React from 'react';
import introYellow from '../assets/static/assets/intro-yellow.svg';
import journey from '../assets/static/assets/intro-journey.svg';
import cube from '../assets/static/logo/symbol.png';
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
      <img className='cube' src={cube} alt='cube' />
      <p className='alreadyAccount'>
        ¿Ya tienes cuenta?
        <b>Inicia sesión</b>
      </p>
    </div>
  );
};

export default SelectionIntro;

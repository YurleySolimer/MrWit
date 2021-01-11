/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../assets/styles/containers/Login.scss';
import icon from '../assets/static/mrwit-logo.png';
import symbol from '../assets/static/symbol.png';
import yellow from '../assets/static/intro-yellow.svg';
import red from '../assets/static/intro-red.svg';
import facebook from '../assets/static/icons/facebook.svg';
import linkedin from '../assets/static/icons/linkedin.svg';
import google from '../assets/static/icons/google.svg';

const Login = () => {

  return (
    <section className='login'>
      <img src={icon} alt='icon' />
      <img src={symbol} alt='icon' />
      <img src={yellow} alt='icon' />
      <img src={red} alt='icon' />
      <h2>¡Un momento! Antes de pasar a la llamada debes registrarte</h2>
      <div className='Login__container'>
        <input type='text' name='name' id='name' placeholder='Nombre' className='Login__input' />
        <input type='text' name='id' id='id' placeholder='Cédula' className='Login__input' />
        <input type='text' name='tel' id='tel' placeholder='Teléfono' className='Login__input' />
        <input type='text' name='gender' id='gender' placeholder='Genero' className='Login__input' />
        <input type='text' name='country' id='country' placeholder='País' className='Login__input' />
        <button type='submit'>Registrarme</button>
        <button type='button' className='Login__facebook'>
          <img src={facebook} alt='icon' />
          Registrarme con Facebook
        </button>
        <button type='button' className='Login__linkedin'>
          <img src={linkedin} alt='icon' />
          Registrarme con LinkedIn
        </button>
        <button type='button' className='Login__google'>
          <img src={google} alt='icon' />
          Registrarme con Google
        </button>
        <span>¿Ya tienes cuenta? <Link>Inicia sesión</Link></span>
      </div>
    </section>
  );
};

export default Login;

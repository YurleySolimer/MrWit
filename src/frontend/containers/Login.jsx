/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/Login.scss';
import icon from '../assets/static/logo/mrwit-logo.png';
import symbol from '../assets/static/logo/symbol.png';
import yellow from '../assets/static/assets/intro-yellow.svg';
import blue from '../assets/static/assets/intro-blue.svg';
import facebook from '../assets/static/icons/facebook.svg';
import linkedin from '../assets/static/icons/linkedin.svg';
import google from '../assets/static/icons/google.svg';

const Login = () => {

  return (
    <section className='login'>
      <img className='login__logo' src={icon} alt='logo MrWit' />
      <img className='login__simbolo' src={symbol} alt='simbolo de MrWit' />
      <img className='login__yellow' src={yellow} alt='' />
      <img className='login__blue' src={blue} alt='' />
      <div className='login__container'>
        <h2>¡Hola! Bienvenido de nuevo, que bueno verte por aquí, antes de continuar recuerda identificarte.</h2>
        <input type='email' name='gender' id='gender' placeholder='Correo electrónico' className='signup__input' />
        <input type='password' name='country' id='country' placeholder='Contraseña' className='signup__input' />
        <button className='signup__submit signup__button' type='submit'>Iniciar sersión</button>
        <button type='button' className='signup__facebook signup__button'>
          <img src={facebook} alt='icon' />
          Registrarme con Facebook
        </button>
        <button type='button' className='signup__linkedin signup__button'>
          <img src={linkedin} alt='icon' />
          Registrarme con LinkedIn
        </button>
        <button type='button' className='signup__google signup__button'>
          <img src={google} alt='icon' />
          Registrarme con Google
        </button>
        <div className="login__footer">
          <span className='signup__link'>¿No tienes cuenta? <Link to='/signup'>Regístrate</Link></span>
          <span className='signup__link'>¿Quieres ser consultor? <Link to='/signup'>Volverme consultor</Link></span>
        </div>
      </div>
    </section>
  );
};

export default Login;

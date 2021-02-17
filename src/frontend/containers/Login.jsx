/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import statusReducers from '../reducers/statusReducers';
import * as actionsStatus from '../actions';
import '../assets/styles/containers/Login.scss';
import icon from '../assets/static/logo/mrwit-logo.png';
import background from '../assets/static/images/background1.png';
import facebook from '../assets/static/icons/facebook.svg';
import linkedin from '../assets/static/icons/linkedin.svg';
import google from '../assets/static/icons/google.svg';

const Login = (props) => {

  const { isOnline } = props;
  const history = useHistory();

  if (isOnline) {
    return (<Redirect to='/' />);
  };

  function handleConsultant() {
    props.setUser('consultant');
    history.push('/signup');
  }

  function handleLogin() {
    props.setUser('client');
    props.setIsOnline(true);
    history.push('/');
  }

  return (
    <section className='login'>
      <img className='background' src={background} alt='' />
      <div className='login__container'>
        <img className='login__logo' src={icon} alt='logo MrWit' />
        <h2>¡Hola! Bienvenido de nuevo, que bueno verte por aquí, antes de continuar recuerda identificarte.</h2>
        <input type='email' name='email' id='email' placeholder='Correo electrónico' className='signup__input' />
        <input type='password' name='country' id='country' placeholder='Contraseña' className='signup__input' />
        <button className='signup__submit signup__button' onClick={handleLogin} type='submit'>Iniciar sersión</button>
        <button type='button' onClick={handleLogin} className='signup__facebook signup__button'>
          <img src={facebook} alt='icon' />
          Registrarme con Facebook
        </button>
        <button type='button' onClick={handleLogin} className='signup__linkedin signup__button'>
          <img src={linkedin} alt='icon' />
          Registrarme con LinkedIn
        </button>
        <button type='button' onClick={handleLogin} className='signup__google signup__button'>
          <img src={google} alt='icon' />
          Registrarme con Google
        </button>
        <div className='login__footer'>
          <span className='signup__link'>
            ¿No tienes cuenta?
            <Link to='/signup'><b> Regístrate</b></Link>
          </span>
          <span className='signup__link'>
            ¿Quieres ser consultor?
            <button type='button' onClick={handleConsultant}>Volverme consultor</button>
          </span>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(Login);

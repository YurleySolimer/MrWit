/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-auth';
import MyFacebookButton from '../Tools/FacebookButton';
import { clearSearch, loginUser } from '../actions/mrwit';
import { setUser } from '../actions/index';
import Modal from '../portals/Modal';
import Loading from '../components/Loading';
import Fatal from '../components/Fatal';

import '../assets/styles/containers/Login.scss';
import icon from '../assets/static/logo/mrwit-logo.png';
import background from '../assets/static/images/background1.png';
import linkedin from '../assets/static/icons/linkedin.svg';
import google from '../assets/static/icons/google.svg';


const Login = (props) => {

  const { statusState, mrwit, setUser, loginUser, clear } = props;
  const { status } = statusState.user;
  const { consultant, isLoading } = mrwit;

  const history = useHistory();

  if (status) {
    return (<Redirect to='/' />);
  };

  function handleConsultant() {
    props.setUser({ rol: { name: 'consultant' } });
    history.push('/signup');
  }

  function handleClient() {
    props.setUser({ rol: { name: 'client' } });
  }

  function handleLogin() {
    const user = {
      email: email.value,
      password: password.value,
    };

    if (consultant) {
      loginUser(['/signin', user, '', setUser, '/recargar']);
    } else {
      loginUser(['/signin', user, '', setUser, '/']);
    }
  }

  const handleSignupGoogle = async (googleData) => {
    const data = JSON.stringify({ token: googleData.tokenId });
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const res = axios.post(`${axios.defaults.baseURL}/auth/google/login`,
      data,
      config)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        history.push('/');

      })
      .catch((e) => console.log(e));

  };

  const handleSignupFB = (response) => {
    //const data = JSON.stringify({ token: response.accessToken });
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const res = axios.post(`${axios.defaults.baseURL}/auth/facebook/login/callback`,
      response,
      config)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        history.push('/');

      })
      .catch((e) => console.log(e));
  };

  return (
    <section className='login'>
      <Modal transparent={true} noButton={true} isOpen={isLoading}>
        <Loading />
      </Modal>
      <Modal isOpen={mrwit.error} onClose={clear}>
        <Fatal message={mrwit.error} />
      </Modal>
      <img className='background' src={background} alt='' />
      <div className='login__container'>
        <img className='login__logo' src={icon} alt='logo MrWit' />
        <h2>¡Hola! Bienvenido de nuevo, que bueno verte por aquí, antes de continuar recuerda identificarte.</h2>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Correo electrónico'
          className='signup__input'
        />

        <input
          type='password'
          name='password'
          id='password'
          placeholder='Contraseña'
          className='signup__input'
        />

        <button className='signup__submit signup__button' onClick={handleLogin} type='submit'>Iniciar sersión</button>

        <FacebookLogin
          appId='267105265131032'
          autoLoad={false}
          scope='public_profile,user_friends'
          callback={handleSignupFB}
          component={MyFacebookButton}
          icon='fa-facebook'
        />
        <button type='button' onClick={handleLogin} className='signup__linkedin signup__button'>
          <img src={linkedin} alt='icon' />
          Registrarme con LinkedIn
        </button>

        <GoogleLogin
          clientId='1070484053881-kie1fjjloi981aesbh7538h6h724g1g9.apps.googleusercontent.com'
          render={(renderProps) => (
            <button
              type='button'
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className='signup__google signup__button'
            >
              <img src={google} alt='google icon' />
              Registrarme con Google
            </button>
          )}
          buttonText='Registrarme con Google'
          onSuccess={handleSignupGoogle}
          onFailure={handleSignupGoogle}
          cookiePolicy='single_host_origin'
        />

        <div className='login__footer'>
          <span className='signup__link'>
            ¿No tienes cuenta?
            <Link to='/signup' onClick={handleClient}><b> Regístrate</b></Link>
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
  return {
    statusState: reducers.statusReducers,
    mrwit: reducers.mrwitReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (e) => dispatch(setUser(e)),
    loginUser: (e) => dispatch(loginUser(e)),
    clear: () => dispatch(clearSearch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

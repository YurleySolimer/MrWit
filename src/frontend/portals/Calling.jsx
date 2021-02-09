import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import statusReducers from '../reducers/statusReducers';
import * as actionsStatus from '../actions';
import '../assets/styles/portals/Calling.scss';
import phone from '../assets/static/icons/phone.svg';

const CallingModal = (props) => {

  const { onClose, value, isOnline, setIsOnline, isSearch, setIsSearch, isCall, setIsCall} = props;
  const [call, setCall] = useState(false);
  const [message, setMessage] = useState('¡Estamos llamando al consultor, en un segundo iniciará la llamada!');
  const [button, setButton] = useState('Cancelar');
  const history = useHistory();

  function handleCloseModal(e) {
    onClose(e);
  }

  function handleBackModal(e) {
    setIsOnline(isOnline);
    setIsSearch(isSearch);
    history.push('/resultados');
  }

  if (value < 0.8) {
    setTimeout(() => {
      setCall(true);
      clearTimeout();
    }, (value * 10000));
  } else {
    setTimeout(() => {
      const img = document.getElementById('callingImage');
      img.classList.add('ended');
      setMessage('Parece que el consultor tuvo un problema ¿Por qué no seleccionas otro?');
      setButton('Cerrar');
    }, (value * 10000));
  }
  if (call) {

    if (!isOnline) {
      setIsOnline(isOnline);
    }

    if (isSearch) {
      setIsSearch(isSearch);
    }

    setIsCall(isCall);
    return (
      <Redirect to='/llamada' />
    );
  }

  if (isOnline === false) {
    return (
      <div className='CallingModal'>
        <img id='callingImage' className='CallingModal__icon' src={phone} alt='' />
        <p className='CallingModal__text'>{message}</p>
        <button type='button' onClick={handleBackModal} className='CallingModal__button'>Volver</button>
      </div>
    );
  }

  return (
    <div className='CallingModal'>
      <img id='callingImage' className='CallingModal__icon' src={phone} alt='' />
      <p className='CallingModal__text'>{message}</p>
      <button type='button' onClick={handleCloseModal} className='CallingModal__button'>{button}</button>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(CallingModal);

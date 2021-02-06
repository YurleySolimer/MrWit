import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../assets/styles/portals/Calling.scss';
import phone from '../assets/static/icons/phone.svg';

const CallingModal = (props) => {

  const { onClose, value } = props;
  const [call, setCall] = useState(false);
  const [message, setMessage] = useState('¡Estamos llamando al consultor, en un segundo iniciará la llamada!');
  const [button, setButton] = useState('Cancelar');

  function handleCloseModal(e) {
    onClose(e);
  }

  if (value < 0.5) {
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
    return (
      <Redirect to='/llamada' />
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

export default CallingModal;

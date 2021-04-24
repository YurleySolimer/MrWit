import React from 'react';
import '../assets/styles/portals/CancelRecharge.scss';
import warning from '../assets/static/icons/warning.svg';

const CancelDate = (props) => {

  const { onClose } = props;

  return (
    <div className='CancelRecharge'>
      <img src={warning} alt='Warning icon' />
      <h2>¿Estás seguro de querer cancelar esta cita?</h2>
      <div className='buttons'>
        <button type='button' onClick={onClose}>Volver</button>
        <button type='button' className='cancel_recharge_button' onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default CancelDate;

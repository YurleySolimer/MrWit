import React from 'react';
import '../assets/styles/portals/CancelRecharge.scss';
import warning from '../assets/static/icons/warning.svg';

const CancelRecharge = (props) => {

  const { onCancel, onBack } = props;

  return (
    <div className='CancelRecharge'>
      <img src={warning} alt='Warning icon' />
      <h2>Si te quedas sin saldo, se cortará la llamada. ¿Estás seguro de cancelar la recarga?</h2>
      <div className='buttons'>
        <button type='button' onClick={onBack}>Volver</button>
        <button type='button' className='cancel_recharge_button' onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default CancelRecharge;

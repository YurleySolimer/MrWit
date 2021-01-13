import React from 'react';
import '../assets/styles/containers/Recharge.scss';
import symbol from '../assets/static/symbol.png';
import logo from '../assets/static/mrwit-logo.png';
import WalletRecharge from '../components/WalletRecharge';
import payu from '../assets/static/payu-logo.svg';

const Recharge = () => {
  return (
    <div className='Recharge'>
      <div className='Recharge__header'>
        <img src={logo} alt='' className='Recharge__img' />
        <h2 className='Recharge__header__text'>Ahora debes recargar saldo para ingresar a la llamada</h2>
      </div>
      <WalletRecharge />
      <div className='Recharge__payu'>
        <small>Powered by: </small>
        <img src={payu} alt='' className='Recharge__payuIcon' />
      </div>
      <img src={symbol} alt='' className='Recharge__symbol' />
    </div>
  );
};

export default Recharge;

import React from 'react';
import '../assets/styles/components/WalletRecharge.scss';

const WalletRecharge = ({ amount, balance, method }) => {

  return (
    <div className='WalletRecharge'>
      <div className='WalletRecharge__header'>
        <h1 className='WalletRecharge__header__title'>Billetera</h1>
        <h3 className='WalletRecharge__header__balance'>
          <span>Saldo actual: </span>
          <span className='WalletRechage__header__balance__clarify'>{balance}</span>
          <span className='WalletRechage__header__balance__clarify'> COP</span>
        </h3>
      </div>
      <div className='WalletRecharge__body'>
        <h1 className='WalletRecharge__body__title'>Recargar</h1>
        <div className='WalletRecharge__body__minutes'>
          <input type='number' name='minutes' id='minutes' placeholder='10' className='WalletRecharge__body__input'/>
          <span className='WalletRecharge__body__text'>Minutos</span>
        </div>
        <hr />
        <div className='WalletRecharge__body__amount'>
          <span className='WalletRecharge__body__info'>Total a pagar: </span>
          <span className='WalletRecharge__body__total'>
            {amount}
            {' '}
            COP
          </span>
        </div>
        <button type='button' onClick={method} className='WalletRecharge__body__payment'>Pagar</button>
        <br />
        <small className='WalletRecharge__footer'>Recarga mínima: 10 minutos</small>
      </div>
    </div>
  );
};

export default WalletRecharge;

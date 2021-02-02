import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/WalletRecharge.scss';
import payu from '../assets/static/logo/payu-logo.svg';
import pen from '../assets/static/icons/pen.svg';
import question from '../assets/static/icons/question.svg';

const WalletRecharge = (props) => {

  const { amount, balance, method, isOnline, user } = props;

  if (isOnline && user === 'client') {
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
            <input type='number' name='minutes' id='minutes' placeholder='10' className='WalletRecharge__body__input' />
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
          <div className='Recharge__payu'>
            <small>Powered by: </small>
            <img src={payu} alt='' className='Recharge__payuIcon' />
          </div>
        </div>
      </div>
    );
  }

  if (isOnline && user === 'consultant') {
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
          <div className='WalletRecharge__body--buttons'>
            <button className='icon' type='button'><img src={question} alt='Ayuda'/></button>
            <button type='button' onClick={method} className='WalletRecharge__body__payment'>Retirar</button>
            <button className='icon' type='button'><img src={pen} alt='editar'/></button>
          </div>
          <hr />
          <div className='WalletRecharge__body--newAccount'>
            <span>¿No tienes cuenta? <Link to='#'>Registra una cuenta bancaria.</Link></span>
          </div>
          <div className='Recharge__payu'>
            <small>Powered by: </small>
            <img src={payu} alt='' className='Recharge__payuIcon' />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='WalletRechargeOffline'>
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
          <input type='number' name='minutes' id='minutes' placeholder='10' className='WalletRecharge__body__input' />
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
        <small className='WalletRecharge__footerOffline'>Recarga mínima: 10 minutos</small>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isOnline: state.isOnline,
  };
};

export default connect(mapStateToProps)(WalletRecharge);

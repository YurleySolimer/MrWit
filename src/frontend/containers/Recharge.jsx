import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../assets/styles/containers/Recharge.scss';
import symbol from '../assets/static/logo/symbol.png';
import logo from '../assets/static/logo/mrwit-logo.png';
import WalletRecharge from '../components/WalletRecharge';
import payu from '../assets/static/logo/payu-logo.svg';

const Recharge = ({ isOnline, user }) => {

  // eslint-disable-next-line class-methods-use-this
  function handlePayment() {
    alert('your payment was completed');
    window.location = '/llamada';
  }

  if (isOnline || user === 'consultant') {
    return (<Redirect to='/' />);
  }

  if (user === 'client' && !isOnline) {
    return (
      <div className='Recharge'>
        <div className='Recharge__header'>
          <img src={logo} alt='' className='Recharge__img' />
          <h2 className='Recharge__header__text'>Ahora debes recargar saldo para ingresar a la llamada</h2>
        </div>
        <WalletRecharge amount='10.000' balance='0' method={handlePayment} />
        <div className='Recharge__payu'>
          <small>Powered by: </small>
          <img src={payu} alt='' className='Recharge__payuIcon' />
        </div>
        <img src={symbol} alt='' className='Recharge__symbol' />
      </div>
    );
  };

};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isOnline: state.isOnline,
  };
};

export default connect(mapStateToProps, null)(Recharge);

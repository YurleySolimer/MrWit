import React from 'react';
import '../assets/styles/containers/Recharge.scss';
import symbol from '../assets/static/logo/symbol.png';
import logo from '../assets/static/logo/mrwit-logo.png';
import WalletRecharge from '../components/WalletRecharge';
import payu from '../assets/static/logo/payu-logo.svg';

class Recharge extends React.Component {

  // eslint-disable-next-line class-methods-use-this
  handlePayment() {
    alert('your payment was completed');
    window.location = '/llamada';
  }

  render() {

    return (
      <div className='Recharge'>
        <div className='Recharge__header'>
          <img src={logo} alt='' className='Recharge__img' />
          <h2 className='Recharge__header__text'>Ahora debes recargar saldo para ingresar a la llamada</h2>
        </div>
        <WalletRecharge amount='10.000' balance='34.000' method={this.handlePayment} />
        <div className='Recharge__payu'>
          <small>Powered by: </small>
          <img src={payu} alt='' className='Recharge__payuIcon' />
        </div>
        <img src={symbol} alt='' className='Recharge__symbol' />
      </div>
    );
  };
};

export default Recharge;

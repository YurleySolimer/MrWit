import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionsStatus from '../actions';
import '../assets/styles/containers/Recharge.scss';
import logo from '../assets/static/logo/mrwit-logo.png';
import WalletRecharge from '../components/WalletRecharge';
import Modal from '../portals/Modal';
import CallingModal from '../portals/Calling';
import payu from '../assets/static/logo/payu-logo.svg';
import background from '../assets/static/images/background1.png';

const Recharge = ({ consultantData, statusData }) => {

  const { user } = statusData;
  const { consultant } = consultantData;

  console.log(consultant);
  const [isOpen, setIsOpen] = useState(false);

  function handlePayment() {
    setIsOpen(true);
  }

  function handleCloseModal(e) {
    setIsOpen(false);
  }

  if (user.rol.name === 'consultant' || !user.status) {
    return (<Redirect to='/' />);
  }

  if (user.rol.name === 'client') {
    return (
      <div className='Recharge'>
        <img className='background' src={background} alt='background' />
        <div className='Recharge__header'>
          <img src={logo} alt='' className='Recharge__img' />
          <h2 className='Recharge__header__text'>Ahora debes recargar saldo para ingresar a la llamada</h2>
        </div>
        <WalletRecharge amount='10.000' balance='0' method={handlePayment} />
        <Modal onClose={handleCloseModal} noButton={true} isOpen={isOpen}>
          <CallingModal name={user.name} onClose={handleCloseModal} />
        </Modal>
        <div className='Recharge__payu'>
          <small>Powered by: </small>
          <img src={payu} alt='' className='Recharge__payuIcon' />
        </div>
      </div>
    );
  };

};

const mapStateToProps = (state) => {
  return {
    consultantData: state.mrwitReducers,
    statusData: state.statusReducers,
  };
};

export default connect(mapStateToProps, actionsStatus)(Recharge);

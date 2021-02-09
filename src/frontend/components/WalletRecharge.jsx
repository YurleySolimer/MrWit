import React, { useState } from 'react';
import { connect } from 'react-redux';
import statusReducers from '../reducers/statusReducers';
import '../assets/styles/components/WalletRecharge.scss';
import payu from '../assets/static/logo/payu-logo.svg';
import pen from '../assets/static/icons/pen.svg';
import question from '../assets/static/icons/question.svg';
import Modal from '../portals/Modal';
import WalletHelpModal from '../portals/WalletHelpModal';
import WalletNewAccountModal from '../portals/WalletNewAccountModal';
import WalletNewWithdraw from '../portals/WalletNewWithdraw';

const WalletRecharge = (props) => {

  const { amount, balance, method, isOnline, user } = props;

  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [isOpenEditAccount, setIsOpenEditAccount] = useState(false);
  const [isOpenWithdraw, setIsOpenWithdraw] = useState(false);

  function handleOpenModalHelp(e) {
    setIsOpenHelp({ isOpen: true });
  };

  function handleCloseModalHelp(newValue) {
    setIsOpenHelp(false);
  };

  function handleOpenModalWithdraw(e) {
    setIsOpenWithdraw({ isOpenWithdraw: true });
  };

  function handleCloseModalWithdraw(newValue) {
    setIsOpenWithdraw(false);
  };

  function handleOpenModalNewAccount(e) {
    setIsOpenAccount({ isOpen: true });
  };

  function handleCloseModalNewAccount(newValue) {
    setIsOpenAccount(false);
  };

  function handleOpenModalEditAccount(e) {
    setIsOpenEditAccount({ isOpen: true });
  };

  function handleCloseModalEditAccount(newValue) {
    setIsOpenEditAccount(false);
  };

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
            <button onClick={handleOpenModalHelp} className='icon' type='button'><img src={question} alt='Ayuda'/></button>
            <Modal isOpen={isOpenHelp} onClose={handleCloseModalHelp}>
              <WalletHelpModal />
            </Modal>
            <button type='button' onClick={handleOpenModalWithdraw} className='WalletRecharge__body__payment'>Retirar</button>
            <Modal onClose={handleCloseModalWithdraw} isOpen={isOpenWithdraw}>
              <WalletNewWithdraw onClose={handleCloseModalWithdraw} hasAccount={true} />
            </Modal>
            <button className='icon' onClick={handleOpenModalEditAccount} type='button'><img src={pen} alt='editar'/></button>
            <Modal onClose={handleCloseModalEditAccount} isOpen={isOpenEditAccount}>
              <WalletNewAccountModal onClose={handleCloseModalEditAccount} isEdit={true} />
            </Modal>
          </div>
          <hr />
          <div className='WalletRecharge__body--newAccount'>
            <span>¿No tienes cuenta? <button onClick={handleOpenModalNewAccount} type='button' className='wallet__noneButton'>Registra una cuenta bancaria.</button></span>
            <Modal onClose={handleCloseModalNewAccount} isOpen={isOpenAccount}>
              <WalletNewAccountModal onClose={handleCloseModalNewAccount} />
            </Modal>
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

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps)(WalletRecharge);

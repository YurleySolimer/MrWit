import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';
import '../assets/styles/components/WalletRecharge.scss';
import payu from '../assets/static/logo/payu-logo.svg';
import pen from '../assets/static/icons/pen.svg';
import question from '../assets/static/icons/question.svg';
import Modal from '../portals/Modal';
import WalletHelpModal from '../portals/WalletHelpModal';
import WalletNewAccountModal from '../portals/WalletNewAccountModal';
import WalletNewWithdraw from '../portals/WalletNewWithdraw';

import { useHistory } from 'react-router-dom';


const WalletRecharge = (props) => {

  const history = useHistory();


  const { balance, name, id, user, currency } = props;
  const [amount, setAmount] = useState('');
  const [resp, setResp] = useState(false);

  const [page, setPage] = useState('');
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [isOpenEditAccount, setIsOpenEditAccount] = useState(false);
  const [isOpenWithdraw, setIsOpenWithdraw] = useState(false);
  const [hasAccount, setHasAccount] = useState({});

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

  function handleChange(e) {
    setAmount(e.target.value);    
  }

  
  function payumoney() {
/*       var pd = {
        name: user.name,
        id: user.id,
        amount: amountToPay
      };
            
      axios.post("/pay/payumoney",{
        pd
      }).then((res)=> {
        console.log(res);
      }).catch((error)=>{
        console.log(error);
      }); */
  }  



 


    

  const amountToPay = (currency === 'COP' ? (amount * 1000) : (amount * 0.28));

  useEffect(() => {
    const data = axios.get(`${axios.defaults.baseURL}/user/${user.rol.name === 'client' ? 'client' : 'consultor'}/${user.id}/wallet`)
      .then((res) => setHasAccount(res.data.wallet))
      .catch((err) => console.error(err));
  }, []);

  if (resp === true) {
    return (
      page
    )
  }

  if (user.rol.name === 'client') {
    return (
      <div className='WalletRecharge'>
        <div className='WalletRecharge__header'>
          <h1 className='WalletRecharge__header__title'>Billetera</h1>
          <h3 className='WalletRecharge__header__balance'>
            <span>Saldo actual: </span>
            <span className='WalletRechage__header__balance__clarify'>{hasAccount.saldo || '0'}</span>
            {' '}
            <span className='WalletRechage__header__balance__clarify'>{currency}</span>
          </h3>
        </div>
        <div className='WalletRecharge__body'>
          <h1 className='WalletRecharge__body__title'>Recargar</h1>
          <div className='WalletRecharge__body__minutes'>
            <input type='number' name='minutes' id='minutes' value={amount} onChange={handleChange} min='15' placeholder='15' className='WalletRecharge__body__input' />
            <span className='WalletRecharge__body__text'>Minutos</span>
          </div>
          <hr />
          <div className='WalletRecharge__body__amount'>
            <span className='WalletRecharge__body__info'>Total a pagar: </span>
            <span className='WalletRecharge__body__total'>
              <CurrencyFormat value={amountToPay} decimalScale={2} prefix='$' displayType='text' thousandSeparator={true} />
              {' '}
              {currency}
            </span>
          </div>
          <form onSubmit={payumoney} method="POST" action="http://localhost:3000/pay/payumoney">
            <input type="hidden" name='name' id='name' value={user.name} />
            <input type="hidden" name='id' id='id' value={user.id} />
            <input type="hidden" name='amount' id='amount' value={amountToPay} />
            <button type='submit' className='WalletRecharge__body__payment'>Pagar</button>
          </form>
          <div className='Recharge__payu'>
            <small>Powered by: </small>
            <img src={payu} alt='' className='Recharge__payuIcon' />
          </div>
        </div>
      </div>
    );
  }

  if (user.rol.name === 'consultant') {
    return (
      <div className='WalletRecharge'>
        <div className='WalletRecharge__header'>
          <h1 className='WalletRecharge__header__title'>Billetera</h1>
          <h3 className='WalletRecharge__header__balance'>
            <span>Saldo actual: </span>
            <span className='WalletRechage__header__balance__clarify'>{hasAccount.saldo || '0'}</span>
            {' '}
            <span className='WalletRechage__header__balance__clarify'>{currency}</span>
          </h3>
        </div>
        <div className='WalletRecharge__body'>
          <div className='WalletRecharge__body--buttons'>
            <button onClick={handleOpenModalHelp} className='icon' type='button'><img src={question} alt='Ayuda' /></button>
            <Modal isOpen={isOpenHelp} onClose={handleCloseModalHelp}>
              <WalletHelpModal />
            </Modal>
            <button type='button' onClick={handleOpenModalWithdraw} className='WalletRecharge__body__payment'>Retirar</button>
            <Modal onClose={handleCloseModalWithdraw} isOpen={isOpenWithdraw}>
              <WalletNewWithdraw onClose={handleCloseModalWithdraw} currency={currency} hasAccount={hasAccount.bankAccount} />
            </Modal>
            <button className='icon' onClick={handleOpenModalEditAccount} type='button'><img src={pen} alt='editar' /></button>
            <Modal onClose={handleCloseModalEditAccount} isOpen={isOpenEditAccount}>
              <WalletNewAccountModal id={user.id} onClose={handleCloseModalEditAccount} isEdit={true} />
            </Modal>
          </div>
          <hr />
          <div className='WalletRecharge__body--newAccount'>
            <span>¿No tienes cuenta?</span>
            <span>
              <button onClick={handleOpenModalNewAccount} type='button' className='wallet__noneButton'>Registra una cuenta bancaria.</button>
            </span>
            <Modal onClose={handleCloseModalNewAccount} isOpen={isOpenAccount}>
              <WalletNewAccountModal id={user.id} onClose={handleCloseModalNewAccount} />
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
          <span className='WalletRechage__header__balance__clarify'>{currency}</span>
        </h3>
      </div>
      <div className='WalletRecharge__body'>
        <h1 className='WalletRecharge__body__title'>Recargar</h1>
        <div className='WalletRecharge__body__minutes'>
          {/* <input type='number' name='minutes' id='minutes' value={amount} onChange={handleChange} min='10' placeholder='10' className='WalletRecharge__body__input' />
          <span className='WalletRecharge__body__text'>Minutos</span> */}





        </div>
        <hr />
        <div className='WalletRecharge__body__amount'>
          <span className='WalletRecharge__body__info'>Total a pagar: </span>
          <span className='WalletRecharge__body__total'>
            <CurrencyFormat value={amountToPay} decimalScale={2} prefix='$' displayType='text' thousandSeparator={true} />
            {' '}
            {currency}
          </span>
        </div>
        <form onSubmit={payumoney} method="POST" action="http://localhost:3000/pay/payumoney">
        <input type="hidden" name='name' id='name' value={user.name} />
            <input type="hidden" name='id' id='id' value={user.id} />
            <input type="hidden" name='amount' id='amount' value={amountToPay} />
            <button type='submit' className='WalletRecharge__body__payment'>Pagar</button>
          </form>
        
        <br />
        <small className='WalletRecharge__footerOffline'>Recarga mínima: 15 minutos</small>
      </div>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps)(WalletRecharge);

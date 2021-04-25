import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/containers/Wallet.scss';
import WalletRecharge from '../components/WalletRecharge';
import WalletTransactions from '../components/WalletTransactions';

import * as actionsStatus from '../actions';

const Wallet = ({ user, setHeader }) => {

  if (user.status && !user.status.logueado) {
    return (<Redirect to='/' />);
  }

  const handleHeader = () => {
    const d = document.getElementById('wallet');
    if (d.scrollTop >= 50) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  if (user.rol.name === 'client') {
    return (
      <div className='Wallet' onScroll={handleHeader} id='wallet'>
        <WalletRecharge />
        <WalletTransactions type='client' />
      </div>
    );
  }

  if (user.rol.name === 'consultant') {
    return (
      <div className='Wallet'>
        <WalletRecharge />
        <WalletTransactions type='consultor' />
      </div>
    );
  }
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(Wallet);

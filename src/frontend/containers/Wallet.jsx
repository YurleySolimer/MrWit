import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/containers/Wallet.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import WalletRecharge from '../components/WalletRecharge';
import WalletTransactions from '../components/WalletTransactions';

const Wallet = ({ user, isOnline }) => {

  if (!isOnline) {
    return (<Redirect to='/' />);
  }

  if (user === 'client') {
    return (
      <div className='Wallet'>
        <Header user='client' />
        <WalletRecharge balance='30.000' amount='10.000' />
        <WalletTransactions />
        <Menu user='client' />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isOnline: state.isOnline,
  };
};

export default connect(mapStateToProps, null)(Wallet);

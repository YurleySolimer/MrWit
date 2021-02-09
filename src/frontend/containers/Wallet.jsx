import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import statusReducers from '../reducers/statusReducers';
import '../assets/styles/containers/Wallet.scss';
import WalletRecharge from '../components/WalletRecharge';
import WalletTransactions from '../components/WalletTransactions';

const Wallet = ({ user, isOnline }) => {

  // Ajustar que se retire solo los viernes, superior a un mínimo, y las veces que quiera (por encima del mínimo)

  if (!isOnline) {
    return (<Redirect to='/' />);
  }

  if (user === 'client') {
    return (
      <div className='Wallet'>
        <WalletRecharge balance='30.000' amount='10.000' />
        <WalletTransactions />
      </div>
    );
  }

  if (user === 'consultant') {
    return (
      <div className='Wallet'>
        <WalletRecharge balance='30.000' />
        <WalletTransactions />
      </div>
    );
  }
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(Wallet);

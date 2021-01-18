import React from 'react';
import '../assets/styles/containers/Wallet.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import WalletRecharge from '../components/WalletRecharge';
import WalletTransactions from '../components/WalletTransactions';

const Wallet = () => {
  return (
    <div className='Wallet'>
      <Header user='client' />
      <WalletRecharge balance='30.000' amount='10.000' />
      <WalletTransactions />
      <Menu user='client' />
    </div>
  );
};

export default Wallet;

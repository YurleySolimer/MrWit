import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import '../assets/styles/components/WalletTransactions.scss';
import noresults from '../assets/static/icons/noresults.svg';
import Transaction from './Transaction';

const WalletTransactions = ({ user, type }) => {

  const [wallet, setWallet] = useState({});

  useEffect(() => {
    const data = axios.get(`http://localhost:3000/user/${type}/${user.id}/wallet`)
      .then((res) => setWallet(res.data.wallet))
      .catch((err) => console.error(err));
  }, []);

  console.log(wallet);

  if (user.rol.name === 'client') {
    const transactions = wallet.Transacciones;
    if (transactions && transactions.length > 0) {
      return (
        <div className='WalletTransaction'>
          <h2 className='WalletTransactions__title'>Últimas transacciones</h2>
          {transactions.map((transaction) => (
            <Transaction type='cost' name={transaction.name} price={transaction.total} date={transaction.date} key={transaction.date} />
          ))}
        </div>
      );
    }
    return (
      <div className='WalletTransaction'>
        <h2 className='WalletTransactions__title'>Últimas transacciones</h2>
        <img src={noresults} alt='No hay transacciones :(' />
        <p>Parece que no tienes transacciones recientes.</p>
      </div>
    );

  };

  if (user.rol.name === 'consultant') {
    const transactions = wallet.Transacciones;
    if (transactions && transactions.length > 0) {
      return (
        <div className='WalletTransaction'>
          <h2 className='WalletTransactions__title'>Últimas transacciones</h2>
          {wallet.Transacciones.map((transaction) => (
            <Transaction type={transaction.total > 0 ? 'revenue' : 'cost'} name={transaction.name} price={transaction.total} date={transaction.date} key={transaction.date} />
          ))}
        </div>
      );
    };
    return (
      <div className='WalletTransaction'>
        <h2 className='WalletTransactions__title'>Últimas transacciones</h2>
        <img src={noresults} alt='No hay transacciones :(' />
        <p>Parece que no tienes transacciones recientes.</p>
      </div>
    );
  }
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(WalletTransactions);

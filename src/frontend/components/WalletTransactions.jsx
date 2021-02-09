import React from 'react';
import { connect } from 'react-redux';
import statusReducers from '../reducers/statusReducers';
import '../assets/styles/components/WalletTransactions.scss';
import Transaction from './Transaction';

const WalletTransactions = ({ user }) => {

  if (user === 'client') {
    return (
      <div className='WalletTransaction'>
        <h2 className='WalletTransactions__title'>Últimas transacciones</h2>
        <Transaction type='cost' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='cost' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='cost' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='cost' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='cost' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='cost' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='cost' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='cost' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
      </div>
    );
  };

  if (user === 'consultant') {
    return (
      <div className='WalletTransaction'>
        <h2 className='WalletTransactions__title'>Últimas transacciones</h2>
        <Transaction type='revenue' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='cost' name='Retiro' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='revenue' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='cost' name='Retiro' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='revenue' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='revenue' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='revenue' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction type='revenue' name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
      </div>
    );
  };

};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(WalletTransactions);

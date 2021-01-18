import React from 'react';
import '../assets/styles/components/WalletTransactions.scss';
import Transaction from './Transaction';

class WalletTransactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {

    return (
      <div className='WalletTransaction'>
        <h2 className='WalletTransactions__title'>Últimas transacciones</h2>
        <Transaction name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
        <Transaction name='Luis Fernando Méndez' price='15.000' date='30 - 01 - 2021' />
      </div>
    );
  }
}

export default WalletTransactions;

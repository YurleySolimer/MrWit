import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../assets/styles/components/Transaction.scss';

const Transaction = ({ name, price, date, type, currency }) => {
  return (
    <div className='transaction'>
      <span className='transaction__name'>
        {name}
      </span>
      <div className='transaction__info'>
        <span className={`transaction__info__price ${type}`}>
          <CurrencyFormat value={price} decimalScale={2} prefix='$' displayType='text' thousandSeparator={true} />
          {' '}
          {currency}
        </span>
        <span className='transaction__info__date'>
          {date}
        </span>
      </div>
    </div>
  );
};

export default Transaction;

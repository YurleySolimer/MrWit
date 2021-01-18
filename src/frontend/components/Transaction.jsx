import React from 'react';
import '../assets/styles/components/Transaction.scss';

const Transaction = ({ name, price, date }) => {
  return (
    <div className='transaction'>
      <span className='transaction__name'>
        {name}
      </span>
      <div className='transaction__info'>
        <span className='transaction__info__price'>
          {price}
          {' '}
          COP
        </span>
        <span className='transaction__info__date'>
          {date}
        </span>
      </div>
    </div>
  );
};

export default Transaction;

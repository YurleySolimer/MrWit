import React from 'react';
import WalletRecharge from '../components/WalletRecharge';

const RechargeModal = (props) => {
  const { onClose } = props;
  return (
    <div className='RechargeModal'>
      <WalletRecharge balance='14.000' amount='30.000' method={onClose} />
    </div>
  );
};

export default RechargeModal;

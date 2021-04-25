import React, { useState } from 'react';
import '../assets/styles/portals/WalletNewWithdraw.scss';
import CurrencyFormat from 'react-currency-format';
import check from '../assets/static/icons/check.svg';
import error from '../assets/static/icons/error.svg';

const WalletNewWithdraw = ({ onClose, hasAccount, currency }) => {

  const [checkIn, setCheckIn] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const [amount, setAmount] = useState('');

  function handleCloseModal(e) {
    onClose(e);
  }

  function handleCheckIn() {
    if ((amount < 50000 && currency === 'COP') || (amount < 15 && currency === 'USD')) {
      alert(`Debes ingresar al menos ${currency === 'COP' ? '50.000 COP' : '15 USD'}`);
    } else {
      setCheckIn({ checkIn: !checkIn });
    }
  }

  function handleCheckOut() {
    setCheckOut({ checkOut: true });
  }

  function handleAmount(event) {
    const { value } = event.target;
    setAmount(value);
  }

  if (hasAccount.nombre && !checkIn && !checkOut) {
    return (
      <div className='WalletNewWithdraw'>
        <h3>Nuevo retiro</h3>
        <p>¿Cuánto deseas retirar?</p>
        <input placeholder='Monto' type='text' name='amount' value={amount} onChange={handleAmount} id='amount' className='signup__input' />
        <p className='small'>{`El monto mínimo a retirar es ${currency === 'COP' ? '50.000' : '15'} ${currency}.`}</p>
        <button type='button' onClick={handleCheckIn}>Retirar</button>
      </div>
    );
  }

  if (hasAccount.nombre && checkIn && !checkOut) {
    return (
      <div className='WalletNewWithdraw'>
        <h3>Confirmar retiro</h3>
        <p>Se efectuará un retiro con la siguiente información</p>
        <table>
          <tbody>
            <tr>
              <th>Monto</th>
              <td>
                <CurrencyFormat value={amount} prefix='$' decimalScale={2} displayType='text' thousandSeparator={true} />
                {' '}
                {currency}
              </td>
            </tr>
            <tr>
              <th>Nombre</th>
              <td>{hasAccount.nombre} {hasAccount.apellido}</td>
            </tr>
            <tr>
              <th>Teléfono</th>
              <td>{hasAccount.telefono}</td>
            </tr>
            <tr>
              <th>Cédula</th>
              <td>{hasAccount.cedula}</td>
            </tr>
            <tr>
              <th>Banco</th>
              <td>{hasAccount.banco}</td>
            </tr>
            <tr>
              <th>Tipo de cuenta</th>
              <td>{hasAccount.tipo}</td>
            </tr>
            <tr>
              <th># de cuenta</th>
              <td>{hasAccount.cuenta}</td>
            </tr>
          </tbody>
        </table>
        <button type='button' onClick={handleCheckOut}>Retirar</button>
      </div>
    );
  }

  if (hasAccount.nombre && checkIn && checkOut) {
    return (
      <div className='WalletNewWithdraw'>
        <img src={check} alt='' />
        <h3>Retiro completo</h3>
        <p>Has completado el retiro con éxito, recibiras tu pago el próximo viernes.</p>
        <button onClick={handleCloseModal} type='button'>Continuar</button>
      </div>
    );
  }

  return (
    <div className='WalletNewWithdraw'>
      <img src={error} alt='' />
      <h3>No tienes cuenta</h3>
      <p>Parece que no tienes una cuenta asociada, por favor, registra una cuenta para poder continuar.</p>
    </div>
  );
};

export default WalletNewWithdraw;

import React, { useState } from 'react';
import '../assets/styles/portals/WalletNewWithdraw.scss';
import check from '../assets/static/icons/check.svg';
import error from '../assets/static/icons/error.svg';

const WalletNewWithdraw = ({ onClose, hasAccount, currency }) => {

  const [checkIn, setCheckIn] = useState(false);
  const [checkOut, setCheckOut] = useState(false);

  function handleCloseModal(e) {
    onClose(e);
  }

  function handleCheckIn() {
    setCheckIn({ checkIn: !checkIn });
  }

  function handleCheckOut() {
    setCheckOut({ checkOut: true });
  }

  if (hasAccount && !checkIn && !checkOut) {
    return (
      <div className='WalletNewWithdraw'>
        <h3>Nuevo retiro</h3>
        <p>¿Cuánto deseas retirar?</p>
        <input placeholder='Monto' type='text' name='amount' id='amount' className='signup__input' />
        <p className='small'>El monto mínimo a retirar es 50.000 { currency }.</p>
        <button type='button' onClick={handleCheckIn}>Retirar</button>
      </div>
    );
  }

  if (hasAccount && checkIn && !checkOut) {
    return (
      <div className='WalletNewWithdraw'>
        <h3>Confirmar retiro</h3>
        <p>Se efectuará un retiro con la siguiente información</p>
        <table>
          <tbody>

            <tr>
              <th>Monto</th>
              <td>50.000 { currency }</td>
            </tr>
            <tr>
              <th>Nombre</th>
              <td>Nombre del consultor</td>
            </tr>
            <tr>
              <th>Teléfono</th>
              <td>+57 123 1234567</td>
            </tr>
            <tr>
              <th>Cédula</th>
              <td>12.345.678</td>
            </tr>
            <tr>
              <th>Banco</th>
              <td>Bancolombia</td>
            </tr>
            <tr>
              <th>Tipo de cuenta</th>
              <td>Corriente</td>
            </tr>
            <tr>
              <th># de cuenta</th>
              <td>1234-1234-1234-1234-1234</td>
            </tr>
          </tbody>
        </table>
        <button type='button' onClick={handleCheckOut}>Retirar</button>
      </div>
    );
  }

  if (hasAccount && checkIn && checkOut) {
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

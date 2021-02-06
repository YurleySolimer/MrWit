/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import '../assets/styles/portals/WalletNewAccountModal.scss';
import check from '../assets/static/icons/check.svg';

const WalletNewAccountModal = ({ onClose, isEdit }) => {

  const [saved, setSaved] = useState(false);

  function handleCloseModal(e) {
    onClose(e);
  }

  function handleSaveAccount() {
    setSaved({ saved: true });
  }

  if (saved && isEdit) {
    return (
      <div className='WalletNA__saved'>
        <img src={check} alt='' />
        <p>Se ha editado tu cuenta de retiro correctamente.</p>
        <button type='button' onClick={handleCloseModal}>Continuar</button>
      </div>
    );
  }

  if (saved && !isEdit) {
    return (
      <div className='WalletNA__saved'>
        <img src={check} alt='' />
        <p>Se ha guardado tu cuenta de retiro correctamente.</p>
        <button type='button' onClick={handleCloseModal}>Continuar</button>
      </div>
    );
  }

  if (isEdit && !saved) {
    return (
      <div className='WalletNewAccountModal'>
        <h3 className='WalletNAModal__title'>Editar datos de cobro</h3>
        <p className='WalletNAModal__text'>Los siguientes datos son necesarios para procesar los pagos que recibas en la plataforma.</p>
        <form action='' className='WalletNewAccount'>
          <input type='text' placeholder='Nombre' id='name' name='name' className='signup__input' />
          <input type='tel' placeholder='Teléfono' id='tel' name='tel' className='signup__input' />
          <input type='number' placeholder='Cédula' id='id' name='id' className='signup__input' />
          <select id='banco' name='banco' className='signup__input'>
            <option value=''>Banco</option>
          </select>
          <select id='typeAccount' name='typeAccount' className='signup__input'>
            <option value=''>Tipo de cuenta</option>
          </select>
          <input type='number' placeholder='Número de cuenta' id='accountNumber' name='accountNumber' className='signup__input' />
          <h3 className='WalletNAModal__agreements'>Acuerdos de la plataforma</h3>
          <label htmlFor='agreements'>
            <input type='checkbox' name='agreements' id='agreements' />
            <small>Con esta casilla indica que está de acuerdo con nuestros <b>Términos y condiciones</b></small>
          </label>
          <button type='button' onClick={handleSaveAccount}><img src={check} alt='' /></button>
        </form>
      </div>
    )
  }

  return (
    <div className='WalletNewAccountModal'>
      <h3 className='WalletNAModal__title'>Datos de cobro</h3>
      <p className='WalletNAModal__text'>Los siguientes datos son necesarios para procesar los pagos que recibas en la plataforma.</p>
      <form action='' className='WalletNewAccount'>
        <input type='text' placeholder='Nombre' id='name' name='name' className='signup__input' />
        <input type='tel' placeholder='Teléfono' id='tel' name='tel' className='signup__input' />
        <input type='number' placeholder='Cédula' id='id' name='id' className='signup__input' />
        <select id='banco' name='banco' className='signup__input'>
          <option value=''>Banco</option>
        </select>
        <select id='typeAccount' name='typeAccount' className='signup__input'>
          <option value=''>Tipo de cuenta</option>
        </select>
        <input type='number' placeholder='Número de cuenta' id='accountNumber' name='accountNumber' className='signup__input' />
        <h3 className='WalletNAModal__agreements'>Acuerdos de la plataforma</h3>
        <label htmlFor='agreements'>
          <input type='checkbox' name='agreements' id='agreements' />
          <small>Con esta casilla indica que está de acuerdo con nuestros <b>Términos y condiciones</b></small>
        </label>
        <button type='button' onClick={handleSaveAccount}><img src={check} alt='' /></button>
      </form>
    </div>
  )
}

export default WalletNewAccountModal;

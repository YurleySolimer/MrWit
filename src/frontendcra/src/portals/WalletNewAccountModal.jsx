/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/portals/WalletNewAccountModal.scss';
import check from '../assets/static/icons/check.svg';

const WalletNewAccountModal = ({ onClose, isEdit, id }) => {

  const [saved, setSaved] = useState(false);
  const [input, setInput] = useState({
    name: '',
    lastname: '',
    tel: '',
    cedula: '',
    banco: '',
    tipo: '',
    cuenta: '',
    acuerdo: '',
  });

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  function handleCloseModal(e) {
    onClose(e);
  }

  function handleSaveAccount(event) {
    event.preventDefault();
    if (input.acuerdo === true) {
      const data = new FormData();
      data.append('nombre', input.name);
      data.append('apellido', input.lastname);
      data.append('telefono', input.tel);
      data.append('cedula', input.cedula);
      data.append('banco', input.banco);
      data.append('tipo', input.tipo);
      data.append('cuenta', input.cuenta);
      data.append('acuerdo', input.acuerdo);

      const res = axios.post(`${axios.defaults.baseURL}/user/consultor/${id}/wallet/cuenta`,
        data,
        config)
        .then((res) => {
          console.log(res.data);
          setSaved({ saved: true });
        })
        .catch((e) => console.log(e));
    } else {
      alert('Debes aceptar los términos y condiciones');
    }
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
          <input type='text' placeholder='Nombre' id='name' value={input.name} onChange={handleChange} name='name' className='signup__input' />
          <input type='text' placeholder='Apellido' id='lastname' value={input.lastname} onChange={handleChange} name='lastname' className='signup__input' />
          <input type='tel' placeholder='Teléfono' id='tel' name='tel' value={input.tel} onChange={handleChange} className='signup__input' />
          <input type='number' placeholder='Cédula' id='cedula' name='cedula' value={input.cedula} onChange={handleChange} className='signup__input' />
          <select id='banco' name='banco' value={input.banco} onChange={handleChange} className='signup__input'>
            <option value=''>Banco</option>
            <option value='Bancolombia'>Bancolombia</option>
            <option value='Banco de Bogotá'>Banco de Bogotá</option>
            <option value='Davivienda'>Davivienda</option>
            <option value='BBVA'>BBVA</option>
            <option value='Banco de Occidente'>Banco de Occidente</option>
            <option value='Banco Itaú'>Banco Itaú</option>
            <option value='Banco Agrario'>Banco Agrario</option>
            <option value='Colpatria'>Colpatria</option>
            <option value='GNB Sudameris'>GNB Sudameris</option>
            <option value='Banco Popular'>Banco Popular</option>
            <option value='Banco Caja Social'>Banco Caja Social</option>
            <option value='Banco AV Villas'>Banco AV Villas</option>
            <option value='Scotiabank'>Scotiabank</option>
            <option value='Bancoomeva'>Bancoomeva</option>
            <option value='Banco Pichincha'>Banco Pichincha</option>
            <option value='Corficolombiana'>Corficolombiana</option>
            <option value='Banco W'>Banco W</option>
          </select>
          <select id='tipo' name='tipo' value={input.tipo} onChange={handleChange} className='signup__input'>
            <option value=''>Tipo de cuenta</option>
            <option value='Ahorro'>Ahorro</option>
            <option value='Corriente'>Corriente</option>
            <option value='Nómina'>Nómina</option>
          </select>
          <input type='number' placeholder='Número de cuenta' value={input.cuenta} onChange={handleChange} id='cuenta' name='cuenta' className='signup__input' />
          <h3 className='WalletNAModal__agreements'>Acuerdos de la plataforma</h3>
          <label htmlFor='acuerdo'>
            <input type='checkbox' name='acuerdo' id='acuerdo' value={input.acuerdo} onChange={handleChange} />
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
        <input type='text' placeholder='Nombre' id='name' value={input.name} onChange={handleChange} name='name' className='signup__input' />
        <input type='text' placeholder='Apellido' id='lastname' value={input.lastname} onChange={handleChange} name='lastname' className='signup__input' />
        <input type='tel' placeholder='Teléfono' id='tel' name='tel' value={input.tel} onChange={handleChange} className='signup__input' />
        <input type='number' placeholder='Cédula' id='cedula' name='cedula' value={input.cedula} onChange={handleChange} className='signup__input' />
        <select id='banco' name='banco' value={input.banco} onChange={handleChange} className='signup__input'>
          <option value=''>Banco</option>
          <option value='Bancolombia'>Bancolombia</option>
          <option value='Banco de Bogotá'>Banco de Bogotá</option>
          <option value='Davivienda'>Davivienda</option>
          <option value='BBVA'>BBVA</option>
          <option value='Banco de Occidente'>Banco de Occidente</option>
          <option value='Banco Itaú'>Banco Itaú</option>
          <option value='Banco Agrario'>Banco Agrario</option>
          <option value='Colpatria'>Colpatria</option>
          <option value='GNB Sudameris'>GNB Sudameris</option>
          <option value='Banco Popular'>Banco Popular</option>
          <option value='Banco Caja Social'>Banco Caja Social</option>
          <option value='Banco AV Villas'>Banco AV Villas</option>
          <option value='Scotiabank'>Scotiabank</option>
          <option value='Bancoomeva'>Bancoomeva</option>
          <option value='Banco Pichincha'>Banco Pichincha</option>
          <option value='Corficolombiana'>Corficolombiana</option>
          <option value='Banco W'>Banco W</option>
        </select>
        <select id='tipo' name='tipo' value={input.tipo} onChange={handleChange} className='signup__input'>
          <option value=''>Tipo de cuenta</option>
          <option value='Ahorro'>Ahorro</option>
          <option value='Corriente'>Corriente</option>
          <option value='Nómina'>Nómina</option>
        </select>
        <input type='number' placeholder='Número de cuenta' value={input.cuenta} onChange={handleChange} id='cuenta' name='cuenta' className='signup__input' />
        <h3 className='WalletNAModal__agreements'>Acuerdos de la plataforma</h3>
        <label htmlFor='acuerdo'>
          <input type='checkbox' name='acuerdo' id='acuerdo' value={input.acuerdo} onChange={handleChange} />
          <small>Con esta casilla indica que está de acuerdo con nuestros <b>Términos y condiciones</b></small>
        </label>
        <button type='button' onClick={handleSaveAccount}><img src={check} alt='' /></button>
      </form>
    </div>
  )
}

export default WalletNewAccountModal;

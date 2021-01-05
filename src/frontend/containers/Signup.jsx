import React, { useState } from 'react';
import '../assets/styles/containers/Signup.scss';
import logo from '../assets/static/mrwit-logo.png';

const Signup = (props) => {
  const [form, setValues] = useState({
    name: '',
    cedula: '',
    telefono: '',
    genero: '',
    país: '',
    email: '',
    password: '',
  });

  return (
    <section className='Signup'>
      <div className='Signup__header'>
        <img src={logo} alt='' className='Signup__header__img' />
      </div>
    </section>
  );
};

export default Signup;

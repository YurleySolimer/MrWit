import React from 'react';
import facebook from '../assets/static/icons/facebook.svg';

const MyFacebookButton = ({ onClick }) => (
  <button
    type='button'
    onClick={onClick}
    className='signup__facebook signup__button'
  >
    <img src={facebook} alt='icon' />
    Registrarme Facebook
  </button>

);

export default MyFacebookButton;

import React from 'react';
import '../assets/styles/components/SelectionIntro.scss';
import comment from '../assets/static/assets/comment.png';

const SelectionIntro = ({ children }) => {
  return (
    <div className='introSelect'>
      <img src={comment} alt='comentario' />
      <p aria-label='Te conectamos con el consultor a tu medida y paga por minuto.'>{' '}</p>
      <div className='logoSpace'>{' '}</div>
      {children}
    </div>
  );
};

export default SelectionIntro;

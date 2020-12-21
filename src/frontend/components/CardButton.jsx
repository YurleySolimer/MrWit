import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/CardButton.scss';

const CardButton = ({ name, obj, msg, dir }) => {
  return (
    <div className='cardButton'>
      <h2 className='cardButton__title'>{name}</h2>
      <Link className={obj} to={dir}>
        {msg}
      </Link>
    </div>
  );
};

export default CardButton;

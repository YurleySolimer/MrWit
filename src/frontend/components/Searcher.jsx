import React, { useState } from 'react';
import '../assets/styles/components/Searcher.scss';
import lupa from '../assets/static/icons/lupa.svg';
import Modal from '../portals/Modal';
import SearchType from '../portals/SearchType';

const Searcher = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const { handler } = props;

  function handleClose(e) {
    setIsOpen(false);
  }

  function handleOpen(e) {
    setIsOpen(true);
  }

  function handleHandlder() {
    handler(true);
  }

  return (
    <div className='Search'>
      <input type='text' placeholder='¿Qué necesitas?' className='Search__input' />
      <button type='submit' onClick={handleOpen} className='Search__submit'>
        <img src={lupa} alt='Buscador' />
      </button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <SearchType handleResults={() => handleHandlder()} />
      </Modal>
    </div>
  );
};

export default Searcher;

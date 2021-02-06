import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/portals/Modal.scss';
import close from '../assets/static/icons/closeDark.svg';

const Modal = ({ children, isOpen, onClose, noButton }) => {

  function handleCloseModal(e) {
    onClose(e.target.isOpen);
  }

  if (!isOpen) {
    return null;
  }

  if (noButton) {
    return (
      ReactDOM.createPortal(
        <div className='Modal'>
          <div className='Modal__container'>
            {children}
          </div>
        </div>,
        document.getElementById('modal'),
      )
    );
  }

  return (
    ReactDOM.createPortal(
      <div className='Modal'>
        <div className='Modal__container'>
          <button onClick={handleCloseModal} type='button' className='Modal__close--button'>
            <img src={close} alt='cierra el popup' />
          </button>
          {children}
        </div>
      </div>,
      document.getElementById('modal'),
    )
  );

};

export default Modal;

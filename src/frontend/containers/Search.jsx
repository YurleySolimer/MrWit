import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import statusReducers from '../reducers/statusReducers';

import '../assets/styles/containers/Search.scss';
import '../assets/styles/components/Searcher.scss';

import background from '../assets/static/images/background1.png';
import lupa from '../assets/static/icons/lupa.svg';

import CircleCarousel from '../components/CircleCarousel';
import SearchElements from '../components/SearchElements';
import Feedback from '../components/Feedback';

import Modal from '../portals/Modal';
import SearchType from '../portals/SearchType';

const Search = ({ user, isOnline }) => {

  const [isOpen, setIsOpen] = useState(false);

  function handleClose(e) {
    setIsOpen(false);
  }

  function handleOpen(e) {
    setIsOpen(true);
  }
  
  if (user === 'client' && !isOnline) {
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <div className='Search'>
          <input type='text' placeholder='¿Qué necesitas?' className='Search__input' />
          <button type='submit' onClick={handleOpen} className='Search__submit'>
            <img src={lupa} alt='Buscador' />
          </button>
          <Modal isOpen={isOpen} onClose={handleClose}>
            <SearchType onClose={handleClose} />
          </Modal>
        </div>
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  if (user === 'client' && isOnline) {
    return (
      <div className='searchConsultant online'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <div className='Search'>
          <input type='text' placeholder='¿Qué necesitas?' className='Search__input' />
          <button type='submit' onClick={handleOpen} className='Search__submit'>
            <img src={lupa} alt='Buscador' />
          </button>
          <Modal isOpen={isOpen} onClose={handleClose}>
            <SearchType onClose={handleClose} />
          </Modal>
        </div>
      </div>
    );
  };

  return (<Redirect to='/' />);
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(Search);

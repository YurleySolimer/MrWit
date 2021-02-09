import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import statusReducers from '../reducers/statusReducers';

import '../assets/styles/containers/Search.scss';
import '../assets/styles/components/Searcher.scss';

import yellow from '../assets/static/assets/intro-yellow.svg';
import blue from '../assets/static/assets/intro-blue.svg';
import one from '../assets/static/assets/signal-one.svg';
import two from '../assets/static/assets/signal-two.svg';
import three from '../assets/static/assets/signal-three.svg';
import lupa from '../assets/static/icons/lupa.svg';

import CircleCarousel from '../components/CircleCarousel';
import SearchElements from '../components/SearchElements';
import Feedback from '../components/Feedback';

import Modal from '../portals/Modal';
import SearchType from '../portals/SearchType';

const Search = ({ user }) => {

  const [results, setResults] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  function handleClose(e) {
    setIsOpen(false);
  }

  function handleOpen(e) {
    setIsOpen(true);
  }

  // Filtrar por país en los resultados, para escoger la prosedencia del consultor

  if (user === 'client' && !results) {
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>La respuesta a todas tus preguntas en solo tres pasos</h2>
        </div>
        <div className='signal__one'>
          <img src={one} alt='signal search' />
        </div>
        <div className='signal__two'>
          <img src={two} alt='signal search' />
        </div>
        <div className='searchObj__yellow'>
          <img src={yellow} alt='signal search' />
        </div>
        <div className='searchObj__blue'>
          <img src={blue} alt='signal search' />
        </div>
        <div className='Search'>
          <input type='text' placeholder='¿Qué necesitas?' className='Search__input' />
          <button type='submit' onClick={handleOpen} className='Search__submit'>
            <img src={lupa} alt='Buscador' />
          </button>
          <Modal isOpen={isOpen} onClose={handleClose}>
            <SearchType setResults={setResults} results={results} onClose={handleClose} />
          </Modal>
        </div>
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  if (user === 'client' && results === 'category') {
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>La respuesta a todas tus preguntas en solo tres pasos</h2>
        </div>
        <div className='signal__one'>
          <img src={one} alt='signal search' />
        </div>
        <div className='signal__two'>
          <img src={two} alt='signal search' />
        </div>
        <div className='signal__three'>
          <img src={three} alt='signal search' />
        </div>
        <div className='searchObj__yellow'>
          <img src={yellow} alt='signal search' />
        </div>
        <div className='searchObj__blue'>
          <img src={blue} alt='signal search' />
        </div>
        <div className='Search'>
          <input type='text' placeholder='¿Qué necesitas?' className='Search__input' />
          <button type='submit' onClick={handleOpen} className='Search__submit'>
            <img src={lupa} alt='Buscador' />
          </button>
          <Modal isOpen={isOpen} onClose={handleClose}>
            <SearchType setResults={setResults} results={results} onClose={handleClose} />
          </Modal>
        </div>
        <CircleCarousel searchTerm='Categoría'>
          <SearchElements link='/resultados' className='one' title='Subcat' />
          <SearchElements link='/resultados' className='two' title='Subcat' />
          <SearchElements link='/resultados' className='three' title='Subcat' />
          <SearchElements link='/resultados' className='four' title='Subcat' />
          <SearchElements link='/resultados' className='five' title='Subcat' />
          <SearchElements link='/resultados' className='six' title='Subcat' />
          <SearchElements link='/resultados' className='seven' title='Subcat' />
          <SearchElements link='/resultados' className='eight' title='Subcat' />
        </CircleCarousel>
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  if (user === 'client' && results === 'profession') {
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>La respuesta a todas tus preguntas en solo tres pasos</h2>
        </div>
        <div className='signal__one'>
          <img src={one} alt='signal search' />
        </div>
        <div className='signal__two'>
          <img src={two} alt='signal search' />
        </div>
        <div className='signal__three'>
          <img src={three} alt='signal search' />
        </div>
        <div className='searchObj__yellow'>
          <img src={yellow} alt='signal search' />
        </div>
        <div className='searchObj__blue'>
          <img src={blue} alt='signal search' />
        </div>
        <div className='Search'>
          <input type='text' placeholder='¿Qué necesitas?' className='Search__input' />
          <button type='submit' onClick={handleOpen} className='Search__submit'>
            <img src={lupa} alt='Buscador' />
          </button>
          <Modal isOpen={isOpen} onClose={handleClose}>
            <SearchType setResults={setResults} results={results} onClose={handleClose} />
          </Modal>
        </div>
        <CircleCarousel searchTerm='Profesión'>
          <SearchElements link='/resultados' className='one' title='Especialidad' />
          <SearchElements link='/resultados' className='two' title='Especialidad' />
          <SearchElements link='/resultados' className='three' title='Especialidad' />
          <SearchElements link='/resultados' className='four' title='Especialidad' />
          <SearchElements link='/resultados' className='five' title='Especialidad' />
          <SearchElements link='/resultados' className='six' title='Especialidad' />
          <SearchElements link='/resultados' className='seven' title='Especialidad' />
          <SearchElements link='/resultados' className='eight' title='Especialidad' />
        </CircleCarousel>
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  return (<Redirect to='/' />);
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(Search);

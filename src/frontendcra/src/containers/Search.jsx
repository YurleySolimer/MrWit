import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import '../assets/styles/containers/Search.scss';
import '../assets/styles/components/Searcher.scss';

import background from '../assets/static/images/background1.png';

import CircleCarousel from '../components/CircleCarousel';
import Feedback from '../components/Feedback';
import DataJSON from '../professions';
import Modal from '../portals/Modal';
import Loading from '../components/Loading';
import Fatal from '../components/Fatal';

import Searcher from '../components/Searcher';

import { clearSearch, getConsultants } from '../actions/mrwit';

const Search = (props) => {

  const { status, mrwit, getConsultants, clear } = props;
  const { user } = status;
  const { isLoading, redirectTo } = mrwit;

  // El tipo indica el tipo de busqueda que se está realizando (Sector, Profesión, Habilidad, ID)
  const [type, setType] = useState('');
  // valueResult corresponde a lo buscado en el buscador (el input text)
  const [valueResult, setValueResult] = useState('');
  // valueSelection corresponde al elemento escogído en los circulos (si no hay, pasa a una busqueda directa)
  const [valueSelection, setValueSelection] = useState('');
  // specialities corresponde a los elementos de la segunda selección para desplegar en forma de circulo
  const [specialities, setSpecialities] = useState([]);

  const [queryParams, setQueryParams] = useState(null);
  const [ready, setReady] = useState(false);

  const handleHeader = () => {
    const d = document.getElementById('searchConsultant');
    if (d.scrollTop >= 50) {
      props.setHeader(true);
    } else {
      props.setHeader(false);
    }
  };

  const handleSearch = (e) => {
    setType(e);
  };

  const handleValue = (e) => {
    setValueResult(e);
    for (let i = 0; i < DataJSON.length; i++) {
      if (Object.getOwnPropertyNames(DataJSON[i])[0] === e) {
        const info = DataJSON[i];
        setSpecialities(info[e]);
      }
    }
  };

  const handleValueSelection = (e) => {
    setValueSelection(e);
  };

  useEffect(() => {
    if (type === 'profession' && !ready) {
      if (valueResult === '' && valueSelection !== '') {
        const data = new FormData();
        data.append('profession', valueSelection);
        setQueryParams(data);
        setReady(true);
      } else if (valueSelection !== '' && specialities === []) {
        const data = new FormData();
        data.append('proffession', valueResult);
        setQueryParams(data);
        setReady(true);
      } else if (valueSelection !== '' && !ready) {
        const data = new FormData();
        data.append('proffession', valueResult);
        data.append('especialidad', valueSelection);
        setQueryParams(data);
        setReady(true);
      }
    }

    if (type === 'sector' && !ready) {
      if (valueSelection !== '') {
        const data = new FormData();
        data.append('category', valueResult);
        data.append('proffession', valueSelection);
        setQueryParams(data);
        setReady(true);
      } else if (valueResult === '' && valueSelection !== '') {
        const data = new FormData();
        data.append('category', valueSelection);
        setQueryParams(data);
        setReady(true);
      };
    }
  }, [valueSelection]);

  const handleAction = () => {
    console.log('me activaron');
  };

  useEffect(() => {
    if (ready && queryParams) {
      getConsultants([queryParams, '/resultados']);
    }
  }, [ready, queryParams]);

  if (redirectTo) {
    return (
      <Redirect to={redirectTo} />
    );
  }

  if (user.rol.name === 'client' && type === 'profession') {
    return (
      <div className={`searchConsultant ${user.status ? 'online' : ''}`} onScroll={user.status ? handleHeader : null} id='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={!user.status} action={handleAction} setValueResult={handleValue} setType={handleSearch} />
        <input type='hidden' name='sector' id='sector' value={valueResult} />
        <input type='hidden' name='profesion' id='profesion' value={valueSelection} />
        { user.status ?
          <CircleCarousel specialities={specialities} action={handleAction} setValue={handleValueSelection} value={valueResult} searchTerm='Profesión' /> :
          (
            <>
              <CircleCarousel specialities={specialities} action={handleAction} setValue={handleValueSelection} value={valueResult} searchTerm='Profesión' />
              <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
            </>
          )}
        <Modal transparent={true} noButton={true} isOpen={isLoading}>
          <Loading />
        </Modal>
        <Modal isOpen={mrwit.error} onClose={clear}>
          <Fatal message={mrwit.error} />
        </Modal>
      </div>
    );
  };

  if (user.rol.name === 'client' && type === 'sector') {
    return (
      <div className={`searchConsultant ${user.status ? 'online' : ''}`} onScroll={user.status ? handleHeader : null} id='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={!user.status} action={handleAction} setValueResult={handleValue} setType={handleSearch} />
        <input type='hidden' name='sector' id='sector' value={valueResult} />
        <input type='hidden' name='profesion' id='profesion' value={valueSelection} />
        { user.status ?
          <CircleCarousel specialities={specialities} action={handleAction} setValue={handleValueSelection} value={valueResult} searchTerm='Sector' /> :
          (
            <>
              <CircleCarousel specialities={specialities} action={handleAction} setValue={handleValueSelection} value={valueResult} searchTerm='Sector' />
              <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
            </>
          )}
        <Modal transparent={true} noButton={true} isOpen={isLoading}>
          <Loading />
        </Modal>
        <Modal isOpen={mrwit.error} onClose={clear}>
          <Fatal message={mrwit.error} />
        </Modal>
      </div>
    );
  };

  if (user.rol.name === 'client') {
    return (
      <div className={`searchConsultant ${user.status ? 'online' : ''}`} onScroll={user.status ? handleHeader : null} id='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={!user.status} action={handleAction} setValueResult={handleValue} setType={handleSearch} />
        { user.status ?
          null :
          (
            <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
          )}
        <Modal transparent={true} noButton={true} isOpen={isLoading}>
          <Loading />
        </Modal>
        <Modal isOpen={mrwit.error} onClose={clear}>
          <Fatal message={mrwit.error} />
        </Modal>
      </div>
    );
  };

  return (<Redirect to='/' />);
};

const mapStateToProps = (reducers) => {
  return {
    status: reducers.statusReducers,
    mrwit: reducers.mrwitReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getConsultants: (e) => dispatch(getConsultants(e)),
    clear: () => dispatch(clearSearch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

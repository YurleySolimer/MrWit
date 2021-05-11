import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/portals/SearchType.scss';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

import { getConsultants } from '../actions/mrwit';

const SearchType = (props) => {

  const { setType, onClose, setValueResult, value, isHome, getConsultants, mrwit } = props;
  const { redirectTo } = mrwit;

  const history = useHistory();

  function handleSector(e) {
    const val = value.replace(' - Sector', '');
    setType('sector');
    setValueResult(val);
    onClose(e);
  }

  function handleProfession(e) {
    const val = value.replace(' - Profesión', '');
    setType('profession');
    setValueResult(val);
    onClose(e);
  }

  function handleAbility() {
    const data = new FormData();
    data.append('ability', value);
    getConsultants([data, '/resultados']);
  }

  function handleID(e) {
    const data = new FormData();
    data.append('id', value);
    const res = axios.post(`${axios.defaults.baseURL}/busqueda`, data)
      .then((res) => {
        history.push(`/resultados/${value}`);
      })
      .catch((e) => console.log(e));
  }

  if (redirectTo) {
    return (
      <Redirect to={redirectTo} />
    );
  }

  if (isHome) {
    return (
      <div className='SearchType'>
        <h2>
          ¿Cómo quieres buscar
          {' '}
          <b>
          {value}?
          </b>
          {' '}
          ¿Habilidad o ID?
          </h2>
        <button type='button' className='ability' onClick={handleAbility}>Habilidad</button>
        <button type='button' className='id' onClick={handleID}>ID</button>
      </div>
    );
  }

  if (value) {
    return (
      <div className='SearchType'>
        <h2>
          No tenemos
          {' '}
          <b>{value}</b>
          {' '}
          entre nuestros Sectores o Profesiones ¿Qué tal si buscas por...?
        </h2>
        <button type='button' className='ability' onClick={handleAbility}>Habilidad</button>
        <button type='button' className='id' onClick={handleID}>ID</button>
      </div>
    );
  }

  return (
    <div className='SearchType'>
      <h2>¿Qué quieres buscar?</h2>
      <button type='button' className='profession' onClick={handleProfession}>Profesión</button>
      <button type='button' className='sector' onClick={handleSector}>Sector</button>
    </div>
  );

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchType);

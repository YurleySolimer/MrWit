import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import '../assets/styles/containers/Search.scss';
import '../assets/styles/components/Searcher.scss';

import background from '../assets/static/images/background1.png';

import CircleCarousel from '../components/CircleCarousel';
import Feedback from '../components/Feedback';
import DataJSON from '../../professions';

import Searcher from '../components/Searcher';

import { getConsultantsSuccess } from '../actions/mrwit';

const Search = ({ user, getConsultantsSuccess }) => {
  const history = useHistory();
  getConsultantsSuccess({
    busqueda: '',
    consultores: [],
    proffession: '',
    sector: '',
    especialidad: '',
  });
  // El tipo indica el tipo de busqueda que se está realizando (Sector, Profesión, Habilidad, ID)
  const [type, setType] = useState('');
  // valueResult corresponde a lo buscado en el buscador (el input text)
  const [valueResult, setValueResult] = useState('');
  // valueSelection corresponde al elemento escogído en los circulos (si no hay, pasa a una busqueda directa)
  const [valueSelection, setValueSelection] = useState('');
  // specialities corresponde a los elementos de la segunda selección para desplegar en forma de circulo
  const [specialities, setSpecialities] = useState([]);

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

  if (user.rol.name === 'client' && !user.status && type === 'sector') {
    if (valueSelection !== '') {
      const data = new FormData();
      data.append('category', valueResult);
      data.append('proffession', valueSelection);
      const res = axios.post(`${axios.defaults.baseURL}/busqueda`, data)
        .then((res) => {
          getConsultantsSuccess(res.data);
          history.push('/resultados');
        })
        .catch((e) => console.log(e));
    }
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={true} setValueResult={handleValue} setType={handleSearch} />
        <input type='hidden' name='sector' id='sector' value={valueResult} />
        <input type='hidden' name='profesion' id='profesion' value={valueSelection} />
        <CircleCarousel specialities={specialities} setValue={handleValueSelection} value={valueResult} searchTerm='Sector' />
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  if (user.rol.name === 'client' && !user.status && type === 'profession') {
    if (valueSelection !== '' && specialities === []) {
      const data = new FormData();
      data.append('proffession', valueResult);
      const res = axios.post(`${axios.defaults.baseURL}/busqueda`, data)
        .then((res) => {
          getConsultantsSuccess(res.data);
          history.push('/resultados');
        })
        .catch((e) => console.log(e));
    } else if (valueSelection !== '') {
      const data = new FormData();
      data.append('proffession', valueResult);
      data.append('especialidad', valueSelection);
      const res = axios.post(`${axios.defaults.baseURL}/busqueda`, data)
        .then((res) => {
          getConsultantsSuccess(res.data);
          history.push('/resultados');
        })
        .catch((e) => console.log(e));
    }
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={true} setValueResult={handleValue} setType={handleSearch} />
        <input type='hidden' name='profesion' id='profesion' value={valueResult} />
        <input type='hidden' name='especialidad' id='especialidad' value={valueSelection} />
        <CircleCarousel specialities={specialities} setValue={handleValueSelection} value={valueResult} searchTerm='Profesión' />
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  if (user.rol.name === 'client' && !user.status) {
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={true} setValueResult={handleValue} setType={handleSearch} />
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  if (user.rol.name === 'client' && user.status && type === 'sector') {
    if (valueSelection !== '') {
      const data = new FormData();
      data.append('category', valueResult);
      data.append('proffession', valueSelection);
      const res = axios.post(`${axios.defaults.baseURL}/busqueda`, data)
        .then((res) => {
          getConsultantsSuccess(res.data);
          history.push('/resultados');
        })
        .catch((e) => console.log(e));
    }
    return (
      <div className='searchConsultant online' onScroll={handleHeader} id='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={false} setValueResult={handleValue} setType={handleSearch} />
        <input type='hidden' name='sector' id='sector' value={valueResult} />
        <input type='hidden' name='profesion' id='profesion' value={valueSelection} />
        <CircleCarousel specialities={specialities} setValue={handleValueSelection} value={valueResult} searchTerm='Sector' />
      </div>
    );
  };

  if (user.rol.name === 'client' && user.status && type === 'profession') {
    if (specialities === []) {
      const data = new FormData();
      data.append('proffession', valueResult);
      const res = axios.post(`${axios.defaults.baseURL}/busqueda`, data)
        .then((res) => {
          getConsultantsSuccess(res.data);
          history.push('/resultados');
        })
        .catch((e) => console.log(e));
    } else if (valueSelection !== '') {
      const data = new FormData();
      data.append('proffession', valueResult);
      data.append('especialidad', valueSelection);
      const res = axios.post(`${axios.defaults.baseURL}/busqueda`, data)
        .then((res) => {
          getConsultantsSuccess(res.data);
          history.push('/resultados');
        })
        .catch((e) => console.log(e));
    }
    return (
      <div className='searchConsultant online' onScroll={handleHeader} id='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={false} setValueResult={handleValue} setType={handleSearch} />
        <input type='hidden' name='profesion' id='profesion' value={valueResult} />
        <input type='hidden' name='especialidad' id='especialidad' value={valueSelection} />
        <CircleCarousel specialities={specialities} setValue={handleValueSelection} value={valueResult} searchTerm='Profesión' />
      </div>
    );
  };

  if (user.rol.name === 'client' && user.status) {
    return (
      <div className='searchConsultant online' onScroll={handleHeader} id='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={false} setValueResult={handleValue} setType={handleSearch} />
      </div>
    );
  };

  return (<Redirect to='/' />);
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getConsultantsSuccess: (e) => dispatch(getConsultantsSuccess(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

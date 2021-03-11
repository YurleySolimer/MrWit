import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import statusReducers from '../reducers/statusReducers';

import '../assets/styles/containers/Search.scss';
import '../assets/styles/components/Searcher.scss';

import background from '../assets/static/images/background1.png';

import CircleCarousel from '../components/CircleCarousel';
import SearchElements from '../components/SearchElements';
import Feedback from '../components/Feedback';
import DataJSON from '../../professions';

import Searcher from '../components/Searcher';

const Search = ({ user, isOnline }) => {

  const [results, setResults] = useState('');
  const [valueResult, setValueResult] = useState('');
  const [valueSelection, setValueSelection] = useState('');
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
    setResults(e);
  };

  const handleValue = (e) => {
    for (let i = 0; i < DataJSON.length; i++) {
      if (Object.getOwnPropertyNames(DataJSON[i])[0] === e) {
        const info = DataJSON[i];
        setValueResult(e);
        setSpecialities(info[e]);
      } else {
        i++;
      }
    }
  };

  const handleValueSelection = (e) => {
    setValueSelection(e);
  };

  if (user === 'client' && !isOnline) {
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher setValueResult={handleValue} setResults={handleSearch} />
        <input type="hidden" name="selection1" value={valueResult} />
        <input type="hidden" name="selection2" value={valueSelection} />
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  if (user === 'client' && !isOnline && results === 'sector') {
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher setValueResult={handleValue} setResults={handleSearch} />
        <input type="hidden" name="selection1" value={valueResult} />
        <input type="hidden" name="selection2" value={valueSelection} />
        <CircleCarousel specialities={specialities} setValue={handleValueSelection} value={valueResult} searchTerm='Sector' />
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  if (user === 'client' && !isOnline && results === 'profession') {
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher setValueResult={handleValue} setResults={handleSearch} />
        <input type="hidden" name="selection1" value={valueResult} />
        <input type="hidden" name="selection2" value={valueSelection} />
        <CircleCarousel specialities={specialities} setValue={handleValueSelection} value={valueResult} searchTerm='Profesión' />
        {/* <SearchElements link='/resultados' className='eight' title='Especialidad' /> */}
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  if (user === 'client' && results === 'sector') {
    return (
      <div className='searchConsultant online' onScroll={handleHeader} id='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher setValueResult={handleValue} setResults={handleSearch} />
        <input type="hidden" name="selection1" value={valueResult} />
        <input type="hidden" name="selection2" value={valueSelection} />
        <CircleCarousel specialities={specialities} setValue={handleValueSelection} value={valueResult} searchTerm='Sector' />
      </div>
    );
  };

  if (user === 'client' && results === 'profession') {
    return (
      <div className='searchConsultant online' onScroll={handleHeader} id='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher setValueResult={handleValue} setResults={handleSearch} />
        <input type="hidden" name="selection1" value={valueResult} />
        <input type="hidden" name="selection2" value={valueSelection} />
        <CircleCarousel specialities={specialities} setValue={handleValueSelection} value={valueResult} searchTerm='Profesión' />
      </div>
    );
  };

  if (user === 'client' && isOnline) {
    return (
      <div className='searchConsultant online' onScroll={handleHeader} id='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher setValueResult={handleValue} setResults={handleSearch} />
        <input type="hidden" name="selection1" value={valueResult} />
        <input type="hidden" name="selection2" value={valueSelection} />
      </div>
    );
  };

  return (<Redirect to='/' />);
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(Search);

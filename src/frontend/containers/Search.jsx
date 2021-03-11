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

import Searcher from '../components/Searcher';

const Search = ({ user, isOnline }) => {

  const [results, setResults] = useState('');
  const [valueResult, setValueResult] = useState('');

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
    setValueResult(e);
  };

  if (user === 'client' && !isOnline) {
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher setValueResult={handleValue} setResults={handleSearch} />
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
        <CircleCarousel value={valueResult} searchTerm='Sector' />
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
        <CircleCarousel value={valueResult} searchTerm='Profesión' />
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
        <CircleCarousel value={valueResult} searchTerm='Sector' />
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
        <CircleCarousel value={valueResult} searchTerm='Profesión' />
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
        <CircleCarousel value={valueResult} searchTerm='Sector' />
      </div>
    );
  };

  return (<Redirect to='/' />);
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(Search);

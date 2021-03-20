import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import statusReducers from '../reducers/statusReducers';

import '../assets/styles/containers/Search.scss';
import '../assets/styles/components/Searcher.scss';

import background from '../assets/static/images/background1.png';

import CircleCarousel from '../components/CircleCarousel';
import Feedback from '../components/Feedback';
import DataJSON from '../../professions';

import Searcher from '../components/Searcher';

const Search = ({ user, isOnline }) => {

  const [results, setResults] = useState('');
  const [valueResult, setValueResult] = useState('');
  const [valueSelection, setValueSelection] = useState('');
  const [specialities, setSpecialities] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(input.sector);
    
    if(!input.sector) {
      if(!input.profesion){
        history.push('/resultados');
      }
      else if(!input.profesion) {
        if(!input.especialidad) {
          const busqueda = {
            proffession: input.profesion
          };
          const res = axios.post('http://localhost:3000/busqueda', busqueda)
          .then((res) => {
            console.log(res.data);
            history.push('/resultados');
          })
          .catch((e) => console.log(e));
        }
        else if(input.especialidad) {          
            const busqueda = {
              proffession: input.profesion,
              especialidad: input.especialidad
            };
            const res = axios.post('http://localhost:3000/busqueda', busqueda)
            .then((res) => {
              console.log(res.data);
              history.push('/resultados');
            })
            .catch((e) => console.log(e));
        }
      }
    }
    else if(input.sector) {
      if(!input.profesion) {
        const busqueda = {
          category: input.sector
        };
        const res = axios.post('http://localhost:3000/busqueda', busqueda)
        .then((res) => {
          console.log(res.data);
          history.push('/resultados');
        })
        .catch((e) => console.log(e));
      }
      else if(input.profesion) {
        const busqueda = {
          category: input.sector,
          proffession: input.profesion
        };
        const res = axios.post('http://localhost:3000/busqueda', busqueda)
        .then((res) => {
          console.log(res.data);
          history.push('/resultados');
        })
        .catch((e) => console.log(e));
      }
    }

  }

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
    for (let i = 0; i < DataJSON.length; i++) {
      if (Object.getOwnPropertyNames(DataJSON[i])[0] === e) {
        const info = DataJSON[i];
        setSpecialities(info[e]);
      } else {
        i++;
      }
    }
  };

  const handleValueSelection = (e) => {
    setValueSelection(e);
  };

  if (user === 'client' && !isOnline && results === 'sector') {
    console.log('entre al escenario del sector y el value es ', valueResult);
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={true} setValueResult={handleValue} setResults={handleSearch} />
        <form onSubmit={handleSubmit}>
        <input type='hidden' name='sector' id='sector' value={valueResult} />
        <input type='hidden' name='profesion' id='profesion' value={valueSelection} />
        </form>
        <CircleCarousel specialities={specialities} setValue={handleValueSelection} value={valueResult} searchTerm='Sector' />
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  if (user === 'client' && !isOnline && results === 'profession') {
    console.log('entre a este escenario de profesión y el value es: ', valueResult);
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={true} setValueResult={handleValue} setResults={handleSearch} />
        <form onSubmit={handleSubmit}>
        <input type='hidden' name='profesion' id='profesion' value={valueResult} />
        <input type='hidden' name='especialidad' id='especialidad' value={valueSelection} />
        </form>
        <CircleCarousel specialities={specialities} setValue={handleValueSelection} value={valueResult} searchTerm='Profesión' />
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  if (user === 'client' && !isOnline) {
    return (
      <div className='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={true} setValueResult={handleValue} setResults={handleSearch} />
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  if (user === 'client' && isOnline && results === 'sector') {
    return (
      <div className='searchConsultant online' onScroll={handleHeader} id='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={false} setValueResult={handleValue} setResults={handleSearch} />
        <form onSubmit={handleSubmit}>
        <input type='hidden' name='sector' id='sector' value={valueResult} />
        <input type='hidden' name='profesion' id='profesion' value={valueSelection} />
        </form>
        <CircleCarousel specialities={specialities} setValue={handleValueSelection} value={valueResult} searchTerm='Sector' />
      </div>
    );
  };

  if (user === 'client' && isOnline && results === 'profession') {
    return (
      <div className='searchConsultant online' onScroll={handleHeader} id='searchConsultant'>
        <div className='searchName__title'>
          <h2 className='searchName__title__message'>Encuentra tu consultor ideal</h2>
        </div>
        <img className='background' src={background} alt='' />
        <Searcher isOffline={false} setValueResult={handleValue} setResults={handleSearch} />
        <form onSubmit={handleSubmit}>
        <input type='hidden' name='profesion' id='profesion' value={valueResult} />
        <input type='hidden' name='especialidad' id='especialidad' value={valueSelection} />
        </form>
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
        <Searcher isOffline={false} setValueResult={handleValue} setResults={handleSearch} />
      </div>
    );
  };

  return (<Redirect to='/' />);
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(Search);

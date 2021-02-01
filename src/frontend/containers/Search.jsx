import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../assets/styles/containers/Search.scss';
import yellow from '../assets/static/assets/intro-yellow.svg';
import blue from '../assets/static/assets/intro-blue.svg';
import one from '../assets/static/assets/signal-one.svg';
import two from '../assets/static/assets/signal-two.svg';
import three from '../assets/static/assets/signal-three.svg';

import Searcher from '../components/Searcher';
import CircleCarousel from '../components/CircleCarousel';
import SearchElements from '../components/SearchElements';
import Feedback from '../components/Feedback';

const Search = ({ user }) => {
  if (user === 'client') {
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
        <Searcher />
        <CircleCarousel searchTerm='Category'>
          <SearchElements link='/resultados' className='one' title='Category' />
          <SearchElements link='/resultados' className='two' title='Category' />
          <SearchElements link='/resultados' className='three' title='Category' />
          <SearchElements link='/resultados' className='four' title='Category' />
          <SearchElements link='/resultados' className='five' title='Category' />
          <SearchElements link='/resultados' className='six' title='Category' />
          <SearchElements link='/resultados' className='seven' title='Category' />
          <SearchElements link='/resultados' className='eight' title='Category' />
        </CircleCarousel>
        <Feedback name='Luis Fernando Méndez' country='Medellín, CO' description='“Me encantó la experiencia, pude resolver los problemas de contabilidad de mi empresa con una sola llamada, es súper práctico”' />
      </div>
    );
  };

  return (<Redirect to='/' />);
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Search);

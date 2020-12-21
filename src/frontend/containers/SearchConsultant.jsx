import React from 'react';
import yellow from '../assets/static/intro-yellow.svg';
import blue from '../assets/static/intro-blue.svg';
import one from '../assets/static/signal-one.svg';
import two from '../assets/static/signal-two.svg';
import three from '../assets/static/signal-three.svg';
import Search from '../components/Search';
import CircleCarousel from '../components/CircleCarousel';
import SearchElements from '../components/SearchElements';
import Feedback from '../components/Feedback';
import '../assets/styles/containers/SearchConsultant.scss';

const SearchConsultant = () => {

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
      <div className='searchObj__Yellow'>
        <img src={yellow} alt='signal search' />
      </div>
      <div className='searchObj__Blue'>
        <img src={blue} alt='signal search' />
      </div>
      <Search />
      <CircleCarousel>
        <SearchElements />
      </CircleCarousel>
      <Feedback />
    </div>
  );
};

export default SearchConsultant;

import React from 'react';
import '../assets/styles/containers/SearchResults.scss';
import background from '../assets/static/intro-yellow.svg';
import icon from '../assets/static/symbol.png';
import Results from '../components/Results';
import OtherResults from '../components/OtherResults';

const SearchResults = () => (
  <div className='SearchResults'>
    <img src={background} alt='' className='SearchResults__background' />
    <Results />
    <span className='SearchResults__others'>Otros consultores activos</span>
    <OtherResults />
    <img src={icon} alt='' className='SearchResults__icon' />
  </div>
);

export default SearchResults;

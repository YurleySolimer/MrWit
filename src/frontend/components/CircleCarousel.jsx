import React from 'react';
import '../assets/styles/components/CircleCarousel.scss';
import { Link } from 'react-router-dom';
import DataSectors from '../../sectors';
import DataJSON from '../../professions';
import SearchElements from './SearchElements';

const CircleCarousel = ({ valueResult, searchTerm }) => {

  function handleSeeMore(event) {
    const main = document.getElementById('main');
    main.classList.add('active');
    event.preventDefault();
  }

  function handleBack(event) {
    const main = document.getElementById('main');
    main.classList.remove('active');
    event.preventDefault();
  }

  if (searchTerm === 'Sector') {
    const { professions } = DataSectors;
    const firstProfessions = [];
    for (let i = 0; i < 7; i++) {
      firstProfessions.push(professions[i]);
    }
    const secondProfessions = [];
    for (let i = 7; i < professions.length; i++) {
      secondProfessions.push(professions[i]);
    }

    const firstReturn = firstProfessions.map((profession) => {
      return (
        <li key={profession}>
          <SearchElements link={`/resultados/?sector=${valueResult}?profession=${profession}`} title={profession} />
        </li>
      );
    });

    const secondReturn = secondProfessions.map((profession) => {
      return (
        <Link className='CircleCarousel__list element' to={`/resultados/?sector=${valueResult}?profession=${profession}`} key={profession}>
          {profession}
        </Link>
      );
    });

    return (
      <div className='CircleCarousel' id='main'>
        <div className='CircleCarousel__carousel'>
          <ul className='circle-container'>
            <li onClick={handleSeeMore}>
              more
            </li>
            {firstReturn}
          </ul>
          <h2 className='Search-Item'>
            {valueResult}
            {' '}
            <br />
            {searchTerm}
          </h2>
        </div>
        <div className='CircleCarousel__list'>
          <div className='CircleCarousel__list element back' onClick={handleBack}>
            Volver
          </div>
          {secondReturn}
        </div>
      </div>
    );
  }

  return (
    <div className='CircleCarousel' id='main'>
      <div className='CircleCarousel__carousel'>
        <ul className='circle-container' />
        <h2 className='Search-Item'>{searchTerm}</h2>
      </div>
    </div>
  );
};

export default CircleCarousel;

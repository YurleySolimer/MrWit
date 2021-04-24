import React from 'react';
import '../assets/styles/components/CircleCarousel.scss';
import { Redirect } from 'react-router-dom';
import DataSectors from '../../sectors';
import SearchElements from './SearchElements';

const CircleCarousel = ({ value, searchTerm, setValue, specialities }) => {

  const handleValue = (e) => {
    setValue(e);
  };

  if (searchTerm === 'Sector') {
    if (value) {

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
            <SearchElements value={profession} handler={setValue} title={profession} />
          </li>
        );
      });

      const secondReturn = secondProfessions.map((profession) => {
        return (
          <button type='button' key={profession} onClick={() => handleValue(profession)} className='CircleCarousel__list element'>
            {profession}
          </button>
        );
      });
      const handleMore = () => {
        const main = document.getElementById('main');
        main.classList.add('active');
      };

      const handleLess = () => {
        const main = document.getElementById('main');
        main.classList.remove('active');
      };

      return (
        <div className='CircleCarousel' id='main'>
          <div className='CircleCarousel__carousel'>
            <ul className='circle-container'>
              <li>
                <SearchElements value='more' handler={handleMore} title='Más opciones' more={true} />
              </li>
              {firstReturn}
            </ul>
            <h2 className='Search-Item'>
              {searchTerm}
              {' '}
              <br />
              {value}
            </h2>
          </div>
          <div className='CircleCarousel__list'>
            <button onClick={handleLess} type='button' className='CircleCarousel__list element back'>
              Volver
            </button>
            {secondReturn}
          </div>
        </div>
      );
    }

    const { sectors } = DataSectors;

    const firstSectors = [];
    for (let i = 0; i < 7; i++) {
      firstSectors.push(sectors[i]);
    }
    const secondSectors = [];
    for (let i = 7; i < sectors.length; i++) {
      secondSectors.push(sectors[i]);
    }

    const firstReturn = firstSectors.map((sector) => {
      return (
        <li key={sector}>
          <SearchElements value={sector} handler={setValue} title={sector} />
        </li>
      );
    });

    const secondReturn = secondSectors.map((sector) => {
      return (
        <button type='button' key={sector} onClick={() => handleValue(sector)} className='CircleCarousel__list element'>
          {sector}
        </button>
      );
    });
    const handleMore = () => {
      const main = document.getElementById('main');
      main.classList.add('active');
    };

    const handleLess = () => {
      const main = document.getElementById('main');
      main.classList.remove('active');
    };

    return (
      <div className='CircleCarousel' id='main'>
        <div className='CircleCarousel__carousel'>
          <ul className='circle-container'>
            <li>
              <SearchElements value='more' handler={handleMore} title='Más opciones' more={true} />
            </li>
            {firstReturn}
          </ul>
          <h2 className='Search-Item'>
            {searchTerm}
            {' '}
            <br />
            {value}
          </h2>
        </div>
        <div className='CircleCarousel__list'>
          <button onClick={handleLess} type='button' className='CircleCarousel__list element back'>
            Volver
          </button>
          {secondReturn}
        </div>
      </div>
    );
  }

  if (searchTerm === 'Profesión') {

    if (!value) {
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
            <SearchElements value={profession} handler={setValue} title={profession} />
          </li>
        );
      });

      const secondReturn = secondProfessions.map((profession) => {
        return (
          <button type='button' key={profession} onClick={() => handleValue(profession)} className='CircleCarousel__list element'>
            {profession}
          </button>
        );
      });
      const handleMore = () => {
        const main = document.getElementById('main');
        main.classList.add('active');
      };

      const handleLess = () => {
        const main = document.getElementById('main');
        main.classList.remove('active');
      };

      return (
        <div className='CircleCarousel' id='main'>
          <div className='CircleCarousel__carousel'>
            <ul className='circle-container'>
              <li>
                <SearchElements value='more' handler={handleMore} title='Más opciones' more={true} />
              </li>
              {firstReturn}
            </ul>
            <h2 className='Search-Item'>
              {searchTerm}
              {' '}
              <br />
              {value}
            </h2>
          </div>
          <div className='CircleCarousel__list'>
            <button onClick={handleLess} type='button' className='CircleCarousel__list element back'>
              Volver
            </button>
            {secondReturn}
          </div>
        </div>
      );
    }

    if (specialities.length > 7) {
      const firstSpecialities = [];
      for (let i = 0; i < 7; i++) {
        firstSpecialities.push(specialities[i]);
      }
      const secondSpecialities = [];
      for (let i = 7; i < specialities.length; i++) {
        secondSpecialities.push(specialities[i]);
      }

      const firstReturn = firstSpecialities.map((profession) => {
        return (
          <li key={profession}>
            <SearchElements value={profession} handler={setValue} title={profession} />
          </li>
        );
      });

      const secondReturn = secondSpecialities.map((profession) => {
        return (
          <button type='button' onClick={() => handleValue(profession)} key={profession} className='CircleCarousel__list element'>
            {profession}
          </button>
        );
      });

      const handleMore = () => {
        const main = document.getElementById('main');
        main.classList.add('active');
      };

      const handleLess = () => {
        const main = document.getElementById('main');
        main.classList.remove('active');
      };

      return (
        <div className='CircleCarousel' id='main'>
          <div className='CircleCarousel__carousel'>
            <ul className='circle-container'>
              <li>
                <SearchElements value='more' handler={handleMore} title='Más opciones' more={true} />
              </li>
              {firstReturn}
            </ul>
            <h2 className='Search-Item'>
              {searchTerm}
              {' '}
              <br />
              {value}
            </h2>
          </div>
          <div className='CircleCarousel__list'>
            <button onClick={handleLess} type='button' className='CircleCarousel__list element back'>
              Volver
            </button>
            {secondReturn}
          </div>
        </div>
      );
    } if (specialities.length <= 7 && specialities.length >= 1) {

      const specialitiesReturn = specialities.map((profession) => {
        return (
          <li key={profession}>
            <SearchElements value={profession} handler={setValue} title={profession} />
          </li>
        );
      });

      return (
        <div className='CircleCarousel' id='main'>
          <div className='CircleCarousel__carousel'>
            <ul className='circle-container'>
              {specialitiesReturn}
            </ul>
            <h2 className='Search-Item'>
              {searchTerm}
              {' '}
              <br />
              {value}
            </h2>
          </div>
        </div>
      );
    }

    return (
      <Redirect to='/resultados' />
    );
  };
};

export default CircleCarousel;

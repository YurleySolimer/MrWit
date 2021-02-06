import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/OtherResults.scss';
import minimal from '../assets/static/logo/mrwit-logo-minimal.png';
import noresults from '../assets/static/icons/noresults.svg';
import star from '../assets/static/icons/star.svg';

const OtherResults = ({ category, top, results, isFavorite }) => {

  if (top) {

    return (
      <div className='OtherResults'>
        <div className='OtherResults__category'>
          <span className='OtherResults__category__name'>
            {category}
          </span>
          <img src={minimal} alt='profile' className='OtherResults__category__img' />
        </div>
        <div className='OtherResults__profiles'>
          {results.map((consultant) => {
            return (
              <div className='profileOtherResults' key={consultant.id}>
                <Link to={`/resultados/${consultant.id}`}>
                  <div className='OtherResults__profiles__profile'>
                    <p className='profile__name'>{consultant.name}</p>
                    <img src={consultant.avatar} alt={consultant.name} className='profile__img' />
                    <div className="rating">
                      <img src={star} alt="rating" />
                      <img src={star} alt="rating" />
                      <img src={star} alt="rating" />
                      <img src={star} alt="rating" />
                      <img src={star} alt="rating" />
                    </div>
                    <p className='profile__title'>{consultant.profession}</p>
                    <p className='profile__time'>{consultant.hoursGive} hrs dadas</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (isFavorite) {
    return (
      <div className='OtherResults'>
        <div className='OtherResults__category'>
          <span className='OtherResults__category__name'># </span>
          <span className='OtherResults__category__name'>{category}</span>
        </div>
        <div className='OtherResults__profiles'>
          {results.map((consultant) => {
            return (
              <div className='profileOtherResults' key={consultant.id}>
                <Link to={`/favorito/${consultant.id}`}>
                  <div className='OtherResults__profiles__profile'>
                    <p className='profile__name'>{consultant.name}</p>
                    <img src={consultant.avatar} alt={consultant.name} className='profile__img' />
                    <div className="rating">
                      <img src={star} alt="rating" />
                      <img src={star} alt="rating" />
                      <img src={star} alt="rating" />
                      <img src={star} alt="rating" />
                      <img src={star} alt="rating" />
                    </div>
                    <p className='profile__title'>{consultant.profession}</p>
                    <p className='profile__time'>{consultant.hoursGive} hrs dadas</p>
                     </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (results) {
    return (
      <div className='OtherResults'>
        <div className='OtherResults__category'>
          <span className='OtherResults__category__name'># </span>
          <span className='OtherResults__category__name'>{category}</span>
        </div>
        <div className='OtherResults__profiles'>
          {results.map((consultant) => {
            return (
              <div className='profileOtherResults' key={consultant.id}>
                <Link to={`/resultados/${consultant.id}`}>
                  <div className='OtherResults__profiles__profile'>
                    <p className='profile__name'>{consultant.name}</p>
                    <img src={consultant.avatar} alt={consultant.name} className='profile__img' />
                    <div className="rating">
                      <img src={star} alt="rating" />
                      <img src={star} alt="rating" />
                      <img src={star} alt="rating" />
                      <img src={star} alt="rating" />
                      <img src={star} alt="rating" />
                    </div>
                    <p className='profile__title'>{consultant.profession}</p>
                    <p className='profile__time'>{consultant.hoursGive} hrs dadas</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className='OtherResults'>
      <div className='OtherResults__category'>
        <span className='OtherResults__category__name'># </span>
        <span className='OtherResults__category__name'>{category}</span>
      </div>
      <div className='OtherResults__noresults'>
        <img src={noresults} alt='no results icon' className='OtherResults__noresults__img' />
        <h2 className='OtherResults__noresults__text'>¡Vaya! En este momento no hay ninguno disponible, intenta más tarde.</h2>
      </div>
    </div>
  );

};

export default OtherResults;

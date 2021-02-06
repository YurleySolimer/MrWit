import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Results.scss';
import { Link } from 'react-router-dom';
import star from '../assets/static/icons/star.svg';

const Results = ({ isOnline, consultants }) => {

  if (isOnline) {
    return (
      <div className='Results'>
        <h3 className='Results__title'>Resultados</h3>
        <div className='Results__profiles'>
          {consultants.map((consultant) => {
            return (
              <div className='Consultant__result' key={consultant.id}>
                <Link to={`/resultados/${consultant.id}`}>
                  <p className='profile__name'>{consultant.name}</p>
                  <div className='Results__profiles__profile'>
                    <img src={consultant.avatar} alt={consultant.name} className='profile__img' />
                    <p className='profile__title'>{consultant.profession}</p>
                  <p className="profile__time">{consultant.hoursGive} hrs dadas</p>
                    <div className="rating">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  <p className="profile__phrase">{consultant.phrase}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className='Results'>
      <h3 className='Results__title'>Resultados</h3>
      <div className='Results__profiles'>
        {consultants.map((consultant) => {
          return (
            <div className='Consultant__result' key={consultant.id}>
              <Link to={`/resultados/${consultant.id}`}>
                <p className='profile__name'>{consultant.name}</p>
                <div className='Results__profiles__profile'>
                  <img src={consultant.avatar} alt={consultant.name} className='profile__img' />
                  <p className='profile__category'>{consultant.category}</p>
                  <p className='profile__title'>{consultant.profession}</p>
                  <p className="profile__time">{consultant.hoursGive} hrs dadas</p>
                  <div className="rating">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <p className="profile__phrase">{consultant.phrase}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapDispatchToProps = (state) => {
  return {
    isOnline: state.isOnline,
    consultants: state.consultants,
  };
};

export default connect(mapDispatchToProps, null)(Results);

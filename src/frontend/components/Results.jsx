import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Results.scss';
import { Link } from 'react-router-dom';

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
                  <div className='Results__profiles__profile'>
                    <img src={consultant.avatar} alt={consultant.name} className='profile__img' />
                    <p className='profile__name'>{consultant.name}</p>
                    <p className='profile__title'>{consultant.profession}</p>
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
                <div className='Results__profiles__profile'>
                  <img src={consultant.avatar} alt={consultant.name} className='profile__img' />
                  <p className='profile__name'>{consultant.name}</p>
                  <p className='profile__title'>{consultant.profession}</p>
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

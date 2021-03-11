import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Co } from 'react-flags-select';
import { getConsultants } from '../actions/mrwit';
import '../assets/styles/components/Results.scss';
import star from '../assets/static/icons/star.svg';

const Results = ({ consultantData, getConsultants }) => {

  useEffect(() => {
    getConsultants();
  }, []);

  console.log(consultantData.consultants);
  return consultantData.isLoading ? (
    <h2>Loading</h2>
  ) : consultantData.error ? (
    <h2>{consultantData.error}</h2>
  ) : (
    <div className='Results'>
      <h3 className='Results__title'>Resultados</h3>
      <div className='Results__profiles'>
        {
          consultantData &&
          consultantData.consultants &&
          consultantData.consultants.map((consultant) => {
            console.log(consultant);
            return (
              <div className='Consultant__result' key={consultant._id}>
                <Link to={`/resultados/${consultant._id}`}>
                  <p className='profile__name'><Co /> {consultant.name}</p>
                  <div className='Results__profiles__profile'>
                    <img src={consultant.avatar} alt={consultant.name} className='profile__img' />
                    <p className='profile__title'>{consultant.profession}</p>
                    <p className='profile__time'>{consultant.hoursGive} hrs dadas</p>
                    <div className='rating'>
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                    </div>
                    <p className='profile__phrase'>{consultant.phrase}</p>
                  </div>
                </Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    consultantData: state.mrwitReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getConsultants: () => dispatch(getConsultants()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);

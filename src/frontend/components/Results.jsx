import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Ar, Ag, Bb, Bm, Bo, Br, Bs, Bz, Cl, Co, Cr, Cu, Cw, Dm, Do, Ec, Sv, Gt, Jm, Mx, Pa, Py, Pe, Pr, Uy, Ve } from 'react-flags-select';
import { getConsultants, getConsultantsSuccess } from '../actions/mrwit';
import '../assets/styles/components/Results.scss';
import star from '../assets/static/icons/star.svg';

const Results = ({ consultantData, getConsultants }) => {

  const getCountry = (value) => {
    switch (value) {
      case 'AR':
        return <Ar />;
      case 'AG':
        return <Ag />;
      case 'BB':
        return <Bb />;
      case 'BM':
        return <Bm />;
      case 'BO':
        return <Bo />;
      case 'BR':
        return <Br />;
      case 'BS':
        return <Bs />;
      case 'BZ':
        return <Bz />;
      case 'CL':
        return <Cl />;
      case 'CO':
        return <Co />;
      case 'CR':
        return <Cr />;
      case 'CU':
        return <Cu />;
      case 'CW':
        return <Cw />;
      case 'DM':
        return <Dm />;
      case 'DO':
        return <Do />;
      case 'EC':
        return <Ec />;
      case 'SV':
        return <Sv />;
      case 'GT':
        return <Gt />;
      case 'JM':
        return <Jm />;
      case 'MX':
        return <Mx />;
      case 'PA':
        return <Pa />;
      case 'PY':
        return <Py />;
      case 'PE':
        return <Pe />;
      case 'PR':
        return <Pr />;
      case 'UY':
        return <Uy />;
      case 'VE':
        return <Ve />;
    }
  };

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
                  <p className='profile__name'>
                    {getCountry(consultant.country)}
                    {' '}
                    {consultant.name}
                  </p>
                  <div className='Results__profiles__profile'>
                    <img src={`./${consultant.picturePath}`} alt={consultant.pictureName} className='profile__img' />
                    <p className='profile__title'>{consultant.profession}</p>
                    <p className='profile__time'>
                      {consultant.hoursGive || 0}
                      {' '}
                      hrs dadas
                    </p>
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
    getConsultants: () => dispatch(getConsultants(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);

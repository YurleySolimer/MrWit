import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import '../assets/styles/containers/Consultants.scss';
import background from '../assets/static/assets/intro-blue.svg';
import Results from '../components/Results';
import OtherResults from '../components/OtherResults';
import lupa from '../assets/static/icons/lupa.svg';
import darkArrow from '../assets/static/assets/darkgrey_arrow.svg';
import lightArrow from '../assets/static/assets/lightgrey_arrow.svg';

const Consultants = ({ isOnline, user }) => {

  if (!isOnline || user === 'consultant') {
    return (<Redirect to='/' />);
  }

  if (user === 'client') {
    return (
      <div className='Consultants'>
        <div className='Consultants__headlin'>
          <div className='Results__headlineSearch__word'>
            <p>Palabra buscada</p>
            <img src={darkArrow} alt='' />
          </div>
          <div className='Results__headlineSearch__type'>
            <p>tipo de busqueda</p>
            <img src={lightArrow} alt='' />
          </div>
          <Link to='/buscar'>
            <div className='Results__headlineSearch__search'>
              <img src={lupa} alt='' />
            </div>
          </Link>
        </div>
        <img src={background} alt='' className='Consultants__background' />
        <Results />
        <span className='Consultants__others'>Otros consultores activos</span>
        <OtherResults top={true} category='Top' results={true} />
        <OtherResults category='Finanzas' results={true} />
        <OtherResults category='Liderazgo' results={false} />
        <OtherResults category='Economía  ' results={true} />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isOnline: state.isOnline,
  };
};

export default connect(mapStateToProps, null)(Consultants);

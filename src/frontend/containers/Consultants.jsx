import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import statusReducers from '../reducers/statusReducers';
import * as actionsStatus from '../actions';
import '../assets/styles/containers/Consultants.scss';
import background from '../assets/static/assets/intro-blue.svg';
import Results from '../components/Results';
import OtherResults from '../components/OtherResults';
import lupa from '../assets/static/icons/lupa.svg';
import darkArrow from '../assets/static/assets/darkgrey_arrow.svg';
import lightArrow from '../assets/static/assets/lightgrey_arrow.svg';

const Consultants = (props) => {

  const { isOnline, user, consultants1, consultants2, consultants3 } = props;
  console.log(props);
  if (user === 'consultant') {
    return (<Redirect to='/' />);
  }

  if (user === 'client' || !isOnline) {
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
        <OtherResults top={true} category='Top' results={consultants1} />
        <OtherResults top={false} category='Finanzas' results={consultants2} />
        <OtherResults top={false} category='Liderazgo' results={false} />
        <OtherResults top={false} category='Economía  ' results={consultants3} />
      </div>
    );
  };
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(Consultants);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import CurrencyFormat from 'react-currency-format';
import * as actionsStatus from '../actions';
import '../assets/styles/containers/Consultants.scss';
import background from '../assets/static/images/background1.png';
import Results from '../components/Results';
import lupa from '../assets/static/icons/lupa.svg';
import darkArrow from '../assets/static/assets/darkgrey_arrow.svg';
import lightArrow from '../assets/static/assets/lightgrey_arrow.svg';
import Modal from '../portals/Modal';
import Loading from '../components/Loading';
import { clearSearch } from '../actions/mrwit';

const Consultants = (props) => {
  const [selected, setSelected] = useState('');
  const { status, mrwit, clearSearch } = props;
  const { user, currency } = status;
  const { search, isLoading } = mrwit;
  const history = useHistory();

  const handleBack = () => {
    clearSearch();
    history.push('/buscar');
  };

  if (user.status) {
    const { rol, status } = user;

    if (rol.name === 'consultant') {
      return (<Redirect to='/' />);
    }

    const handleHeader = () => {
      const d = document.getElementById('consultants');
      if (d.scrollTop >= 50) {
        props.setHeader(true);
      } else {
        props.setHeader(false);
      }
    };

    if (rol.name === 'client' && status.logueado) {
      return (
        <div className='Consultants online' onScroll={handleHeader} id='consultants'>
          <span className="consultants__balance">
            <b>Saldo: </b>
            <CurrencyFormat value={140030} displayType='text' thousandSeparator={true} prefix='$' suffix={currency} />
          </span>
          <div className='Consultants__headlin'>
            <div className='Results__headlineSearch__word'>
              <p>{search.busqueda === 'Sector y Profesion' ? search.sector : (search.busqueda === 'Profesion y especialidad' ? search.proffession : '')}</p>
              <img src={darkArrow} alt='' />
            </div>
            <div className='Results__headlineSearch__type'>
              <p>{search.busqueda === 'Sector y Profesion' ? search.proffession : (search.busqueda === 'Profesion y especialidad' ? search.especialidad : '')}</p>
              <img src={lightArrow} alt='' />
            </div>
            <button type='button' className='Results__headlineSearch__search' onClick={handleBack}>
              <img src={lupa} alt='' />
            </button>
          </div>
          <img src={background} alt='' className='Consultants__background' />
          <div className="filterResults">
            <span>Filtrar por país</span>
            <ReactFlagsSelect
              placeholder='Seleccionar país'
              selected={selected}
              onSelect={(e) => { setSelected(e); }}
              countries={["AR", "AG", "BB", "BM", "BO", "BR", "BS", "BZ", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "SV", "GT", "JM", "MX", "PA", "PY", "PE", "PR", "UY", "VE"]}
            />
          </div>
          <Results />
          <Modal transparent={true} noButton={true} isOpen={isLoading}>
            <Loading />
          </Modal>
        </div>
      );
    };
  };
  return (
    <div className='Consultants'>
      <div className='Consultants__headlin'>
        <div className='Results__headlineSearch__word'>
          <p>{search.busqueda === 'Sector y Profesion' ? search.sector : (search.busqueda === 'Profesion y especialidad' ? search.proffession : '')}</p>
          <img src={darkArrow} alt='' />
        </div>
        <div className='Results__headlineSearch__type'>
          <p>{search.busqueda === 'Sector y Profesion' ? search.proffession : (search.busqueda === 'Profesion y especialidad' ? search.especialidad : '')}</p>
          <img src={lightArrow} alt='' />
        </div>
        <button className='Results__headlineSearch__search' type='button' onClick={handleBack}>
          <img src={lupa} alt='' />
        </button>
      </div>
      <img src={background} alt='' className='Consultants__background' />
      <div className="filterResults">
        <span>Filtrar por país</span>
        <ReactFlagsSelect
          placeholder='Seleccionar país'
          selected={selected}
          onSelect={(e) => { setSelected(e); }}
          countries={["AR", "AG", "BB", "BM", "BO", "BR", "BS", "BZ", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "SV", "GT", "JM", "MX", "PA", "PY", "PE", "PR", "UY", "VE"]}
        />
      </div>
      <Results />
      <Modal transparent={true} noButton={true} isOpen={isLoading}>
        <Loading />
      </Modal>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return {
    status: reducers.statusReducers,
    mrwit: reducers.mrwitReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSearch: () => dispatch(clearSearch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Consultants);

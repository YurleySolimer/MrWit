import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import statusReducers from '../reducers/statusReducers';
import * as actionsStatus from '../actions';
import '../assets/styles/containers/Consultants.scss';
import background from '../assets/static/images/background1.png';
import Results from '../components/Results';
import OtherResults from '../components/OtherResults';
import lupa from '../assets/static/icons/lupa.svg';
import darkArrow from '../assets/static/assets/darkgrey_arrow.svg';
import lightArrow from '../assets/static/assets/lightgrey_arrow.svg';

const Consultants = (props) => {
  const [selected, setSelected] = useState('');
  const { isOnline, user, consultants1, consultants2, consultants3, currency } = props;
  if (user === 'consultant') {
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

  if (user === 'client' && isOnline) {
    return (
      <div className='Consultants online' onScroll={handleHeader} id='consultants'>
        <span className="consultants__balance">
          <b>Saldo: </b>14.000 {currency}
        </span>
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
        <span className='Consultants__others'>Otros consultores activos</span>
        <OtherResults top={true} category='Top' results={consultants1} />
        <OtherResults top={false} category='Finanzas' results={consultants2} />
        <OtherResults top={false} category='Liderazgo' results={false} />
        <OtherResults top={false} category='Economía  ' results={consultants3} />
      </div>
    );
  };
  if (user === 'client' && !isOnline) {
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

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import statusReducers from '../reducers/statusReducers';
import * as actionsStatus from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo/mrwit-logo.png';
import config from '../assets/static/icons/config.svg';
import close from '../assets/static/icons/close.svg';

const Header = (props) => {

  const history = useHistory();

  // eslint-disable-next-line class-methods-use-this
  function handleClick() {
    const menu = document.getElementById('configMenu');
    const icon = document.getElementById('headerOpenMenu');
    menu.classList.add('active');
    icon.classList.add('hidden');
  };

  // eslint-disable-next-line class-methods-use-this
  function handleClose() {
    const icon = document.getElementById('headerOpenMenu');
    const menu = document.getElementById('configMenu');
    menu.classList.remove('active');
    icon.classList.remove('hidden');
  }

  function handleLogout() {
    props.setUser('client');
    props.setIsOnline(true);
    props.setIsSearch(true);
    props.setIsCall(true);
    history.push('/');

  }

  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/'>
          <img className='header__container__img' src={logo} alt='Mr Wit, la plataforma donde podrás encontrar a los consultores que necesitas.' />
        </Link>
      </div>
      <div className='header__container'>
        <button type='button' className='header__container__button' onClick={handleClick}>
          <img id='headerOpenMenu' src={config} alt='Abrir menú secundario' />
        </button>
      </div>

      <div id='configMenu' className='config__menu'>
        <button type='button' onClick={handleClose} className='config__menu__close'>
          <img src={close} alt='Cerrar menú secundario' />
        </button>

        <div className='config__menu__body'>
          <nav aria-label='menú secundario'>
            <ul>
              <li><Link to='terms'>Términos y condiciones</Link></li>
              <li><Link to='policys'>Políticas de privacidad</Link></li>
              <li><button onClick={handleLogout}>Cerrar sesión</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(Header);

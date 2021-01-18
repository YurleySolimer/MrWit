import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo/mrwit-logo.png';
import config from '../assets/static/icons/config.svg';
import close from '../assets/static/icons/close.svg';

class Header extends React.Component {

  // eslint-disable-next-line class-methods-use-this
  handleClick() {
    const menu = document.getElementById('configMenu');
    menu.classList.add('active');
  };

  // eslint-disable-next-line class-methods-use-this
  handleClose() {
    const menu = document.getElementById('configMenu');
    menu.classList.remove('active');
  }

  render() {
    return (
      <header className='header'>
        <div className='header__container'>
          <Link to='/'>
            <img className='header__container__img' src={logo} alt='Mr Wit, la plataforma donde podrás encontrar a los consultores que necesitas.' />
          </Link>
        </div>
        <div className='header__container'>
          <button type='button' className='header__container__button' onClick={this.handleClick}>
            <img src={config} alt='Abrir menú secundario' />
          </button>
        </div>

        <div id='configMenu' className='config__menu'>
          <button type='button' onClick={this.handleClose} className='config__menu__close'>
            <img src={close} alt='Cerrar menú secundario' />
          </button>

          <div className='config__menu__body'>
            <nav aria-label='menú secundario'>
              <ul>
                <li><Link to='terms'>Términos y condiciones</Link></li>
                <li><Link to='policys'>Políticas de privacidad</Link></li>
                <li><Link to='logout'>Cerrar sesión</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  };
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Menu.scss';
import wallet from '../assets/static/icons/wallet.svg';
import history from '../assets/static/icons/history.svg';
import schedule from '../assets/static/icons/schedule.svg';
import more from '../assets/static/icons/more.svg';

const Menu = () => {

  function handleMore() {
    const menuMore = document.getElementById('menu__more');
    menuMore.classList.toggle('active');
  }

  return (
    <>
      <nav className='menu'>
        <Link to='/wallet' className='menu__item'>
          <div className='menu__item__inner'>
            <img src={wallet} alt='Ir a la cartera' />
            <span>Wallet</span>
          </div>
        </Link>
        <Link to='/historial' className='menu__item'>
          <div className='menu__item__inner'>
            <img src={history} alt='Ir al historial' />
            <span>Historial</span>
          </div>
        </Link>
        <Link to='Agenda' className='menu__item'>
          <div className='menu__item__inner'>
            <img src={schedule} alt='Ir a la agenda' />
            <span>Agenda</span>
          </div>
        </Link>
        <button type='button' onClick={handleMore} className='menu__more'>
          <img src={more} alt='Más opciones' />
          <span>Más</span>
        </button>
      </nav>
      <nav id='menu__more' className='menu__more__toggle'>
        <ul>
          <Link to='/ayuda'>
            <li className='menu__more__toggle__first'>Ayuda</li>
          </Link>
          <Link to='/blog'>
            <li>Blog</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
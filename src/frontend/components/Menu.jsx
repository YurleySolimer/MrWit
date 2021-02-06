import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Menu.scss';
import wallet from '../assets/static/icons/wallet.svg';
import history from '../assets/static/icons/history.svg';
import schedule from '../assets/static/icons/schedule.svg';
import more from '../assets/static/icons/more.svg';
import lupa from '../assets/static/icons/lupaDark.svg';

const Menu = (props) => {

  const { user } = props;

  function handleMore() {
    const menuMore = document.getElementById('menu__more');
    menuMore.classList.toggle('active');
  }

  // const handleClient = (event) => {
  //   event.preventDefault();
  //   props.setUser('client');
  //   props.setIsOnline(true);
  // };
  // const handleOffline = (event) => {
  //   event.preventDefault();
  //   props.setUser('client');
  //   props.setIsOnline(false);
  // };
  // const handleConsultant = (event) => {
  //   event.preventDefault();
  //   props.setUser('consultant');
  //   props.setIsOnline(true);
  // };

  if (user === 'client') {
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
          <Link to='/buscar' className='menu__item'>
            <div className='menu__item__inner search'>
              <img src={lupa} alt='Ir a la busqueda' />
              <span>Buscar</span>
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
            {/* <button onClick={handleOffline} type='button'>
              <li>Offline</li>
            </button>
            <button onClick={handleConsultant} type='button'>
              <li>Consultor</li>
            </button>
            <button onClick={handleClient} type='button'>
              <li>Cliente</li>
            </button> */}
          </ul>
        </nav>
      </>
    );
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
          {/* <button onClick={handleOffline} type='button'>
            <li>Offline</li>
          </button>
          <button onClick={handleConsultant} type='button'>
            <li>Consultor</li>
          </button>
          <button onClick={handleClient} type='button'>
            <li>Cliente</li>
          </button> */}
        </ul>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isOnline: state.isOnline,
  };
};

// const mapDispatchToProps = {
//   setIsOnline,
//   setUser,
// };

export default connect(mapStateToProps, null)(Menu);

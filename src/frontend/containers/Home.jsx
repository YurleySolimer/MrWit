/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Redux

import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import statusReducers from '../reducers/statusReducers';
import * as actionsStatus from '../actions';

// Components

import SelectionIntro from '../components/SelectionIntro';
import Intro from '../components/Intro';
import NextDates from '../components/NextDates';
import OtherResults from '../components/OtherResults';

// Styles

import '../assets/styles/containers/Home.scss';
import '../assets/styles/components/CardButton.scss';

// Assets

import pen from '../assets/static/icons/pen.svg';
import background from '../assets/static/images/background1.png';
import profile from '../assets/static/images/profile_4.jpg';
import star from '../assets/static/icons/star.svg';
import lupa from '../assets/static/icons/lupaDark.svg';
import starE from '../assets/static/icons/emptyStar.svg';
import inactive from '../assets/static/icons/inactive.svg';

// Modals

import Modal from '../portals/Modal';
import SearchType from '../portals/SearchType';
import EditProfile from '../portals/EditProfile';
import Inactive from '../portals/Inactive';

const Home = (props) => {

  // Agregar botón de compartir al perfil de MrWit del consultor

  const { isOnline, name, user, consultants2, consultants3, currency } = props;

  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(true);
  const [busy, setBusy] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleClose(e) {
    setIsOpen(false);
  }

  function handleOpen(e) {
    setIsOpen(true);
  }

  function handleInactive() {
    setBusy({ status: true });
  }

  function handleCloseInactive(e) {
    setBusy(false);
  }

  function handlEditProfile() {
    setEdit({ edit: true });
  }

  function handleCloseEdit(e) {
    setEdit(false);
  }

  const history = useHistory();

  function handleClickClients() {
    props.setUser('client');
    history.push('/buscar');
  }

  function handleClickConsultants() {
    props.setUser('consultant');
    history.push('/signup');
  }

  const handleHeader = () => {
    const d = document.getElementById('dashboard');
    if (d.scrollTop >= 50) {
      props.setHeader(true);
    } else {
      props.setHeader(false);
    }
  };

  console.log(props);

  if (isOnline && user === 'consultant') {
    return (
      <div className='dashboard' onScroll={handleHeader} id='dashboard'>
        <img className='background' src={background} alt='background' />
        <div className='dashboard__body'>
          <h2 className='dashboard__message'>
            ¡Bienvenido de vuelta,
            <br />
            {name}
            !
          </h2>
          <div className='dashboard__profile'>
            <button onClick={handleInactive} type='button' className='changeStatus'>
              <img src={inactive} alt='Cambiar a ocupado' />
            </button>
            <Modal isOpen={busy} onClose={handleCloseInactive}>
              <Inactive onClose={handleCloseInactive} status={status} setStatus={setStatus} />
            </Modal>
            <button onClick={handlEditProfile} type='button' className='editProfile'>
              <img src={pen} alt='editar perfil' />
            </button>
            <Modal isOpen={edit} onClose={handleCloseEdit}>
              <EditProfile onClose={handleCloseEdit} />
            </Modal>
            <div className='dashboard__profile--left'>
              <div className='dashboard__profile--left--pic__co'>
                <img src={profile} className='profile__pic' alt='imagen de perfil' />
                <div className={`profile__pic__status__dashboard ${status}`}>{' '}</div>
              </div>
              <div className='profile__rating'>
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={starE} alt='' />
              </div>
              <h3 className='profile__profession'>Profesión</h3>
              <p className='profile__speciality'>Especialidad</p>
            </div>
            <div className='dashboard__profile--right'>
              <div className='profile__card--header'>
                <span className='card__header--category'>Categoría</span>
                <span className='card__header--subcategory'>Sub - categoría</span>
              </div>
              <p>¡Aún no has escrito una descripción! Por favor haz click en editar en el botón con forma de lapiz arriba.</p>
              <div className='profile__card--footer'>
                <span className='card__footer--ability'>#Habilidad 1</span>
                <span className='card__footer--ability'>#Habilidad 2</span>
                <span className='card__footer--ability'>#Habilidad 3</span>
              </div>
            </div>
          </div>
        </div>
        <NextDates />
        <h3 className='otherResults__title'>Consultores destacados en tu área</h3>
        <OtherResults category='Habilidad1' results={consultants3} />
      </div>
    );
  }

  if (isOnline && user === 'client') {
    return (
      <div className='dashboard' onScroll={handleHeader} id='dashboard'>
        <img className='background' src={background} alt='background' />
        <div className='dashboard__body'>
          <h2 className='dashboard__message'>
            Bienvenido, {name}.
          </h2>
          <span className="dashboard__balance">
            <b>Saldo: </b>14.000 { currency }
          </span>
          <div className='dashboard__CTA'>
            <div className='Search'>
              <input type='text' placeholder='¿Qué necesitas?' className='Search__input' />
              <button type='submit' onClick={handleOpen} className='Search__submit'>
                <img src={lupa} alt='Buscador' />
              </button>
              <Modal isOpen={isOpen} onClose={handleClose}>
                <SearchType onClose={handleClose} />
              </Modal>
            </div>
          </div>
        </div>
        <OtherResults category='Mis Favoritos' isFavorite={true} results={consultants2} />
        <OtherResults category='Últimos consultores' results={consultants3} />
      </div>
    );
  }

  return (
    <div className='home'>
      <Intro />
      <SelectionIntro>
        <div className='cardButton'>
          <button type='button' className='CardClientSelection' onClick={handleClickClients}>
            Clientes
          </button>
          <h3 className='cardButton__title'>¡CONSULTAR AHORA!</h3>
        </div>
        <div className='cardButton'>
          <button type='button' className='CardConsultorSelection' onClick={handleClickConsultants}>
            Consultores
          </button>
          <h3 className='cardButton__title'>¡REGÍSTRATE!</h3>
        </div>
      </SelectionIntro>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(Home);

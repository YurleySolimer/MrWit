/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Redux

import { connect } from 'react-redux';
import axios from 'axios';
import * as actionsStatus from '../actions';

// Components

import SelectionIntro from '../components/SelectionIntro';
import Intro from '../components/Intro';
import NextDates from '../components/NextDates';
import OtherResults from '../components/OtherResults';
import Searcher from '../components/Searcher';

// Styles

import '../assets/styles/containers/Home.scss';
import '../assets/styles/components/CardButton.scss';

// Assets

import pen from '../assets/static/icons/pen.svg';
import background from '../assets/static/images/background1.png';
import star from '../assets/static/icons/star.svg';
import starE from '../assets/static/icons/emptyStar.svg';
import inactive from '../assets/static/icons/inactive.svg';

// Modals

import Modal from '../portals/Modal';
import EditProfile from '../portals/EditProfile';
import Inactive from '../portals/Inactive';

const Home = (props) => {

  // Agregar botón de compartir al perfil de MrWit del consultor
  const { user, consultants2, consultants3, currency } = props;

  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(true);
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
    props.setUser({ ...user, rol: { name: 'client' } });
    history.push('/buscar');
  }

  function handleClickConsultants() {
    props.setUser({ ...user, rol: { name: 'consultant' } });
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

  if (user.name) {
    const { rol, status } = user;

    if (status.logueado && rol.name === 'consultant') {
      return (
        <div className='dashboard' onScroll={handleHeader} id='dashboard'>
          <img className='background' src={background} alt='background' />
          <div className='dashboard__body'>
            <h2 className='dashboard__message'>
              ¡Bienvenido de vuelta,
              <br />
              {user.name}
              !
            </h2>
            <div className='dashboard__profile'>
              <button onClick={handleInactive} type='button' className='changeStatus'>
                <img src={inactive} alt='Cambiar a ocupado' />
              </button>
              <Modal isOpen={busy} onClose={handleCloseInactive}>
                <Inactive onClose={handleCloseInactive} status={active} setStatus={setActive} />
              </Modal>
              <button onClick={handlEditProfile} type='button' className='editProfile'>
                <img src={pen} alt='editar perfil' />
              </button>
              <Modal isOpen={edit} onClose={handleCloseEdit}>
                <EditProfile onClose={handleCloseEdit} id={user.id} />
              </Modal>
              <div className='dashboard__profile--left'>
                <div className='dashboard__profile--left--pic__co'>
                  <img src={`${axios.defaults.baseURL}/uploads/${user.pictureName}`} className='profile__pic' alt='imagen de perfil' />
                  <div className={`profile__pic__status__dashboard ${status.logueado}`}>{' '}</div>
                </div>
                <div className='profile__rating'>
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={starE} alt='' />
                </div>
                <h3 className='profile__profession'>{user.profession}</h3>
              </div>
              <div className='dashboard__profile--right'>
                <div className='profile__card--header'>
                  <span className='card__header--category'>{user.category}</span>
                  <span className='card__header--subcategory'>{user.especialidad}</span>
                </div>
                <p>¡Aún no has escrito una descripción! Por favor haz click en editar en el botón con forma de lapiz arriba.</p>
                <div className='profile__card--footer'>
                  <span className='card__footer--ability'>{`#${user.abilities[0]}`}</span>
                  <span className='card__footer--ability'>{`#${user.abilities[1]}`}</span>
                  <span className='card__footer--ability'>{`#${user.abilities[2]}`}</span>
                </div>
              </div>
            </div>
          </div>
          <NextDates user={user} />
          <h3 className='otherResults__title'>Consultores destacados en tu área</h3>
          <OtherResults category={user.especialidad} results={consultants3} />
        </div>
      );
    }

    if (status.logueado && rol.name === 'client') {
      return (
        <div className='dashboard' onScroll={handleHeader} id='dashboard'>
          <img className='background' src={background} alt='background' />
          <div className='dashboard__body'>
            <h2 className='dashboard__message'>
              Bienvenido, {user.name}.
            </h2>
            <span className='dashboard__balance'>
              <b>Saldo: </b>14.000 {currency}
            </span>
            <div className='dashboard__CTA'>
              <Searcher isHome={true} />
            </div>
          </div>
          <OtherResults category='Mis Favoritos' isFavorite={true} results={consultants2} />
          <OtherResults category='Últimos consultores' results={consultants3} />
        </div>
      );
    }
  }

  return (
    <div className='home'>
      <Intro />
      <SelectionIntro>
        <div className='cardButton'>
          <button type='button' className='CardClientSelection' onClick={handleClickClients}>
            ¡Haz una consulta!
          </button>
          <h3 className='cardButton__title'>Recibe respuesta en minutos</h3>
        </div>
        <div className='cardButton'>
          <button type='button' className='CardConsultorSelection' onClick={handleClickConsultants}>
            Ser Consultor
          </button>
        </div>
        <div className='alreadyAccount'>
          <p>¿Sin nada que buscar por ahora? <Link to='/signup'><b>Registrate</b></Link></p>
          <p>¿Ya tienes cuenta? <Link to='/login'><b>Inicia sesión</b></Link></p>
        </div>
      </SelectionIntro>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(Home);

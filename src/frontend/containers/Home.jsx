/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser, setIsSearch } from '../actions';
import SelectionIntro from '../components/SelectionIntro';
import Intro from '../components/Intro';
import CardButton from '../components/CardButton';
import NextDates from '../components/NextDates';
import '../assets/styles/containers/Home.scss';
import OtherResults from '../components/OtherResults';
import pen from '../assets/static/icons/pen.svg';
import profile from '../assets/static/images/profile_4.jpg';
import star from '../assets/static/icons/star.svg';
import starE from '../assets/static/icons/emptyStar.svg';
import inactive from '../assets/static/icons/inactive.svg';
import Modal from '../portals/Modal';
import EditProfile from '../portals/EditProfile';
import Inactive from '../portals/Inactive';

const Home = (props) => {

  const { isOnline, name, user, consultants2, consultants3 } = props;

  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(false);

  function handleInactive() {
    setStatus({ status: true });
  }

  function handleCloseInactive(e) {
    setStatus(false);
  }

  function handlEditProfile() {
    setEdit({ edit: true });
  }

  function handleCloseEdit(e) {
    setEdit(false);
  }

  const handleClient = () => {
    props.setUser('client');
  };

  const handleConsultant = (e) => {
    props.setUser('consultant');
  };

  if (isOnline && user === 'consultant') {
    return (
      <div className='dashboard'>
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
            <Modal isOpen={status} onClose={handleCloseInactive}>
              <Inactive onClose={handleCloseInactive} />
            </Modal>
            <button onClick={handlEditProfile} type='button' className='editProfile'>
              <img src={pen} alt='editar perfil' />
            </button>
            <Modal isOpen={edit} onClose={handleCloseEdit}>
              <EditProfile onClose={handleCloseEdit} />
            </Modal>
            <div className='dashboard__profile--left'>
              <img src={profile} className='profile__pic' alt='imagen de perfil' />
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
      <div className='dashboard'>
        <div className='dashboard__body'>
          <h2 className='dashboard__message'>
            Bienvenido, {name}.
            <br />
            ¡Que bueno saber de tí!
          </h2>
          <div className='dashboard__CTA'>
            <Link to='buscar'>
              <button type='button' className='dashboard__CTA__button'>
                Consultar ahora
              </button>
            </Link>
          </div>
        </div>
        <OtherResults category='Mis Favoritos' results={consultants2} />
        <OtherResults category='Últimas consultas' results={consultants3} />
      </div>
    );
  }

  return (
    <div className='home'>
      <Intro />
      <SelectionIntro>
        <CardButton name='Clientes' onClick={handleClient} obj='CardClientSelection' msg='¡Consultar ahora!' dir='/buscar' />
        <CardButton name='Consultores' onClick={handleConsultant} obj='CardConsultorSelection' msg='¡Registrate!' dir='/signup' />
      </SelectionIntro>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOnline: state.isOnline,
    name: state.name,
    user: state.user,
    consultants2: state.consultants2,
    consultants3: state.consultants3,
  };
};

const mapDispatchToProps = {
  setUser,
  setIsSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

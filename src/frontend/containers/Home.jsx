/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SelectionIntro from '../components/SelectionIntro';
import Intro from '../components/Intro';
import CardButton from '../components/CardButton';
import NextDates from '../components/NextDates';
import '../assets/styles/containers/Home.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import OtherResults from '../components/OtherResults';
import pen from '../assets/static/icons/pen.svg';
import profile from '../assets/static/images/profile_4.jpg';
import star from '../assets/static/icons/star.svg';
import starE from '../assets/static/icons/emptyStar.svg';

const Home = (props) => {

  const { isOnline, name, user } = props;

  if (isOnline && user === 'consultant') {
    return (
      <div className='dashboard'>
        <Header />
        <div className='dashboard__body'>
          <h2 className='dashboard__message'>
            ¡Bienvenido de vuelta,
            <br />
            {name}
            !
          </h2>
          <div className="dashboard__profile">
            <button type='button' className='editProfile'>
              <Link to='#'>
                <img src={pen} alt='editar perfil' />
              </Link>
            </button>
            <div className="dashboard__profile--left">
              <img src={profile} className='profile__pic' alt="imagen de perfil" />
              <div className="profile__rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={starE} alt="" />
              </div>
              <h3 className="profile__profession">Profesión</h3>
              <p className="profile__speciality">Especialidad</p>
            </div>
            <div className="dashboard__profile--right">
              <div className="profile__card--header">
                <span className="card__header--category">Categoría</span>
                <span className="card__header--subcategory">Sub - categoría</span>
              </div>
              <p>¡Aún no has escrito una descripción! Por favor haz click en editar en el botón con forma de lapiz arriba.</p>
              <div className="profile__card--footer">
                <span className="card__footer--ability">#Habilidad 1</span>
                <span className="card__footer--ability">#Habilidad 2</span>
                <span className="card__footer--ability">#Habilidad 3</span>
              </div>
            </div>
          </div>
        </div>
        <NextDates />
        <h3 className='otherResults__title'>Consultores destacados en tu área</h3>
        <OtherResults category='Habilidad1' results={true} />
        <OtherResults category='Habilidad2' results={true} />
        <Menu />
      </div>
    );
  }

  if (isOnline && user === 'client') {
    return (
      <div className='dashboard'>
        <Header user='client' />
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
        <OtherResults category='Mis Favoritos' results={true} />
        <OtherResults category='Últimas consultas' results={true} />
        <Menu user='client' />
      </div>
    );
  }

  return (
    <div className='home'>
      <Intro />
      <SelectionIntro>
        <CardButton name='Clientes' obj='CardClientSelection' msg='¡Consultar ahora!' dir='/buscar' />
        <CardButton name='Consultores' obj='CardConsultorSelection' msg='¡Registrate!' dir='/signup' />
      </SelectionIntro>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOnline: state.isOnline,
    name: state.name,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Home);

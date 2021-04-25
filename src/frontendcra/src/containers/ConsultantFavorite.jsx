import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Co } from 'react-flags-select';
import statusReducers from '../reducers/statusReducers';
import * as actionsStatus from '../actions';
import '../assets/styles/containers/Consultant.scss';
import star from '../assets/static/icons/star.svg';
import starE from '../assets/static/icons/emptyStar.svg';
import HistoryList from '../components/HistoryList';
import Modal from '../portals/Modal';
import CallingModal from '../portals/Calling';
import ScheduleConsultant from '../portals/ScheduleConsultant';

const ConsultantFavorite = (props) => {

  const { consultants } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [schedule, setSchedule] = useState(false);

  function handleOpenModal(e) {
    setIsOpen({ isOpen: true });
  };

  function handleSchedule(e) {
    setSchedule(true);
  };

  function handleCloseSchedule(e) {
    setSchedule(false);
  };

  function handleCloseModal(newValue) {
    setIsOpen(false);
  };

  const data = consultants.filter((consultant) => {
    return consultant.id === props.match.params.id;
  });

  const date = new Date(data[0].createdAt);
  const dateString = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  const handleHeader = () => {
    const d = document.getElementById('consultant__pageFav');
    if (d.scrollTop >= 50) {
      props.setHeader(true);
    } else {
      props.setHeader(false);
    }
  };

  return (
    <div className='consultant__page' onScroll={handleHeader} id='consultant__pageFav'>
      <span className='consultant__favorite'>Favorito</span>
      <div className='consultant__since'>
        <span>{`Registrado el: ${dateString}`}</span>
      </div>
      <span className='consultant__profession'>{`${data[0].profession} | ${data[0].category}`}</span>
      <div className='consultant__avatar__container'>
        <img src={data[0].avatar} alt='imágen de perfil' className='consultant__avatar' />
        <div className='consultant__status'>{' '}</div>
      </div>
      <div className='consultant__country'>
        <Co />
        <span>Colombia</span>
      </div>
      <h1 className='consultant__name'>{data[0].name}</h1>
      <h3 className='consultant__specialization'>Especialización</h3>
      <div className='consultant__rating__stars'>
        <img src={star} alt='rating 4 Estrellas' />
        <img src={star} alt='rating 4 Estrellas' />
        <img src={star} alt='rating 4 Estrellas' />
        <img src={star} alt='rating 4 Estrellas' />
        <img src={starE} alt='rating 4 Estrellas' />
      </div>
      <div className='consultant__multimedia__content'>
        <button type='button' className='consultant__cv'>Hoja de vida</button>
        <button type='button' className='consultant__Reel'>Video Reel</button>
      </div>
      <div className='consultant__callNow'>
        <button type='button' onClick={handleOpenModal} className='consultant__call__button'>Llamar</button>
        <button type='button' onClick={handleSchedule} className='consultant__schedule__button'>Agendar</button>
      </div>
      <Modal onClose={handleCloseSchedule} isOpen={schedule}>
        <ScheduleConsultant onClose={handleCloseSchedule} />
      </Modal>
      <Modal onClose={handleCloseModal} isOpen={isOpen}>
        <CallingModal value={Math.random()} onClose={handleCloseModal} />
      </Modal>
      <div className='consultant__data'>
        <div className='consultant__hours'>
          <div className='consultant__given__hours'>{data[0].hoursGive}</div>
          <span>Horas de consulta</span>
        </div>
        <div className='consultant__topic'>
          <div className='consultant__main__topic'>{data[0].category}</div>
          <span>
            Tema
            <br />
            principal
          </span>
        </div>
      </div>
      <div className='consultant__description'>
        <div className='consultant__category'>
          <h2 className='consultant__category__main'>{data[0].category}</h2>
          <h2 className='consultant__category__subcategory'>Sub-categoría</h2>
        </div>
        <p className='consultant__description__content'>{data[0].description}</p>
        <div className='consultant__abilities'>
          <h4 className='consultant__ability'><Link to='/resultados'>{`#${data[0].ability1}`}</Link></h4>
          <h4 className='consultant__ability'><Link to='/resultados'>{`#${data[0].ability2}`}</Link></h4>
          <h4 className='consultant__ability'><Link to='/resultados'>{`#${data[0].ability3}`}</Link></h4>
        </div>
      </div>
      <div className='consultant__ratings'>
        <h2 className='consultant__ratings__title'>Últimas calificaciones</h2>
        <HistoryList isSearch={true} amount={5} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapDispatchToProps, actionsStatus)(ConsultantFavorite);

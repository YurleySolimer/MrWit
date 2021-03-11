import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Co } from 'react-flags-select';
// eslint-disable-next-line no-unused-vars
import Axios from 'axios';
import * as mrwitActions from '../actions/mrwit';
import '../assets/styles/containers/Consultant.scss';
import star from '../assets/static/icons/star.svg';
import starE from '../assets/static/icons/emptyStar.svg';
import back from '../assets/static/icons/arrowleft.svg';
import HistoryList from '../components/HistoryList';
import Modal from '../portals/Modal';
import CallingModal from '../portals/Calling';

const Consultant = (props) => {

  const history = useHistory();
  const { getConsultant, consultantData, statusData } = props;
  const { isOnline } = statusData;
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal(e) {
    Axios.get('http://localhost:3000/join').then((res) => {
      window.location.href = `http://localhost:3000/room/${res.data.link}?`;
    });
    // setIsOpen({ isOpen: true });
  };

  function handleCloseModal(newValue) {
    setIsOpen(false);
  };

  useEffect(() => {
    console.log('El id es: ', props.match.params.id);
    getConsultant(props.match.params.id);
  }, []);

  function handleSignUpClient(e) {
    history.push('/signup');
  }

  const infoConsultorOffline = () => {
    return (
      <>
        <div className='consultant__since'>
          <span>asdf</span>
        </div>
        <span className='consultant__profession'>asdf</span>
        <div className='consultant__avatar__container'>
          <img src='asdf' alt='imágen de perfil' className='consultant__avatar' />
          <div className='consultant__status'>asdf</div>
        </div>
        <div className='consultant__country'>
          <Co />
          <span>Colombia</span>
        </div>
        <h1 className='consultant__name'>asdf</h1>
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
          <button type='button' onClick={handleSignUpClient} className='consultant__call__button'>Llamar ahora</button>
        </div>
        <div className='consultant__data'>
          <div className='consultant__hours'>
            <div className='consultant__given__hours'>asdf</div>
            <span>Horas de consulta</span>
          </div>
          <div className='consultant__topic'>
            <div className='consultant__main__topic'>asdf</div>
            <span>
              Tema
              <br />
              principal
            </span>
          </div>
        </div>
        <div className='consultant__description'>
          <div className='consultant__category'>
            <h2 className='consultant__category__main'>asdf</h2>
            <h2 className='consultant__category__subcategory'>Sub-categoría</h2>
          </div>
          <p className='consultant__description__content'>asdf</p>
          <div className='consultant__abilities'>
            <h4 className='consultant__ability'><Link to='/resultados'>asdf</Link></h4>
            <h4 className='consultant__ability'><Link to='/resultados'>asdf</Link></h4>
            <h4 className='consultant__ability'><Link to='/resultados'>asdf</Link></h4>
          </div>
        </div>
        <div className='consultant__ratings'>
          <h2 className='consultant__ratings__title'>Últimas calificaciones</h2>
          <HistoryList setSearchRate={true} amount={5} />
        </div>
      </>
    );
  };

  console.log('ConsultantData:', consultantData);
  console.log('statusReducer:', statusData);
  console.log('mrwitActions:', mrwitActions);

  const infoConsultorOnline = () => {
    return (
      <>
        <span className='consultant__profession'>asdf</span>
        <div className='consultant__avatar__container'>
          <img src='sdf' alt='imágen de perfil' className='consultant__avatar' />
          <div className='consultant__status'>asdf</div>
        </div>
        <div className='consultant__since'>
          <span>asdf</span>
        </div>
        <h1 className='consultant__name'>asdf</h1>
        <Co />
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
          <button type='button' onClick={handleOpenModal} className='consultant__call__button'>Llamar ahora</button>
        </div>
        <Modal onClose={handleCloseModal} isOpen={isOpen}>
          <CallingModal value={Math.random()} onClose={handleCloseModal} />
        </Modal>
        <div className='consultant__data'>
          <div className='consultant__hours'>
            <div className='consultant__given__hours'>asdf</div>
            <span>Horas de consulta</span>
          </div>
          <div className='consultant__topic'>
            <div className='consultant__main__topic'>asdf</div>
            <span>
              Tema
              <br />
              principal
            </span>
          </div>
        </div>
        <div className='consultant__description'>
          <div className='consultant__category'>
            <h2 className='consultant__category__main'>asdf}</h2>
            <h2 className='consultant__category__subcategory'>Sub-categoría</h2>
          </div>
          <p className='consultant__description__content'>adsf</p>
          <div className='consultant__abilities'>
            <h4 className='consultant__ability'><Link to='/resultados'>asdfasdf</Link></h4>
            <h4 className='consultant__ability'><Link to='/resultados'>asdfasdf</Link></h4>
            <h4 className='consultant__ability'><Link to='/resultados'>asdfasdf</Link></h4>
          </div>
        </div>
        <div className='consultant__ratings'>
          <h2 className='consultant__ratings__title'>Últimas calificaciones</h2>
          <HistoryList setSearchRate={true} amount={5} />
        </div>
      </>
    );
  };

  const handleHeader = () => {
    const d = document.getElementById('consultant__page');
    if (d.scrollTop >= 50) {
      props.setHeader(true);
    } else {
      props.setHeader(false);
    }
  };

  if (!isOnline) {

    return consultantData.isLoading ? (
      <h2>Loading</h2>
    ) : consultantData.error ? (
      <h2>{consultantData.error}</h2>
    ) : (
      <div className='consultant__page'>
        <Link to='/resultados' className='consultant__back__button'><img src={back} alt='Volver a los resultados' /></Link>
        { infoConsultorOffline()}
      </div>
    );
  };

  return consultantData.isLoading ? (
    <h2>Loading</h2>
  ) : consultantData.error ? (
    <h2>{consultantData.error}</h2>
  ) : (
    <div className='consultant__page' onScroll={handleHeader} id='consultant__page'>
      { infoConsultorOnline()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    consultantData: state.mrwitReducers,
    statusData: state.statusReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getConsultant: (id) => dispatch(mrwitActions.getConsultant(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Consultant);

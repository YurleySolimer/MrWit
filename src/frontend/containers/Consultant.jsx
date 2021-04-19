import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Ar, Ag, Bb, Bm, Bo, Br, Bs, Bz, Cl, Co, Cr, Cu, Cw, Dm, Do, Ec, Sv, Gt, Jm, Mx, Pa, Py, Pe, Pr, Uy, Ve } from 'react-flags-select';
import ReactStars from 'react-rating-stars-component';
import axios from 'axios';
import * as mrwitActions from '../actions/mrwit';
import * as statusActions from '../actions';
import '../assets/styles/containers/Consultant.scss';
import back from '../assets/static/icons/arrowleft.svg';
import HistoryList from '../components/HistoryList';
import CallingModal from '../portals/Calling';
import Loading from '../components/Loading';
import Modal from '../portals/Modal';

import '../assets/styles/portals/Modal.scss';
import close from '../assets/static/icons/closeDark.svg';

const Consultant = (props) => {

  const history = useHistory();
  const { getConsultant, consultantData, statusData } = props;
  const [isOpen, setIsOpen] = useState(false);

  const getCountry = (value) => {
    switch (value) {
      case 'AR':
        return (
          <>
            <Ar />
            <span>Argentina</span>
          </>
        );
      case 'AG':
        return (
          <>
            <Ag />
            <span>Antigua y Barbuda</span>
          </>
        );
      case 'BB':
        return (
          <>
            <Bb />
            <span>Barbados</span>
          </>
        );
      case 'BM':
        return (
          <>
            <Bm />
            <span>Bermuda</span>
          </>
        );
      case 'BO':
        return (
          <>
            <Bo />
            <span>Bolivia</span>
          </>
        );
      case 'BR':
        return (
          <>
            <Br />
            <span>Brasil</span>
          </>
        );
      case 'BS':
        return (
          <>
            <Bs />
            <span>Bahamas</span>
          </>
        );
      case 'BZ':
        return (
          <>
            <Bz />
            <span>Belize</span>
          </>
        );
      case 'CL':
        return (
          <>
            <Cl />
            <span>Chile</span>
          </>
        );
      case 'CO':
        return (
          <>
            <Co />
            <span>Colombia</span>
          </>
        );
      case 'CR':
        return (
          <>
            <Cr />
            <span>Costa Rica</span>
          </>
        );
      case 'CU':
        return (
          <>
            <Cu />
            <span>Cuba</span>
          </>
        );
      case 'CW':
        return (
          <>
            <Cw />
            <span>Curaçao</span>
          </>
        );
      case 'DM':
        return (
          <>
            <Dm />
            <span>Dominica</span>
          </>
        );
      case 'DO':
        return (
          <>
            <Do />
            <span>República Dominicana</span>
          </>
        );
      case 'EC':
        return (
          <>
            <Ec />
            <span>Ecuador</span>
          </>
        );
      case 'SV':
        return (
          <>
            <Sv />
            <span>Salvador</span>
          </>
        );
      case 'GT':
        return (
          <>
            <Gt />
            <span>Guatemala</span>
          </>
        );
      case 'JM':
        return (
          <>
            <Jm />
            <span>Jamaica</span>
          </>
        );
      case 'MX':
        return (
          <>
            <Mx />
            <span>México</span>
          </>
        );
      case 'PA':
        return (
          <>
            <Pa />
            <span>Panamá</span>
          </>
        );
      case 'PY':
        return (
          <>
            <Py />
            <span>Paraguay</span>
          </>
        );
      case 'PE':
        return (
          <>
            <Pe />
            <span>Perú</span>
          </>
        );
      case 'PR':
        return (
          <>
            <Pr />
            <span>Puerto Rico</span>
          </>
        );
      case 'UY':
        return (
          <>
            <Uy />
            <span>Uruguay</span>
          </>
        );
      case 'VE':
        return (
          <>
            <Ve />
            <span>Venezuela</span>
          </>
        );
    }
  };

  function handleOpenModal(e) {
    setIsOpen(true);
  };

  function handleCloseModal() {
    setIsOpen(false);
  };

  useEffect(() => {
    getConsultant(props.match.params.id);
  }, []);

  function handleSignUpClient(e) {
    history.push('/signup');
  }

  const infoConsultorOffline = () => {
    return (
      <>
        <Modal isOpen={consultantData.isLoading}>
          <Loading />
        </Modal>
        <div className='consultant__since'>
          <span>{consultantData.consultant.category}</span>
        </div>
        <span className='consultant__profession'>{consultantData.consultant.profession}</span>
        <div className='consultant__avatar__container'>
          <img src={`${axios.defaults.baseURL}/uploads/${consultantData.consultant.pictureName}`} alt='imágen de perfil' className='consultant__avatar' />
          <div className='consultant__status'>{' '}</div>
        </div>
        <div className='consultant__country'>
          {getCountry(consultantData.consultant.country)}
        </div>
        <h1 className='consultant__name'>{`${consultantData.consultant.name} ${consultantData.consultant.lastname}`}</h1>
        <h3 className='consultant__specialization'>{consultantData.consultant.especialidad}</h3>
        <div className='consultant__rating__stars'>
          <ReactStars count={5} edit={false} size={24} isHalf={true} value={consultantData.consultant.clasification} />
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
            <div className='consultant__given__hours'>{consultantData.consultant.hoursGive || '0'}</div>
            <span>Horas de consulta</span>
          </div>
          <div className='consultant__topic'>
            <div className='consultant__main__topic'>{consultantData.consultant.abilities ? consultantData.consultant.abilities[0] : consultantData.consultant.especialidad}</div>
            <span>
              Tema
              <br />
              principal
            </span>
          </div>
        </div>
        <div className='consultant__description'>
          <div className='consultant__category'>
            <h2 className='consultant__category__main'>{consultantData.consultant.profession}</h2>
            <h2 className='consultant__category__subcategory'>{consultantData.consultant.category}</h2>
          </div>
          <p className='consultant__description__content'>{consultantData.consultant.description}</p>
          <div className='consultant__abilities'>
            {consultantData.consultant.abilities ? consultantData.consultant.abilities.map((ability) => <h4 className='consultant__ability' key={ability}>{`#${ability}`}</h4>) : ' '}
          </div>
        </div>
        <div className='consultant__ratings'>
          <h2 className='consultant__ratings__title'>Últimas calificaciones</h2>
          <HistoryList setSearchRate={true} amount={5} />
        </div>
      </>
    );
  };

  const infoConsultorOnline = () => {
    return (
      <>
        <span className='consultant__profession'>{consultantData.consultant.profession}</span>
        <div className='consultant__avatar__container'>
          <img src={`${axios.defaults.baseURL}/uploads/${consultantData.consultant.pictureName}`} alt='imágen de perfil' className='consultant__avatar' />
          <div className='consultant__status'>{' '}</div>
        </div>
        <div className='consultant__since'>
          <span>{' '}</span>
        </div>
        <h1 className='consultant__name'>{consultantData.consultant.name}</h1>
        <div className='consultant__country'>
          {getCountry(consultantData.consultant.country)}
        </div>
        <h3 className='consultant__specialization'>{consultantData.consultant.especialidad}</h3>
        <div className='consultant__rating__stars'>
          <ReactStars count={5} edit={false} size={24} isHalf={true} value={consultantData.consultant.clasification} />
        </div>
        <div className='consultant__multimedia__content'>
          <button type='button' className='consultant__cv'>Hoja de vida</button>
          <button type='button' className='consultant__Reel'>Video Reel</button>
        </div>
        <div className='consultant__callNow'>
          <button type='button' onClick={handleOpenModal} className='consultant__call__button'>Llamar ahora</button>
        </div>
        { isOpen ? (
          <div className='Modal'>
            <div className='Modal__container'>
              <button onClick={handleCloseModal} type='button' className='Modal__close--button'>
                <img src={close} alt='cierra el popup' />
              </button>
              <CallingModal onClose={handleCloseModal} />
            </div>
          </div>
        ) : null}
        <div className='consultant__data'>
          <div className='consultant__hours'>
            <div className='consultant__given__hours'>{consultantData.consultant.hoursGive || '0'}</div>
            <span>Horas de consulta</span>
          </div>
          <div className='consultant__topic'>
            <div className='consultant__main__topic'>{consultantData.consultant.abilities ? consultantData.consultant.abilities[0] : consultantData.consultant.especialidad}</div>
            <span>
              Tema
              <br />
              principal
            </span>
          </div>
        </div>
        <div className='consultant__description'>
          <div className='consultant__category'>
            <h2 className='consultant__category__main'>{consultantData.consultant.profession}</h2>
            <h2 className='consultant__category__subcategory'>{consultantData.consultant.category}</h2>
          </div>
          <p className='consultant__description__content'>{consultantData.consultant.description}</p>
          <div className='consultant__abilities'>
            {consultantData.consultant.abilities ? consultantData.consultant.abilities.map((ability) => <h4 className='consultant__ability' key={ability}>{`#${ability}`}</h4>) : ' '}
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
    if (statusData.user && statusData.user.status) {
      const d = document.getElementById('consultant__page');
      if (d.scrollTop >= 50) {
        props.setHeader(true);
      } else {
        props.setHeader(false);
      }
    }
  };

  if (statusData.user && !statusData.user.status) {
    console.log(statusData.user);
    return consultantData.isLoading ? (
      <Loading />
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
    <Loading />
  ) : consultantData.error ? (
    <h2>{consultantData.error}</h2>
  ) : (
    <div className='consultant__page' onScroll={handleHeader} id='consultant__page'>
      <Link to='/resultados' className='consultant__back__button'><img src={back} alt='Volver a los resultados' /></Link>
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
    setHeader: (value) => dispatch(statusActions.setHeader(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Consultant);

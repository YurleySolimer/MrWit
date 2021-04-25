import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import statusReducers from '../reducers/statusReducers';
import * as actionsStatus from '../actions';
import '../assets/styles/portals/HangUpModals.scss';
import profile from '../assets/static/images/profile_3.jpg';
import phone from '../assets/static/icons/phone.svg';
import star from '../assets/static/icons/star.svg';
import starE from '../assets/static/icons/borderStar.svg';

const CallingModal = (props) => {

  const history = useHistory();
  const { onClose } = props;
  const [hangUp, setHangUp] = useState(false);

  function handleCloseModal(e) {
    onClose(e);
  }

  function handleHangUp() {
    setHangUp({ hangUp: true });
  }

  function handleContinue() {

    if (props.isSearch) {
      props.setIsSearch(props.isSearch);
    }

    props.setIsCall(props.isCall);
    history.push('/');
  }

  const handleSecondRate = () => {
    const first = document.getElementById('firstRate');
    const second = document.getElementById('secondRate');

    first.classList.toggle('active');
    second.classList.toggle('active');
  };

  if (hangUp) {
    return (
      <div className='rateCall'>
        <fieldset id='firstRate' className='active'>
          <h3 className='rateCall__title'>¡Llamada finalizada!</h3>
          <img src={profile} alt='Foto de perfil' />
          <p className='rateCall__question'>¿Qué tal te ha parecido nombre del consultor?</p>
          <div className='rateCall__stars'>
            <img src={starE} alt='' />
            <img src={starE} alt='' />
            <img src={starE} alt='' />
            <img src={starE} alt='' />
            <img src={starE} alt='' />
          </div>
          <div className="rateCall__comment">
            <textarea className='comment' name="comment" id="comment" cols="30" rows="5" placeholder='¿Qué puedes decirnos de este consultor?'></textarea>
          </div>
          <div className='rateCall__add'>
            <label htmlFor='addToFavorites'>
              <input type='checkbox' name='addToFavorites' id='addToFavorites' />
              Agregar a favoritos
            </label>
          </div>
          <button type='button' onClick={handleSecondRate}>Continuar</button>
        </fieldset>
        <fieldset id='secondRate'>
          <h3 className='rateCall__title'>¡Llamada finalizada!</h3>
          <p className='rateCall__question'>¿Qué tal te pareció el servicio?</p>
          <div className='rateCall__stars'>
            <img src={starE} alt='' />
            <img src={starE} alt='' />
            <img src={starE} alt='' />
            <img src={starE} alt='' />
            <img src={starE} alt='' />
          </div>
          <p className='rateCall__question'>¿Qué tan preparado está el consultor?</p>
          <div className='rateCall__stars'>
            <img src={starE} alt='' />
            <img src={starE} alt='' />
            <img src={starE} alt='' />
            <img src={starE} alt='' />
            <img src={starE} alt='' />
          </div>
          <p className='rateCall__question'>¿Cómo estuvo la calidad de la llamada?</p>
          <div className='rateCall__stars'>
            <img src={starE} alt='' />
            <img src={starE} alt='' />
            <img src={starE} alt='' />
            <img src={starE} alt='' />
            <img src={starE} alt='' />
          </div>
          <button type='button' onClick={handleContinue}>Continuar</button>
        </fieldset>
      </div>
    );
  }

  return (
    <div className='CallingModal ended'>
      <img id='callingImage' className='' src={phone} alt='' />
      <p className='CallingModal__text'>¿Estás seguro de terminar la llamada?</p>
      <div className='hangUpModal__buttons'>
        <button type='button' onClick={handleCloseModal} className='CallingModal__button__hangUpBack'>Volver</button>
        <button type='button' onClick={handleHangUp} className='CallingModal__button__hangup'>Colgar</button>
      </div>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(CallingModal);

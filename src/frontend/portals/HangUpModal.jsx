import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/portals/HangUpModals.scss';
import profile from '../assets/static/images/profile_3.jpg';
import phone from '../assets/static/icons/phone.svg';
import star from '../assets/static/icons/star.svg';
import starE from '../assets/static/icons/borderStar.svg';

const CallingModal = (props) => {

    const { onClose } = props;
    const [hangUp, setHangUp] = useState(false);

    function handleCloseModal(e) {
        onClose(e);
    }

    function handleHangUp() {
        setHangUp({ hangUp: true });
    }

    if (hangUp) {
        return (
            <div className="rateCall">
                <h3 className="rateCall__title">¡Llamada finalizada!</h3>
                <img src={profile} alt="Foto de perfil" />
                <p className="rateCall__question">¿Qué tal te ha parecido nombre del consultor?</p>
                <div className="rateCall__stars">
                    <img src={starE} alt="" />
                    <img src={starE} alt="" />
                    <img src={starE} alt="" />
                    <img src={starE} alt="" />
                    <img src={starE} alt="" />
                </div>
                <div className="rateCall__add">
                    <label htmlFor="addToFavorites">
                        <input type="checkbox" name="addToFavorites" id="addToFavorites" />
                      Agregar a favoritos
                  </label>
                </div>
                <Link to='/'>Continuar</Link>
            </div>
        );
    }

    return (
        <div className='CallingModal ended'>
            <img id='callingImage' className='' src={phone} alt='' />
            <p className='CallingModal__text'>¿Estás seguro de terminar la llamada?</p>
            <div className="hangUpModal__buttons">
                <button type='button' onClick={handleCloseModal} className='CallingModal__button__hangUpBack'>Volver</button>
                <button type='button' onClick={handleHangUp} className='CallingModal__button__hangup'>Colgar</button>
            </div>
        </div>
    );
};

export default CallingModal;

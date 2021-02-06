import React from 'react';
import '../assets/styles/portals/BlockDay.scss';
import clockBlock from '../assets/static/icons/clockBlock.svg';

const BlockDay = ({ onClose }) => {

    function closeBlockDay(e) {
        onClose(e);
    };

    return (
        <div className="BlockDay">
            <img src={clockBlock} alt="icono de reloj detenido" />
            <h2>
                ¿Estás seguro de bloquear el día?
                <br />
                De este modo no podrás recibir citas agendadas este día.
            </h2>
            <div className="BlockDay__buttons">
                <button onClick={closeBlockDay}>Volver</button>
                <button onClick={closeBlockDay}>Bloquear</button>
            </div>
        </div>
    )
}

export default BlockDay;

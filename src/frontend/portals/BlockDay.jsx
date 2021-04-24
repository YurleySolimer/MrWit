import React, { useState } from 'react';
import '../assets/styles/portals/BlockDay.scss';
import clockBlock from '../assets/static/icons/clockBlock.svg';

const BlockDay = ({ onClose }) => {

  const [blocked, setBlocked] = useState(false);
  function closeBlockDay(e) {
    onClose(e);
  };

  function handleBlocked(e) {
    setBlocked(true);
  }

  if (blocked) {
    return (
      <div className="BlockDay">
        <img src={clockBlock} alt="icono de reloj detenido" />
        <h2>
          Se ha bloqueado el día dd-mm-yyyy con éxito, para desbloquear selecciona desbloquear día.
        </h2>
        <div className="BlockDay__buttons">
          <button type='button' className='back' onClick={closeBlockDay}>Volver</button>
        </div>
      </div>
    );
  }

  return (
    <div className="BlockDay">
      <img src={clockBlock} alt="icono de reloj detenido" />
      <h2>
        ¿Estás seguro de bloquear el día?
        <br />
        De este modo no podrás recibir citas agendadas este día.
      </h2>
      <div className="BlockDay__buttons">
        <button type='button' className='back' onClick={closeBlockDay}>Volver</button>
        <button type='button' className='block' onClick={handleBlocked}>Bloquear</button>
      </div>
    </div>
  );
};

export default BlockDay;

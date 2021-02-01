import React from 'react';
import '../assets/styles/components/NextDates.scss';
import clock from '../assets/static/icons/clock.svg';
import trash from '../assets/static/icons/trash.svg';

const NextDates = () => {
  return (
    <div className="NextDates">
      <h3 className="NextDates__titulos">Próximas citas</h3>
      <div className="NextDates__date">
        <span className="NextDates__date--info">Nombre del cliente | 2:00pm</span>
        <div className="NextDates__date--icons">
          <button type='button'><img src={clock} alt="Reagendar consulta" /></button>
          <button type='button'><img src={trash} alt="eliminar cita" /></button>
        </div>
      </div>
      <div className="NextDates__date">
        <span className="NextDates__date--info">Nombre del cliente | 2:00pm</span>
        <div className="NextDates__date--icons">
          <button type='button'><img src={clock} alt="Reagendar consulta" /></button>
          <button type='button'><img src={trash} alt="eliminar cita" /></button>
        </div>
      </div>
      <div className="NextDates__date">
        <span className="NextDates__date--info">Nombre del cliente | 2:00pm</span>
        <div className="NextDates__date--icons">
          <button type='button'><img src={clock} alt="Reagendar consulta" /></button>
          <button type='button'><img src={trash} alt="eliminar cita" /></button>
        </div>
      </div>
    </div>
  );
};

export default NextDates;

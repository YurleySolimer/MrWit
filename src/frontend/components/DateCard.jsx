import React, { useState } from 'react';
import '../assets/styles/components/NextDates.scss';
import clock from '../assets/static/icons/clock.svg';
import trash from '../assets/static/icons/trash.svg';
import Modal from '../portals/Modal';
import CancelDate from '../portals/CancelDate';
import ScheduleConsultant from '../portals/ScheduleConsultant';

const DateCard = (props) => {
  const [reschedule, setReschedule] = useState(false);
  const [cancel, setCancel] = useState(false);

  const handleReschedule = () => {
    setReschedule(true);
  };
  const closeReschedule = () => {
    setReschedule(false);
  };

  const handleCancel = () => {
    setCancel(true);
  };

  const closeCancel = () => {
    setCancel(false);
  };

  return (
    <div className='NextDates__date'>
      <span className='NextDates__date--info'>{props.info ? props.info.name : 'Nombre del cliente'} | {props.info ? props.info.hour : '2:00pm'}</span>
      <div className='NextDates__date--icons'>
        <button onClick={handleReschedule} type='button'><img src={clock} alt='Reagendar consulta' /></button>
        <Modal isOpen={reschedule} onClose={closeReschedule}>
          <ScheduleConsultant user={props.user} onClose={closeReschedule} />
        </Modal>
        <button onClick={handleCancel} type='button'><img src={trash} alt='eliminar cita' /></button>
        <Modal isOpen={cancel} onClose={closeCancel}>
          <CancelDate onClose={closeCancel} />
        </Modal>
      </div>
    </div>
  );
};

export default DateCard;

import React, { useState } from 'react';
import '../assets/styles/portals/ScheduleConsultant.scss';
import Calendar from 'react-calendar';
import Next from '../components/Next';
import Prev from '../components/Prev';
import check from '../assets/static/icons/check.svg';
import star from '../assets/static/icons/star.svg';

const ScheduleConsultant = ({ onClose, user }) => {

  const [value, onChange] = useState(new Date(), []);
  const [schedule, setSchedule] = useState(false);

  function handleSchedule() {
    setSchedule(true);
  }

  function handleClose(e) {
    onClose(e);
  }

  function handleFirstHour() {
    const div = document.getElementById('firstHour');
    div.classList.toggle('active');
  }

  function handleSecondHour() {
    const div = document.getElementById('secondHour');
    div.classList.toggle('active');
  }

  function handleThirdHour() {
    const div = document.getElementById('thirdHour');
    div.classList.toggle('active');
  }

  if (schedule) {
    return (
      <div className='ScheduleConsultant'>
        <img className='ScheduleStar' src={star} alt='' />
        <h3>Se ha agregado la cita con éxito</h3>
        <button type='button' className='continueSchedule' onClick={handleClose}>Continuar</button>
      </div>
    );
  }

  if (user.rol.name) {
    return (
      <div className='ScheduleConsultant'>
        <Calendar
          onChange={onChange}
          value={value}
          className=''
          next2Label={null}
          prev2Label={null}
          nextLabel={<Next />}
          prevLabel={<Prev />}
        />
        <h4>
          Selecciona la hora que prefieras:
        </h4>
        <input type='time' className='signup__input' />
        <button className='continueSchedule' type='button' onClick={handleSchedule}>
          Proponer cambio
        </button>
      </div>
    );
  }

  return (
    <div className='ScheduleConsultant'>
      <Calendar
        onChange={onChange}
        value={value}
        className=''
        next2Label={null}
        prev2Label={null}
        nextLabel={<Next />}
        prevLabel={<Prev />}
      />
      <h4>
        Horas disponibles el
        <b>06-02-2020</b>
        {' '}
        selecciona la que prefieras:
      </h4>
      <div className='hourAvailable' onClick={handleFirstHour} id='firstHour'>
        <span>3:00pm - 4:00pm</span>
        <img src={check} alt='' />
      </div>
      <div className='hourAvailable' onClick={handleSecondHour} id='secondHour'>
        <span>3:00pm - 4:00pm</span>
        <img src={check} alt='' />
      </div>
      <div className='hourAvailable' onClick={handleThirdHour} id='thirdHour'>
        <span>3:00pm - 4:00pm</span>
        <img src={check} alt='' />
      </div>
      <button className='continueSchedule' type='button' onClick={handleSchedule}>
        Agendar
      </button>
    </div>
  );
};

export default ScheduleConsultant;

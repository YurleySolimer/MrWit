import React from 'react';
import '../assets/styles/portals/Schedule.scss';
import send from '../assets/static/icons/check.svg';

const ScheduleModal = ({ onClose }) => {

  function handleClose() {
    onClose(true);
  }

  return (
    <div className='ScheduleModal'>
      <p className='ScheduleModal__instructions'>
        Selecciona los días que tendrás diponibles y su respectivo horario.
      </p>
      <form action=''>
        <div className='ScheduleModal__day'>
          <input className='ScheduleModal__day__check' type='checkbox' name='monday' id='monday' />
          <h2 className='ScheduleModal__day__name'>Lunes</h2>
          <label htmlFor='startMonday'>
            Inicio
            <br />
            <input type='time' name='startMonday' id='startMonday' />
          </label>
          <label htmlFor='endMonday'>
            Fin
            <br />
            <input type='time' name='endMonday' id='endMonday' />
          </label>
        </div>
        <div className='ScheduleModal__day'>
          <input className='ScheduleModal__day__check' type='checkbox' name='tuesday' id='tuesday' />
          <h2 className='ScheduleModal__day__name'>Martes</h2>
          <label htmlFor='startTuesday'>
            Inicio
            <br />
            <input type='time' name='startTuesday' id='startTuesday' />
          </label>
          <label htmlFor='endTuesday'>
            Fin
            <br />
            <input type='time' name='endTuesday' id='endTuesday' />
          </label>
        </div>
        <div className='ScheduleModal__day'>
          <input className='ScheduleModal__day__check' type='checkbox' name='wednesday' id='wednesday' />
          <h2 className='ScheduleModal__day__name'>Miercoles</h2>
          <label htmlFor='startWednesday'>
            Inicio
            <br />
            <input type='time' name='startWednesday' id='startWednesday' />
          </label>
          <label htmlFor='endWednesday'>
            Fin
            <br />
            <input type='time' name='endWednesday' id='endWednesday' />
          </label>
        </div>
        <div className='ScheduleModal__day'>
          <input className='ScheduleModal__day__check' type='checkbox' name='thursday' id='thursday' />
          <h2 className='ScheduleModal__day__name'>Jueves</h2>
          <label htmlFor='startThursday'>
            Inicio
            <br />
            <input type='time' name='startThursday' id='startThursday' />
          </label>
          <label htmlFor='endThursday'>
            Fin
            <br />
            <input type='time' name='endThursday' id='endThursday' />
          </label>
        </div>
        <div className='ScheduleModal__day'>
          <input className='ScheduleModal__day__check' type='checkbox' name='friday' id='friday' />
          <h2 className='ScheduleModal__day__name'>Viernes</h2>
          <label htmlFor='startFriday'>
            Inicio
            <br />
            <input type='time' name='startFriday' id='startFriday' />
          </label>
          <label htmlFor='endFriday'>
            Fin
            <br />
            <input type='time' name='endFriday' id='endFriday' />
          </label>
        </div>
        <div className='ScheduleModal__day'>
          <input className='ScheduleModal__day__check' type='checkbox' name='saturday' id='saturday' />
          <h2 className='ScheduleModal__day__name'>Sábado</h2>
          <label htmlFor='startSaturday'>
            Inicio
            <br />
            <input type='time' name='startSaturday' id='startSaturday' />
          </label>
          <label htmlFor='endSaturday'>
            Fin
            <br />
            <input type='time' name='endSaturday' id='endSaturday' />
          </label>
        </div>
        <div className='ScheduleModal__day'>
          <input className='ScheduleModal__day__check' type='checkbox' name='sunday' id='sunday' />
          <h2 className='ScheduleModal__day__name'>Domingo</h2>
          <label htmlFor='startSunday'>
            Inicio
            <br />
            <input type='time' name='startSunday' id='startSunday' />
          </label>
          <label htmlFor='endSunday'>
            Fin
            <br />
            <input type='time' name='endSunday' id='endSunday' />
          </label>
        </div>
        <button type='submit' onClick={handleClose} className='ScheduleModal__save'><img src={send} alt='Enviar calendario' /></button>
      </form>
    </div>
  );
};

export default ScheduleModal;

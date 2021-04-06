import React, { useState } from 'react';
import '../assets/styles/portals/Schedule.scss';
import send from '../assets/static/icons/check.svg';

const ScheduleModal = ({ onClose, setSchedule }) => {

  const [horario, setHorario] = useState({
    lunes: {
      disponible: false,
      desde: '',
      hasta: '',
    },
    martes: {
      disponible: false,
      desde: '',
      hasta: '',
    },
    miercoles: {
      disponible: false,
      desde: '',
      hasta: '',
    },
    jueves: {
      disponible: false,
      desde: '',
      hasta: '',
    },
    viernes: {
      disponible: false,
      desde: '',
      hasta: '',
    },
    sabado: {
      disponible: false,
      desde: '',
      hasta: '',
    },
    domingo: {
      disponible: false,
      desde: '',
      hasta: '',
    },
  });

  function handleClose() {
    setSchedule(horario);
    onClose(true);
  }

  function handleChange(e) {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const { type } = target.dataset;

    setHorario({
      ...horario,
      [name]: {
        ...horario[name],
        [type]: value,
      },
    });

    console.log('El value es: ', value);
    console.log('El name es: ', name);
    console.log('El type es: ', type);
    console.log('El horario es: ', horario);
  }

  return (
    <div className='ScheduleModal'>
      <p className='ScheduleModal__instructions'>
        Selecciona los días que tendrás diponibles y su respectivo horario.
      </p>
      <div className='ScheduleModal__day'>
        <input className='ScheduleModal__day__check' type='checkbox' value={horario.lunes.disponible} data-type='disponible' onChange={handleChange} name='lunes' id='lunes' />
        <h2 className='ScheduleModal__day__name'>Lunes</h2>
        <label htmlFor='startMonday'>
          Inicio
          <br />
          <input type='time' onChange={handleChange} data-type='desde' name='lunes' id='startMonday' />
        </label>
        <label htmlFor='endMonday'>
          Fin
          <br />
          <input type='time' onChange={handleChange} data-type='hasta' name='lunes' id='endMonday' />
        </label>
      </div>
      <div className='ScheduleModal__day'>
        <input className='ScheduleModal__day__check' type='checkbox' value={horario.martes.disponible} data-type='disponible' onChange={handleChange} name='martes' id='martes' />
        <h2 className='ScheduleModal__day__name'>Martes</h2>
        <label htmlFor='startTuesday'>
          Inicio
          <br />
          <input type='time' onChange={handleChange} data-type='desde' name='martes' id='startTuesday' />
        </label>
        <label htmlFor='endTuesday'>
          Fin
          <br />
          <input type='time' onChange={handleChange} data-type='hasta' name='martes' id='endTuesday' />
        </label>
      </div>
      <div className='ScheduleModal__day'>
        <input className='ScheduleModal__day__check' type='checkbox' value={horario.miercoles.disponible} data-type='disponible' onChange={handleChange} name='miercoles' id='miercoles' />
        <h2 className='ScheduleModal__day__name'>Miercoles</h2>
        <label htmlFor='startWednesday'>
          Inicio
          <br />
          <input type='time' onChange={handleChange} data-type='desde' name='miercoles' id='startWednesday' />
        </label>
        <label htmlFor='endWednesday'>
          Fin
          <br />
          <input type='time' onChange={handleChange} data-type='hasta' name='miercoles' id='endWednesday' />
        </label>
      </div>
      <div className='ScheduleModal__day'>
        <input className='ScheduleModal__day__check' type='checkbox' value={horario.jueves.disponible} data-type='disponible' onChange={handleChange} name='jueves' id='jueves' />
        <h2 className='ScheduleModal__day__name'>Jueves</h2>
        <label htmlFor='startThursday'>
          Inicio
          <br />
          <input type='time' onChange={handleChange} data-type='desde' name='jueves' id='startThursday' />
        </label>
        <label htmlFor='endThursday'>
          Fin
          <br />
          <input type='time' onChange={handleChange} data-type='hasta' name='jueves' id='endThursday' />
        </label>
      </div>
      <div className='ScheduleModal__day'>
        <input className='ScheduleModal__day__check' type='checkbox' value={horario.viernes.disponible} data-type='disponible' onChange={handleChange} name='viernes' id='viernes' />
        <h2 className='ScheduleModal__day__name'>Viernes</h2>
        <label htmlFor='startFriday'>
          Inicio
          <br />
          <input type='time' onChange={handleChange} data-type='desde' name='viernes' id='startFriday' />
        </label>
        <label htmlFor='endFriday'>
          Fin
          <br />
          <input type='time' onChange={handleChange} data-type='hasta' name='viernes' id='endFriday' />
        </label>
      </div>
      <div className='ScheduleModal__day'>
        <input className='ScheduleModal__day__check' type='checkbox' value={horario.sabado.disponible} data-type='disponible' onChange={handleChange} name='sabado' id='sabado' />
        <h2 className='ScheduleModal__day__name'>Sábado</h2>
        <label htmlFor='startSaturday'>
          Inicio
          <br />
          <input type='time' onChange={handleChange} data-type='desde' name='sabado' id='startSaturday' />
        </label>
        <label htmlFor='endSaturday'>
          Fin
          <br />
          <input type='time' onChange={handleChange} data-type='hasta' name='sabado' id='endSaturday' />
        </label>
      </div>
      <div className='ScheduleModal__day'>
        <input className='ScheduleModal__day__check' type='checkbox' value={horario.domingo.disponible} data-type='disponible' onChange={handleChange} name='domingo' id='domingo' />
        <h2 className='ScheduleModal__day__name'>Domingo</h2>
        <label htmlFor='startSunday'>
          Inicio
          <br />
          <input type='time' onChange={handleChange} data-type='desde' name='domingo' id='startSunday' />
        </label>
        <label htmlFor='endSunday'>
          Fin
          <br />
          <input type='time' onChange={handleChange} data-type='hasta' name='domingo' id='endSunday' />
        </label>
      </div>
      <button type='submit' onClick={handleClose} className='ScheduleModal__save'><img src={send} alt='Enviar calendario' /></button>
    </div>
  );
};

export default ScheduleModal;

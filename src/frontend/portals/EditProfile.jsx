import React, { useState } from 'react';
import '../assets/styles/portals/EditProfile.scss';
import camera from '../assets/static/icons/camera_dark.svg';
import check from '../assets/static/icons/check.svg';
import reel from '../assets/static/icons/reel.svg';
import attach from '../assets/static/icons/clip.svg';
import calendar from '../assets/static/icons/schedule.svg';

const EditProfile = ({ onClose }) => {

  const [section, setSection] = useState(false);
  const [schedule, setSchedule] = useState(false);

  function handleBirth() {
    const birth = document.getElementById('birthDate');
    birth.type = 'date';
  }

  function handlePersonal() {
    setSection(false);
  }

  function handleProfessional() {
    setSection(true);
  }

  function handleClose(e) {
    onClose(e);
  }

  function handleSchedule() {
    setSchedule(true);
  }

  function handleCloseSchedule() {
    setSchedule(false);
  }

  if (!section && !schedule) {
    return (
      <div className='EditProfile'>
        <div className='EditProfile__select'>
          <button type='button' className='EditProfile__personal active'>Personal</button>
          <button type='button' onClick={handleProfessional} className='EditProfile__professional'>Profesional</button>
        </div>
        <label className='EditProfile__picture' htmlFor='picture'>
          <img src={camera} alt='' />
          <input type='file' />
        </label>
        <input type='text' placeholder='Nombre' aria-label='editar nombre' className='signup__input' />
        <input type='tel' placeholder='Teléfono' aria-label='editar teléfono' className='signup__input' />
        <input type='text' onClick={handleBirth} id='birthDate' placeholder='Fecha de nacimiento' aria-label='editar fecha de nacimiento' className='signup__input' />
        <select aria-label='editar nombre' className='signup__input'>
          <option value=''>País</option>
        </select>
        <button type='button' onClick={handleClose} className='EditProfile__save'>
          <img src={check} alt='guardar edición' />
        </button>
      </div>
    );
  };

  if (section && !schedule) {
    return (
      <div className='EditProfile'>
        <div className='EditProfile__select'>
          <button type='button' onClick={handlePersonal} className='EditProfile__personal'>Personal</button>
          <button type='button' className='EditProfile__professional active'>Profesional</button>
        </div>
        <textarea name='description' id='description' cols='30' rows='8' placeholder='Escribe tu descripción, esto lo verán los clientes antes de iniciar una llamada contigo.' />
        <textarea name='abilities' id='abilities' cols='30' rows='3' placeholder='Escribe tres habilidades y sepáralas con comas.' />
        <div className='EditProfile__attach'>
          <label htmlFor='cv' className='cv'>
            <span>Cambiar CV</span>
            <img src={attach} alt='Agrega tu CV' />
            <input type='file' name='cv' id='cv' />
          </label>
          <label htmlFor='reel' className='reel'>
            <span>Agregar Reel</span>
            <img src={reel} alt='Agrega un Reel' />
            <input type='file' name='reel' id='reel' />
          </label>
        </div>
        <button type='button' className='EditSchedule' onClick={handleSchedule}>
          <span>Definir horario de atención</span>
          <img src={calendar} alt='establecer horario de atención' />
        </button>
        <button type='button' onClick={handleClose} className='EditProfile__save'>
          <img src={check} alt='guardar edición' />
        </button>
      </div>
    );
  };

  if (schedule) {
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
          <button type='button' onClick={handleCloseSchedule} className='ScheduleModal__save'><img src={check} alt='Enviar calendario' /></button>
        </form>
      </div>
    );
  };
};

export default EditProfile;

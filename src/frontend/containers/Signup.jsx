/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import statusReducers from '../reducers/statusReducers';
import * as actionsStatus from '../actions';

import '../assets/styles/containers/Signup.scss';

import icon from '../assets/static/logo/mrwit-logo.png';
import background from '../assets/static/images/background1.png';
import facebook from '../assets/static/icons/facebook.svg';
import linkedin from '../assets/static/icons/linkedin.svg';
import google from '../assets/static/icons/google.svg';
import arrowR from '../assets/static/icons/arrowright.svg';
import camera from '../assets/static/icons/camera_dark.svg';
import check from '../assets/static/icons/check.svg';
import clip from '../assets/static/icons/clip.svg';
import schedule from '../assets/static/icons/schedule.svg';
import arrowL from '../assets/static/icons/arrowleft.svg';

import DataJSON from '../../professions';
import DataSectors from '../../sectors';

import ScheduleModal from '../portals/Schedule';
import Modal from '../portals/Modal';

const Signup = (props) => {
  const [input, setInput] = useState({
    name: '',
    lastname: '',
    id: '',
    tel: '',
    gender: '',
    country: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [selected, setSelected] = useState('');
  const [errors, setErrors] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const history = useHistory();
  const [specialities, setSpecialities] = useState([]);

  function handleChange(event) {
    input[event.target.name] = event.target.value;
    setInput({ input });
  }

  function handleSubmit(event) {
    // if (validate()) {
    //   const input = {};
    //   input['name'] = '';
    //   input['id'] = '';
    //   input['tel'] = '';
    //   input['gender'] = '';
    //   input['country'] = '';
    //   input['email'] = '';
    //   input['password'] = '';
    //   input['confirmPassword'] = '';
    //   setInput({ input });
    //   props.setIsOnline(props.isOnline);
    //   alert('Te has registrado');
    // }
    event.preventDefault();
    const user = {
      name: name.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
      phone: tel.value,
      dni: id.value,
      //country: country.value,
      rol: rol.value,
    };
    console.log(user);
    const res = axios.post('http://localhost:3000/signup', user)
      .then((res) => {
        console.log(res.data);
        history.push('/recargar');
      })
      .catch((e) => console.log(e));
  }

  function handleSubmitConsultant(event) {
    event.preventDefault();
    const user = {
      name: name.value,
      picture: picture.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
      tel: tel.value,
      date: date.value,
      //country: country.value,
      profesion: profesion.value,
      especialidad: especialidad.value,
      abilities: habilidades.value,
      policy: policy.value,
      rol: rol.value,
    };
    console.log(user);
    const res = axios.post('http://localhost:3000/signup', user)
      .then((res) => {
        console.log(res.data);
        history.push('/');
      })
      .catch((e) => console.log(e));

  }

  function validate() {
    // eslint-disable-next-line react/destructuring-assignment
    let isValid = true;
    if (!input['name']) {
      isValid = false;
      errors['name'] = 'Por favor ingresa tu nombre.';
    }

    if (!input['id']) {
      isValid = false;
      errors['id'] = 'Por favor ingresa tu cédula.';
    }

    if (!input['tel']) {
      isValid = false;
      errors['tel'] = 'Por favor ingresa tu teléfono.';
    }

    if (!input['country']) {
      isValid = false;
      errors['country'] = 'Por favor ingresa tu país.';
    }

    if (!input['email']) {
      isValid = false;
      errors['email'] = 'Por favor ingresa tu correo.';
    }

    if (typeof input['email'] !== 'undefined') {
      const pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input['email'])) {
        isValid = false;
        errors['email'] = 'Por favor ingresa un correo válido.';
      }
    }

    if (!input['password']) {
      isValid = false;
      errors['password'] = 'Por favor ingresa tu contraseña.';
    }

    if (!input['confirmPassword']) {
      isValid = false;
      errors['confirmPassword'] = 'Por favor confirma tu contraseña.';
    }

    if (typeof input['password'] !== 'undefined' && typeof input['confirmPassword'] !== 'undefined') {
      if (input['password'] !== input['confirmPassword']) {
        isValid = false;
        errors['password'] = 'Las contraseñas no coinciden.';
      }
    }

    setErrors({ errors });
    return isValid;
  }

  function handleSignupConsultant(event) {
    const formContent = document.getElementById('signup__form__content');
    const status = document.getElementById('signup__form__indicator__inner');

    status.classList.add('active');
    formContent.classList.add('active');
    event.preventDefault();
  }

  function handleSignupClient(event) {
    const formContent = document.getElementById('signup__form__content');
    const otherButtons = document.getElementsByClassName('signup__button');

    for (let i = 0; i < otherButtons.length; i++) {
      otherButtons[i].classList.add('hidden');
    }

    formContent.classList.add('active');
    event.preventDefault();
  }

  function handleBack(event) {
    const formContent = document.getElementById('signup__form__content');
    const otherButtons = document.getElementsByClassName('signup__button');
    const status = document.getElementById('signup__form__indicator__inner');

    for (let i = 0; i < otherButtons.length; i++) {
      otherButtons[i].classList.remove('hidden');
    }

    status.classList.remove('active');
    formContent.classList.remove('active');
    event.preventDefault();
  }

  function handleOpenModal(e) {
    setModalIsOpen(true);
  };

  function handleCloseModal(e) {
    setModalIsOpen(false);
  };

  function handleSpecialities() {
    const profSelected = document.getElementById('profesion');
    const value = profSelected.value;
    for (let i = 0; i < DataJSON.length; i++) {
      if (Object.getOwnPropertyNames(DataJSON[i])[0] === value) {
        const info = DataJSON[i];
        setSpecialities(info[value]);
      }
    }
  }

  const { isOnline, user } = props;
  // eslint-disable-next-line react/destructuring-assignment

  const arrayOfSectors = DataSectors.sectors;
  const Sector = arrayOfSectors.map((sectors) => <option key={sectors} value={sectors}>{sectors}</option>);
  const Professions = DataJSON.map((profesion) => <option key={Object.getOwnPropertyNames(profesion)} value={Object.getOwnPropertyNames(profesion)}>{Object.getOwnPropertyNames(profesion)}</option>);
  const Speciality = specialities.map((speciality) => <option key={speciality} value={speciality}>{speciality}</option>);

  /*   if (isOnline) {
    return (<Redirect to='/' />);
  }
 */
  if (user === 'consultant') {
    return (
      <section className='Signup'>
        <h2 className='signupConsultant__text__h2'>¡Lleva tu talento a todo el mundo!</h2>
        <div className='signup__container'>
          <div className='signup__form__indicator'>
            <div id='signup__form__indicator__inner' className='signup__form__indicator__inner'>{' '}</div>
          </div>
          <form onSubmit={handleSubmitConsultant} id='signup__client__form' className='signup__form'>
            <div id='signup__form__content' className='signup__form__content'>
              <fieldset className='signup__form__fieldset left'>
                <h2 className='signup__form__consultant__title'>Personal</h2>
                <label htmlFor='picture' className='input_photo_label'>
                  <img src={camera} alt='Escoge tu imágen de perfil' />
                  <input type='file' name='picture' id='picture' className='signup__input__file' />
                </label>
                <span className='input_photo_label_text'>Agregar foto</span>
                <input
                  required
                  type='text'
                  placeholder='Nombre'
                  name='name'
                  id='name'
                  className='signup__input name'
                />

                <div><small className='signup__error'>{errors.name}</small></div>

                <input
                  required
                  type='text'
                  placeholder='Apellido'
                  name='lastname'
                  id='lastname'
                  className='signup__input name'
                />

                <div><small className='signup__error'>{errors.name}</small></div>

                <input
                  required
                  type='tel'
                  placeholder='Teléfono'
                  name='tel'
                  id='tel'
                  className='signup__input tel'
                />

                <div><small className='signup__error'>{errors.tel}</small></div>

                <input
                  required
                  type='date'
                  placeholder='Fecha de nacimiento'
                  name='date'
                  id='date'
                  className='signup__input date'
                />

                <div><small className='signup__error'>{errors.date}</small></div>

                <ReactFlagsSelect
                  placeholder='Seleccionar país'
                  selected={selected}
                  className='signup__input'
                  onSelect={(e) => { setSelected(e); }}
                  countries={['AR', 'AG', 'BB', 'BM', 'BO', 'BR', 'BS', 'BZ', 'CL', 'CO', 'CR', 'CU', 'CW', 'DM', 'DO', 'EC', 'SV', 'GT', 'JM', 'MX', 'PA', 'PY', 'PE', 'PR', 'UY', 'VE']}
                />

                <div><small className='signup__error'>{errors.country}</small></div>

                <input
                  type='email'
                  placeholder='Correo electrónico'
                  name='email'
                  id='email'
                  className='signup__input email'
                />

                <div><small className='signup__error'>{errors.email}</small></div>

                <input
                  type='password'
                  placeholder='Contraseña'
                  name='password'
                  id='password'
                  className='signup__input password'
                />

                <div><small className='signup__error'>{errors.password}</small></div>

                <input
                  type='password'
                  placeholder='Repetir contraseña'
                  name='confirmPassword'
                  id='confirmPassword'
                  className='signup__input password'
                />

                <div><small className='signup__error'>{errors.confirmPassword}</small></div>

                <button
                  type='button'
                  onClick={handleSignupConsultant}
                  className='signup__consultant__submit'
                >
                  <img src={arrowR} alt='siguiente parte del cuestionario' />
                </button>

              </fieldset>
              <fieldset className='signup__form__fieldset right'>
                <div className='signup__title__header'>
                  <button
                    type='button'
                    className='signup__back__button'
                    onClick={handleBack}
                  >
                    <img
                      src={arrowL}
                      alt='volver'
                    />
                  </button>

                  <h2 className='signup__form__consultant__title'>Profesional</h2>
                </div>
                <select
                  name='sector'
                  id='sector'
                  className='signup__input sector'
                >
                  <option value=''>Sector</option>
                  {Sector}
                </select>

                <div><small className='signup__error'>{errors.profesion}</small></div>
                <select
                  name='profesion'
                  id='profesion'
                  onChange={handleSpecialities}
                  className='signup__input profesion'
                >
                  <option value=''>Profesión</option>
                  {Professions}
                </select>

                <div><small className='signup__error'>{errors.profesion}</small></div>
                <select
                  name='especialidad'
                  id='especialidad'
                  className='signup__input especialidad'
                >
                  <option value=''>Especialidad</option>
                  {Speciality}
                </select>
                <div><small className='signup__error'>{errors.especialidad}</small></div>

                <textarea
                  name='habilidades'
                  id='habilidades'
                  name='abilities'
                  cols='30'
                  rows='5'
                  placeholder='Escribe tres habilidades y sepáralas con comas, podrás cambiarlas luego, así que no te preocupes si luego quieres variar.'
                  className='signup__input textarea'
                />

                <label htmlFor='cv' className='signup__input__cv'>
                  <h3 className='signup__input__cv__title'>Ajunta tu hoja de vida</h3>
                  <input type='file' name='cv' id='cv' className='signup__input__file' />
                  <img className='signup__input__cv__icon' src={clip} alt='adjunta tu CV' />
                </label>

                <button type='button' onClick={handleOpenModal} className='signup__input__schedule'>
                  <h3 className='signup__input__schedule__title'>Definir horario de atención*</h3>
                  <img className='signup__input__schedule__icon' src={schedule} alt='Define tu horario' />
                </button>

                <Modal onClose={handleCloseModal} isOpen={modalIsOpen}>
                  <ScheduleModal onClose={handleCloseModal} />
                </Modal>

                <label htmlFor='policy' className='signup__policy'>
                  <input type='checkbox' name='policy' id='policy' />
                  <p className='signup__policy__info'>
                    Con esta casilla indica que está de acuerdo con nuestras
                    <Link to='#'>Políticas de privacidad</Link>
                    y
                    <Link to='#'>Términos y condiciones</Link>
                  </p>
                </label>

                <button
                  type='submit'
                  name='rol'
                  id='rol'
                  value='consultant'
                  className='signup__consultant__submit'
                >
                  <img src={check} alt='termina el cuestionario' />
                </button>

                <small>* En caso de no seleccionar tu horario, estarás disponible 24/7</small>
              </fieldset>
            </div>
            <br />
            <div className='signup__login'>
              <small>
                ¿Ya tienes cuenta?
                <Link to='/login'>  Inicia sesión</Link>
              </small>
            </div>
          </form>
        </div>
        <img src={background} alt='icon' className='signup__background' />
      </section>
    );
  }

  if (user === 'client') {
    return (
      <section className='Signup'>
        <img src={icon} alt='icon' className='signup__icon' />
        <h2 className='signup__text'>¡Un momento! Antes de pasar a la llamada debes registrarte</h2>
        <div className='signup__container'>
          <form onSubmit={handleSubmit} id='signup__client__form' className='signup__form'>
            <div id='signup__form__content' className='signup__form__content'>
              <fieldset className='signup__form__fieldset left'>

                <input
                  required
                  type='text'
                  placeholder='Nombre'
                  name='name'
                  id='name'
                  className='signup__input name'
                />

                <div><small className='signup__error'>{errors.name}</small></div>

                <input
                  required
                  type='text'
                  placeholder='Apellido'
                  name='lastname'
                  id='lastname'
                  className='signup__input name'
                />

                <div><small className='signup__error'>{errors.name}</small></div>

                <input
                  required
                  type='number'
                  placeholder='Cédula'
                  name='id'
                  id='id'
                  className='signup__input id'
                />

                <div><small className='signup__error'>{errors.id}</small></div>

                <input
                  required
                  type='tel'
                  placeholder='Teléfono'
                  name='tel'
                  id='tel'
                  className='signup__input tel'
                />
                <div><small className='signup__error'>{errors.tel}</small></div>

                <ReactFlagsSelect
                  placeholder='Seleccionar país'
                  selected={selected}
                  className='signup__input'
                  onSelect={(e) => { setSelected(e); }}
                  countries={['AR', 'AG', 'BB', 'BM', 'BO', 'BR', 'BS', 'BZ', 'CL', 'CO', 'CR', 'CU', 'CW', 'DM', 'DO', 'EC', 'SV', 'GT', 'JM', 'MX', 'PA', 'PY', 'PE', 'PR', 'UY', 'VE']}
                />

              </fieldset>
              <fieldset className='signup__form__fieldset right'>
                <input
                  required
                  type='email'
                  placeholder='Correo electrónico'
                  name='email'
                  id='email'
                  className='signup__input email'
                />

                <div><small className='signup__error'>{errors.email}</small></div>

                <input
                  required
                  type='password'
                  placeholder='Contraseña'
                  name='password'
                  id='password'
                  className='signup__input password'
                />

                <div><small className='signup__error'>{errors.password}</small></div>

                <input
                  type='password'
                  placeholder='Repetir contraseña'
                  name='confirmPassword'
                  id='confirmPassword'
                  className='signup__input password'
                />
                <div><small className='signup__error'>{errors.confirmPassword}</small></div>

                <button type='submit' className='signup__submit' name='rol' value='client' id='rol'>Registrarme</button>
              </fieldset>
            </div>
            <button type='button' onClick={handleSignupClient} className='signup__submit signup__button'>Registrarme por mi cuenta</button>
            <button type='button' onClick={handleSignupClient} className='signup__facebook signup__button'>
              <img src={facebook} alt='icon' />
              Registrarme con Facebook
            </button>
            <button type='button' onClick={handleSignupClient} className='signup__linkedin signup__button'>
              <img src={linkedin} alt='icon' />
              Registrarme con LinkedIn
            </button>
            <button type='button' onClick={handleSignupClient} className='signup__google signup__button'>
              <img src={google} alt='icon' />
              Registrarme con Google
            </button>
          </form>
        </div>

        <div className='signup__login'>
          <small>
            ¿Ya tienes cuenta?
            <Link to='/login'>  Inicia sesión</Link>
          </small>
        </div>
        <img src={background} alt='icon' className='signup__background' />
      </section>
    );
  };
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(Signup);

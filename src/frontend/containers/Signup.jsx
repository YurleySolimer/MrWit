import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link, useHistory, Redirect } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import CurrencyFormat from 'react-currency-format';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-auth';
import MyFacebookButton from '../tools/FacebookButton';
import { setNewUser, clearSearch } from '../actions/mrwit';
import { setUser } from '../actions/index';

import '../assets/styles/containers/Signup.scss';

import icon from '../assets/static/logo/mrwit-logo.png';
import background from '../assets/static/images/background1.png';
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
import { validate } from '../Tools/validate';

import ScheduleModal from '../portals/Schedule';
import Modal from '../portals/Modal';
import Loading from '../components/Loading';
import Fatal from '../components/Fatal';

const Signup = ({ status, mrwit, setUser, setNewUser, clear }) => {
  const [input, setInput] = useState({
    name: '',
    lastname: '',
    tel: '',
    file: null,
    file2: null,
    password: '',
    confirmPassword: '',
    email: '',
    dni: '',
    date: '',
    horario: {},
    country: '',
    sector: '',
    profesion: '',
    especialidad: '',
    abilities: [],
  });
  const [errors, setErrors] = useState({
    name: {
      value: false,
      message: '',
    },
    lastname: {
      value: false,
      message: '',
    },
    tel: {
      value: false,
      message: '',
    },
    file: {
      value: false,
      message: '',
    },
    file2: {
      value: false,
      message: '',
    },
    password: {
      value: false,
      message: '',
    },
    confirmPassword: {
      value: false,
      message: '',
    },
    email: {
      value: false,
      message: '',
    },
    dni: {
      value: false,
      message: '',
    },
    date: {
      value: false,
      message: '',
    },
    country: {
      value: false,
      message: '',
    },
    sector: {
      value: false,
      message: '',
    },
    profesion: {
      value: false,
      message: '',
    },
    especialidad: {
      value: false,
      message: '',
    },
    abilities: {
      value: true,
      message: '',
    },
  });
  const [agreement, setAgreement] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [selected, setSelected] = useState('');
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [specialities, setSpecialities] = useState([]);
  const history = useHistory();

  const { user } = status;
  const { isLoading } = mrwit;

  function handleSubmit(event) {
    event.preventDefault();
    if (!agreement) {
      alert('Debes aceptar los términos y condiciones');
    } else if (isValid && agreement) {
      const user = {
        name: input.name,
        lastname: input.lastname,
        email: input.email,
        password: input.password,
        phone: input.tel,
        dni: input.dni,
        country: input.country,
        rol: rol.value,
      };
      setNewUser([user, '', '/recargar', setUser]);
    } else {
      alert('Debes comprobar todos los campos para registrarte');
    }
  }

  const handleSignupGoogle = async (googleData) => {
    const data = JSON.stringify({ token: googleData.tokenId });
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json',
      },
    };
    axios.post(`${axios.defaults.baseURL}/auth/google`,
      data,
      config)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        history.push('/recargar');

      })
      .catch((e) => console.log(e));
  };

  const handleSignupFB = (response) => {
    //const data = JSON.stringify({ token: response.accessToken });
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };
    axios.post(`${axios.defaults.baseURL}/auth/facebook/callback`,
      response,
      config)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        history.push('/recargar');

      })
      .catch((e) => console.log(e));
  };

  const handlepic = (e) => {
    const ca = document.getElementById('cameraIcon');
    const ch = document.getElementById('checkIcon');

    if (e.target.files[0]) {
      ch.classList.add('active');
      ca.classList.remove('active');
    } else {
      ca.classList.add('active');
      ch.classList.remove('active');
    }

    setFile(e.target.files[0]);
  };

  const handleCV = (e) => {
    setFile2(e.target.files[0]);
  };

  function handleSubmitConsultant(event) {
    event.preventDefault();

    if (!agreement) {
      alert('Debes aceptar los términos y condiciones');
    } else if (isValid && agreement) {
      const data = new FormData();
      data.append('name', input.name);
      data.append('lastname', input.lastname);
      data.append('tel', input.tel);
      data.append('picture', file);
      data.append('picture', file2);
      data.append('email', input.email);
      data.append('password', input.password);
      data.append('date', input.date);
      data.append('country', input.country);
      data.append('category', input.sector);
      data.append('profession', input.profesion);
      data.append('especialidad', input.especialidad);
      data.append('abilities', input.abilities[0]);
      data.append('abilities', input.abilities[1]);
      data.append('abilities', input.abilities[2]);
      data.append('policy', policy.value);
      data.append('rol', rol.value);

      if (input.horario) {
        const { horario } = input;
        const horarioFinal = {
          horario,
        };

        if (horarioFinal.horario.lunes && horarioFinal.horario.martes &&
          horarioFinal.horario.miercoles && horarioFinal.horario.jueves &&
          horarioFinal.horario.viernes && horarioFinal.horario.sabado &&
          horarioFinal.horario.domingo) {

          data.append('Lunes[disponible]', horarioFinal.horario.lunes.disponible);
          data.append('Lunes[desde]', horarioFinal.horario.lunes.desde);
          data.append('Lunes[hasta]', horarioFinal.horario.lunes.hasta);

          data.append('Martes[disponible]', horarioFinal.horario.martes.disponible);
          data.append('Martes[desde]', horarioFinal.horario.martes.desde);
          data.append('Martes[hasta]', horarioFinal.horario.martes.hasta);

          data.append('Miercoles[disponible]', horarioFinal.horario.miercoles.disponible);
          data.append('Miercoles[desde]', horarioFinal.horario.miercoles.desde);
          data.append('Miercoles[hasta]', horarioFinal.horario.miercoles.hasta);

          data.append('Jueves[disponible]', horarioFinal.horario.jueves.disponible);
          data.append('Jueves[desde]', horarioFinal.horario.jueves.desde);
          data.append('Jueves[hasta]', horarioFinal.horario.jueves.hasta);

          data.append('Viernes[disponible]', horarioFinal.horario.viernes.disponible);
          data.append('Viernes[desde]', horarioFinal.horario.viernes.desde);
          data.append('Viernes[hasta]', horarioFinal.horario.viernes.hasta);

          data.append('Sabado[disponible]', horarioFinal.horario.sabado.disponible);
          data.append('Sabado[desde]', horarioFinal.horario.sabado.desde);
          data.append('Sabado[hasta]', horarioFinal.horario.sabado.hasta);

          data.append('Domingo[disponible]', horarioFinal.horario.domingo.disponible);
          data.append('Domingo[desde]', horarioFinal.horario.domingo.desde);
          data.append('Domingo[hasta]', horarioFinal.horario.domingo.hasta);
        }
      }

      const config = {
        headers: {
          'Accept': 'application/json',
          'content-type': 'multipart/form-data',
        },
      };

      try {
        setNewUser([data, config, '/', setUser]);
      } catch (error) {
        alert(error);
      }

    } else {
      alert('Debes comprobar todos los campos para registrarte');
    }
  }

  const handleBecomeConsultant = () => {
    setUser({ rol: { name: 'consultant' } });
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
    setIsValid(validate(name, value));
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

  function handleBackClient(event) {
    const formContent = document.getElementById('signup__form__content');
    const otherButtons = document.getElementsByClassName('signup__button');

    for (let i = 0; i < otherButtons.length; i++) {
      otherButtons[i].classList.remove('hidden');
    }

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
    const { value } = profSelected;
    for (let i = 0; i < DataJSON.length; i++) {
      if (Object.getOwnPropertyNames(DataJSON[i])[0] === value) {
        const info = DataJSON[i];
        const select = document.getElementById('especialidad');
        const input = document.getElementById('especialidad2');
        if (info[value].length) {
          select.classList.remove('hidden');
          input.classList.add('hidden');
          setSpecialities(info[value]);
        } else {
          input.classList.remove('hidden');
          select.classList.add('hidden');
        }
      }
    }
    setInput({
      ...input,
      profesion: value,
    });
    setIsValid(validate('profesion', value));
  }

  const handleAbilities = (e) => {

    const abilities = document.getElementById('habilidades');
    const arr = abilities.value.split(',');

    if (arr.length === 4) {
      abilities.setAttribute('readonly', true);
    }
    const { name } = e.target;
    setInput({
      ...input,
      [name]: [...arr],
    });
    setIsValid(validate('abilities', arr));
  };
  // eslint-disable-next-line react/destructuring-assignment

  const arrayOfSectors = DataSectors.sectors;
  const Sector = arrayOfSectors.map((sectors) => <option key={sectors} value={sectors}>{sectors}</option>);
  const Professions = DataJSON.map((profesion) => <option key={Object.getOwnPropertyNames(profesion)} value={Object.getOwnPropertyNames(profesion)}>{Object.getOwnPropertyNames(profesion)}</option>);
  const Speciality = specialities.map((speciality) => <option key={speciality} value={speciality}>{speciality}</option>);

  if (user.status) {
    return (<Redirect to='/' />);
  }

  const ChangeSelect = (e) => {
    setSelected(e);
    setInput({
      ...input,
      country: e,
    });
    setIsValid(validate('country', e));
  };

  const handleDate = () => {
    const date = document.getElementById('date');
    date.setAttribute('type', 'date');
  };

  const handleAgreement = () => {
    setAgreement(!agreement);
    setIsValid(validate());
  };

  if (user.rol.name === 'consultant') {
    return (
      <section className='Signup'>
        <Modal transparent={true} noButton={true} isOpen={isLoading}>
          <Loading />
        </Modal>
        <Modal isOpen={mrwit.error} onClose={clear}>
          <Fatal message={mrwit.error} />
        </Modal>
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
                  <img src={camera} id='cameraIcon' className='active' alt='Escoge tu imágen de perfil' />
                  <img src={check} id='checkIcon' className='' alt='Escoge tu imágen de perfil' />
                  <input
                    type='file'
                    name='picture'
                    id='picture'
                    className='signup__input__file'
                    accept='image/png, .jpeg, .jpg, image/gif'
                    onChange={handlepic}
                  />
                </label>
                <span className='input_photo_label_text'>Agregar foto</span>
                <input
                  value={input.name}
                  onChange={handleChange}
                  required
                  type='text'
                  placeholder='Nombre'
                  name='name'
                  id='name'
                  className='signup__input name'
                />

                <div><small className='signup__error'>{errors.name.message}</small></div>

                <input
                  value={input.lastname}
                  onChange={handleChange}
                  required
                  type='text'
                  placeholder='Apellido'
                  name='lastname'
                  id='lastname'
                  className='signup__input name'
                />

                <div><small className='signup__error'>{errors.lastname.message}</small></div>

                <CurrencyFormat
                  value={input.tel}
                  onChange={handleChange}
                  required
                  type='tel'
                  placeholder='Teléfono'
                  format='###-#######'
                  name='tel'
                  id='tel'
                  className='signup__input tel'
                />

                <div><small className='signup__error'>{errors.tel.message}</small></div>

                <input
                  value={input.date}
                  onChange={handleChange}
                  required
                  type='text'
                  max='2008-12-31'
                  min='1920-12-21'
                  onFocus={handleDate}
                  placeholder='Fecha de nacimiento'
                  name='date'
                  id='date'
                  className='signup__input date'
                />

                <div><small className='signup__error'>{errors.date.message}</small></div>

                <ReactFlagsSelect
                  id='CountrySelectList'
                  placeholder='Seleccionar país'
                  selected={selected}
                  className='signup__input'
                  onSelect={(e) => { ChangeSelect(e); }}
                  countries={['AR', 'AG', 'BB', 'BM', 'BO', 'BR', 'BS', 'BZ', 'CL', 'CO', 'CR', 'CU', 'CW', 'DM', 'DO', 'EC', 'SV', 'GT', 'JM', 'MX', 'PA', 'PY', 'PE', 'PR', 'UY', 'VE']}
                />
                <input type='hidden' name='country' value={input.country} id='country' />

                <div><small className='signup__error'>{errors.country.message}</small></div>

                <input
                  value={input.email}
                  onChange={handleChange}
                  type='email'
                  placeholder='Correo electrónico'
                  name='email'
                  id='email'
                  className='signup__input email'
                />

                <div><small className='signup__error'>{errors.email.message}</small></div>

                <input
                  value={input.password}
                  onChange={handleChange}
                  type='password'
                  placeholder='Contraseña'
                  name='password'
                  id='password'
                  className='signup__input password'
                />

                <div><small className='signup__error'>{errors.password.message}</small></div>

                <input
                  value={input.confirmPassword}
                  onChange={handleChange}
                  type='password'
                  placeholder='Repetir contraseña'
                  name='confirmPassword'
                  id='confirmPassword'
                  className='signup__input password'
                />

                <div><small className='signup__error'>{errors.confirmPassword.message}</small></div>

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
                  value={input.sector}
                  onChange={handleChange}
                  name='sector'
                  id='sector'
                  className='signup__input sector'
                >
                  <option value=''>Sector</option>
                  {Sector}
                </select>
                <div><small className='signup__error'>{errors.sector.message}</small></div>

                <select
                  value={input.profesion}
                  name='profesion'
                  id='profesion'
                  onChange={handleSpecialities}
                  className='signup__input profesion'
                >
                  <option value=''>Profesión</option>
                  {Professions}
                </select>
                <div><small className='signup__error'>{errors.profesion.message}</small></div>

                <select
                  value={input.especialidad}
                  onChange={handleChange}
                  name='especialidad'
                  id='especialidad'
                  className='signup__input especialidad'
                >
                  <option value=''>Especialidad</option>
                  {Speciality}
                </select>
                <input type='text' value={input.especialidad} placeholder='¡Cuéntanos tu especialidad!' onChange={handleChange} name='especialidad' id='especialidad2' className='signup__input especialidad hidden' />
                <div><small className='signup__error'>{errors.especialidad.message}</small></div>

                <textarea
                  value={input.abilities}
                  onChange={handleAbilities}
                  id='habilidades'
                  name='abilities'
                  cols='30'
                  rows='5'
                  placeholder='Escribe tres habilidades y sepáralas con comas, podrás cambiarlas luego, así que no te preocupes si luego quieres variar.'
                  className='signup__input textarea'
                />
                <div><small className='signup__error'>{errors.abilities.message}</small></div>

                <label htmlFor='cv' className='signup__input__cv'>
                  <h3 className='signup__input__cv__title'>Adjunta tu hoja de vida (PDF)</h3>
                  <input
                    type='file'
                    name='cv'
                    id='cv'
                    className='signup__input__file'
                    accept='application/pdf'
                    onChange={handleCV}
                  />
                  <img className='signup__input__cv__icon' src={clip} alt='adjunta tu CV' />
                </label>

                <button type='button' onClick={handleOpenModal} id='horario' name='horario' className='signup__input__schedule'>
                  <h3 className='signup__input__schedule__title'>Definir horario de atención*</h3>
                  <img className='signup__input__schedule__icon' src={schedule} alt='Define tu horario' />
                </button>

                <Modal onClose={handleCloseModal} isOpen={modalIsOpen}>
                  <ScheduleModal onClose={handleCloseModal} setSchedule={setInput} info={input} />
                </Modal>

                <label htmlFor='policy' className='signup__policy'>
                  <input type='checkbox' name='policy' value={agreement} onChange={handleAgreement} id='policy' />
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

  if (user.rol.name === 'client') {
    return (
      <section className='Signup'>
        <Modal transparent={true} noButton={true} isOpen={isLoading}>
          <Loading />
        </Modal>
        <Modal isOpen={mrwit.error} onClose={clear}>
          <Fatal message={mrwit.error} />
        </Modal>
        <img src={icon} alt='icon' className='signup__icon' />
        <h2 className='signup__text'>¡Un momento! Antes de pasar a la llamada debes registrarte</h2>
        <div className='signup__container'>
          <form onSubmit={handleSubmit} id='signup__client__form' className='signup__form'>
            <div id='signup__form__content' className='signup__form__content'>
              <fieldset className='signup__form__fieldset left client'>
                <div className='signup__title__header'>
                  <h2 className='signup__form__consultant__title'>Datos generales</h2>
                </div>
                <input
                  value={input.name}
                  onChange={handleChange}
                  required
                  type='text'
                  placeholder='Nombre'
                  name='name'
                  id='name'
                  className='signup__input name'
                />

                <div><small className='signup__error'>{errors.name.message}</small></div>

                <input
                  value={input.lastname}
                  onChange={handleChange}
                  required
                  type='text'
                  placeholder='Apellido'
                  name='lastname'
                  id='lastname'
                  className='signup__input name'
                />

                <div><small className='signup__error'>{errors.lastname.message}</small></div>

                <input
                  value={input.dni}
                  onChange={handleChange}
                  required
                  type='number'
                  placeholder='Cédula'
                  name='dni'
                  id='dni'
                  className='signup__input id'
                />

                <div><small className='signup__error'>{errors.dni.message}</small></div>

                <CurrencyFormat
                  value={input.tel}
                  onChange={handleChange}
                  required
                  type='tel'
                  placeholder='Teléfono'
                  format='###-#######'
                  name='tel'
                  id='tel'
                  className='signup__input tel'
                />
                <div><small className='signup__error'>{errors.tel.message}</small></div>

                <ReactFlagsSelect
                  placeholder='Seleccionar país'
                  selected={selected}
                  className='signup__input'
                  onSelect={(e) => { ChangeSelect(e); }}
                  countries={['AR', 'AG', 'BB', 'BM', 'BO', 'BR', 'BS', 'BZ', 'CL', 'CO', 'CR', 'CU', 'CW', 'DM', 'DO', 'EC', 'SV', 'GT', 'JM', 'MX', 'PA', 'PY', 'PE', 'PR', 'UY', 'VE']}
                />
                <input type='hidden' name='country' value={input.country} id='country' />

                <button type='button' onClick={handleSignupClient} className='signup__submit signup__button'>Registrarme por mi cuenta</button>

                <FacebookLogin
                  appId='268710051600270'
                  autoLoad={false}
                  scope='public_profile,user_friends'
                  callback={handleSignupFB}
                  component={MyFacebookButton}
                  icon='fa-facebook'
                />
                <button type='button' onClick={handleSignupClient} className='signup__linkedin signup__button'>
                  <img src={linkedin} alt='icon' />
                  Registrarme con LinkedIn
                </button>

                <GoogleLogin
                  clientId='1070484053881-kie1fjjloi981aesbh7538h6h724g1g9.apps.googleusercontent.com'
                  render={(renderProps) => (
                    <button
                      type='button'
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className='signup__google signup__button'
                    >
                      <img src={google} alt='google icon' />
                      Registrarme con Google
                    </button>
                  )}
                  buttonText='Registrarme con Google'
                  onSuccess={handleSignupGoogle}
                  onFailure={handleSignupGoogle}
                  cookiePolicy='single_host_origin'
                />
                <div className="signup__login">
                  <br />
                  <small>
                    ¿Ya tienes cuenta?
                    <Link to='/login'>{' '} Inicia sesión</Link>
                  </small>
                </div>
              </fieldset>

              <fieldset className='signup__form__fieldset right client'>
                <div className='signup__title__header'>
                  <button
                    type='button'
                    className='signup__back__button'
                    onClick={handleBackClient}
                  >
                    <img
                      src={arrowL}
                      alt='volver'
                    />
                  </button>

                  <h2 className='signup__form__consultant__title'>Datos de ingreso</h2>
                </div>
                <input
                  value={input.email}
                  onChange={handleChange}
                  required
                  type='email'
                  placeholder='Correo electrónico'
                  name='email'
                  id='email'
                  className='signup__input email'
                />

                <div><small className='signup__error'>{errors.email.message}</small></div>

                <input
                  value={input.password}
                  onChange={handleChange}
                  required
                  type='password'
                  placeholder='Contraseña'
                  name='password'
                  id='password'
                  className='signup__input password'
                />

                <div><small className='signup__error'>{errors.password.message}</small></div>

                <input
                  value={input.confirmPassword}
                  onChange={handleChange}
                  type='password'
                  placeholder='Repetir contraseña'
                  name='confirmPassword'
                  id='confirmPassword'
                  className='signup__input password'
                />
                <div><small className='signup__error'>{errors.confirmPassword.message}</small></div>

                <label htmlFor='policy' className='signup__policy'>
                  <input type='checkbox' name='policy' value={agreement} onChange={handleAgreement} id='policy' />
                  <p className='signup__policy__info'>
                    Con esta casilla indica que está de acuerdo con nuestras
                    <Link to='#'> Políticas de privacidad </Link>
                    y
                    <Link to='#'> Términos y condiciones</Link>
                  </p>
                </label>

                <button type='submit' className='signup__submit' name='rol' value='client' id='rol'>Registrarme</button>
              </fieldset>
            </div>
          </form>
        </div>

        <div className='signup__login'>
          <small>
            ¿Quieres es ser consultor?
            <Link to='/signup' onClick={handleBecomeConsultant}>  Registrate aquí</Link>
          </small>
        </div>
        <img src={background} alt='icon' className='signup__background' />
      </section>
    );
  };
};

const mapStateToProps = (reducers) => {
  return {
    status: reducers.statusReducers,
    mrwit: reducers.mrwitReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (e) => dispatch(setUser(e)),
    setNewUser: (e) => dispatch(setNewUser(e)),
    clear: () => dispatch(clearSearch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

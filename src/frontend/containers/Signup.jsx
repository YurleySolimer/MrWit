/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import '../assets/styles/containers/Signup.scss';
import icon from '../assets/static/logo/mrwit-logo.png';
import yellow from '../assets/static/assets/intro-yellow.svg';
import red from '../assets/static/assets/intro-red.svg';
import facebook from '../assets/static/icons/facebook.svg';
import linkedin from '../assets/static/icons/linkedin.svg';
import google from '../assets/static/icons/google.svg';
import arrowR from '../assets/static/icons/arrowright.svg';
import camera from '../assets/static/icons/camera_dark.svg';
import check from '../assets/static/icons/check.svg';
import clip from '../assets/static/icons/clip.svg';
import schedule from '../assets/static/icons/schedule.svg';
import arrowL from '../assets/static/icons/arrowleft.svg';
import ScheduleModal from '../portals/Schedule';
import Modal from '../portals/Modal';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: '',
        id: '',
        tel: '',
        gender: '',
        country: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      errors: {},
      modalIsOpen: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignupClient = this.handleSignupClient.bind(this);
    this.handleSignupConsultant = this.handleSignupConsultant.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { input } = this.state;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      const input = {};
      input['name'] = '';
      input['id'] = '';
      input['tel'] = '';
      input['gender'] = '';
      input['country'] = '';
      input['email'] = '';
      input['password'] = '';
      input['confirmPassword'] = '';
      this.setState({ input });

      alert('Te has registrado');
      window.location = '/recargar';
    }
  }

  validate() {
    // eslint-disable-next-line react/destructuring-assignment
    const input = this.state.input;
    const errors = {};
    let isValid = true;

    if (!input['name']) {
      isValid = false;
      errors['name'] = 'Please enter your name.';
    }

    if (!input['id']) {
      isValid = false;
      errors['id'] = 'Please enter your name.';
    }

    if (!input['tel']) {
      isValid = false;
      errors['tel'] = 'Please enter your name.';
    }

    if (!input['gender']) {
      isValid = false;
      errors['gender'] = 'Please enter your name.';
    }

    if (!input['country']) {
      isValid = false;
      errors['country'] = 'Please enter your name.';
    }

    if (!input['email']) {
      isValid = false;
      errors['email'] = 'Please enter your email Address.';
    }

    if (typeof input['email'] !== 'undefined') {
      const pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input['email'])) {
        isValid = false;
        errors['email'] = 'Please enter valid email address.';
      }
    }

    if (!input['password']) {
      isValid = false;
      errors['password'] = 'Please enter your password.';
    }

    if (!input['confirmPassword']) {
      isValid = false;
      errors['confirmPassword'] = 'Please enter your confirm password.';
    }

    if (typeof input['password'] !== 'undefined' && typeof input['confirmPassword'] !== 'undefined') {
      if (input['password'] !== input['confirmPassword']) {
        isValid = false;
        errors['password'] = "Passwords don't match.";
      }
    }

    this.setState({
      errors,
    });

    return isValid;
  }

  handleSignupConsultant(event) {
    const formContent = document.getElementById('signup__form__content');
    const status = document.getElementById('signup__form__indicator__inner');

    status.classList.add('active');
    formContent.classList.add('active');
    event.preventDefault();
  }

  handleSignupClient(event) {
    const formContent = document.getElementById('signup__form__content');
    const otherButtons = document.getElementsByClassName('signup__button');

    for (let i = 0; i < otherButtons.length; i++) {
      otherButtons[i].classList.add('hidden');
    }

    formContent.classList.add('active');
    event.preventDefault();
  }

  handleBack(event) {
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

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { isOnline, user } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    const { name, email, id, country, tel, password, confirmPassword } = this.state.input;

    if (isOnline) {
      return (<Redirect to='/' />);
    }

    if (user === 'consultant') {
      return (
        <section className='Signup'>
          <h2 className='signupConsultant__text__h2'>¡Bienvenido a la familia!</h2>
          <p className='signupConsultant__text__p'>Nos alegra mucho que quieres unirte a la red de consultores de MrWit. Para continuar por favor culmina el registro.</p>
          <div className='signup__container'>
            <div className='signup__form__indicator'>
              <div id='signup__form__indicator__inner' className='signup__form__indicator__inner'>{' '}</div>
            </div>
            <form onSubmit={this.handleSubmit} id='signup__client__form' className='signup__form'>
              <div id='signup__form__content' className='signup__form__content'>
                <fieldset className='signup__form__fieldset left'>
                  <h2 className='signup__form__consultant__title'>Personal</h2>
                  <label htmlFor='picture' className='input_photo_label'>
                    <img src={camera} alt='Escoge tu imágen de perfil' />
                    <input type='file' name='picture' id='picture' className='signup__input__file' />
                  </label>
                  <input required type='text' placeholder='Nombre' name='name' id='name' className='signup__input name' />
                  <div><small className='signup__error'>{this.state.errors.name}</small></div>
                  <input required type='tel' placeholder='Teléfono' name='tel' id='tel' className='signup__input tel' />
                  <div><small className='signup__error'>{this.state.errors.tel}</small></div>
                  <input required type='date' placeholder='Fecha de nacimiento' name='date' id='date' className='signup__input date' />
                  <div><small className='signup__error'>{this.state.errors.date}</small></div>
                  <input required type='text' placeholder='País' name='country' id='country' className='signup__input country' />
                  <div><small className='signup__error'>{this.state.errors.country}</small></div>
                  <input type='email' placeholder='Correo electrónico' name='email' id='email' className='signup__input email' />
                  <div><small className='signup__error'>{this.state.errors.email}</small></div>
                  <input type='password' placeholder='Contraseña' name='password' id='password' className='signup__input password' />
                  <div><small className='signup__error'>{this.state.errors.password}</small></div>
                  <input type='password' placeholder='Repetir contraseña' name='confirmPassword' id='confirmPassword' className='signup__input password' />
                  <div><small className='signup__error'>{this.state.errors.confirmPassword}</small></div>
                  <button type='button' onClick={this.handleSignupConsultant} className='signup__consultant__submit'><img src={arrowR} alt='siguiente parte del cuestionario' /></button>
                </fieldset>
                <fieldset className='signup__form__fieldset right'>
                  <div className='signup__title__header'>
                    <button type='button' className='signup__back__button' onClick={this.handleBack}><img src={arrowL} alt='volver' /></button>
                    <h2 className='signup__form__consultant__title'>Profesional</h2>
                  </div>
                  <select required name='profesion' id='profesion' className='signup__input profesion'>
                    <option value=''>Profesión</option>
                  </select>
                  <div><small className='signup__error'>{this.state.errors.profesion}</small></div>
                  <select required name='especialidad' id='especialidad' className='signup__input especialidad'>
                    <option value=''>Especialidad</option>
                  </select>
                  <div><small className='signup__error'>{this.state.errors.especialidad}</small></div>
                  <select required name='categoria' id='categoria' className='signup__input categoria'>
                    <option value=''>Categoría</option>
                  </select>
                  <div><small className='signup__error'>{this.state.errors.categoría}</small></div>
                  <select required name='subcategoria' id='subcategoria' className='signup__input subcategoria'>
                    <option value=''>Subcategoría</option>
                  </select>
                  <div><small className='signup__error'>{this.state.errors.subcategoria}</small></div>
                  <textarea name='habilidades' id='habilidades' cols='30' rows='5' placeholder='Escribe tres habilidades y sepáralas con comas, podrás cambiarlas luego, así que no te preocupes si luego quieres variar.' className='signup__input textarea' />
                  <label htmlFor='cv' className='signup__input__cv'>
                    <h3 className='signup__input__cv__title'>Ajunta tu hoja de vida</h3>
                    <input type='file' name='cv' id='cv' className='signup__input__file' />
                    <img className='signup__input__cv__icon' src={clip} alt='adjunta tu CV' />
                  </label>
                  <button type='button' onClick={this.handleOpenModal} className='signup__input__schedule'>
                    <h3 className='signup__input__schedule__title'>Definir horario de atención*</h3>
                    <img className='signup__input__schedule__icon' src={schedule} alt='Define tu horario' />
                  </button>
                  <Modal onClose={this.handleCloseModal} isOpen={this.state.modalIsOpen}>
                    <ScheduleModal />
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
                  <button onClick={this.handleSubmit} type='submit' className='signup__consultant__submit'><img src={check} alt='termina el cuestionario' /></button>
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
        </section>
      );
    }

    if (user === 'client') {
      return (
        <section className='Signup'>
          <img src={icon} alt='icon' className='signup__icon' />
          <h2 className='signup__text'>¡Un momento! Antes de pasar a la llamada debes registrarte</h2>
          <div className='signup__container'>
            <form onSubmit={this.handleSubmit} id='signup__client__form' className='signup__form'>
              <div id='signup__form__content' className='signup__form__content'>
                <fieldset className='signup__form__fieldset left'>
                  <input required type='text' placeholder='Nombre' name='name' id='name' className='signup__input name' value={name} onChange={this.handleChange} />
                  <div><small className='signup__error'>{this.state.errors.name}</small></div>
                  <input required type='number' placeholder='Cédula' name='id' id='id' className='signup__input id' value={id} onChange={this.handleChange} />
                  <div><small className='signup__error'>{this.state.errors.id}</small></div>
                  <input required type='tel' placeholder='Teléfono' name='tel' id='tel' className='signup__input tel' value={tel} onChange={this.handleChange} />
                  <div><small className='signup__error'>{this.state.errors.tel}</small></div>
                  <input required type='text' placeholder='País' name='country' id='country' className='signup__input country' value={country} onChange={this.handleChange} />
                  <div><small className='signup__error'>{this.state.errors.country}</small></div>
                </fieldset>
                <fieldset className='signup__form__fieldset right'>
                  <input type='email' placeholder='Correo electrónico' name='email' id='email' className='signup__input email' value={email} onChange={this.handleChange} />
                  <div><small className='signup__error'>{this.state.errors.email}</small></div>
                  <input type='password' placeholder='Contraseña' name='password' id='password' className='signup__input password' value={password} onChange={this.handleChange} />
                  <div><small className='signup__error'>{this.state.errors.password}</small></div>
                  <input type='password' placeholder='Repetir contraseña' name='confirmPassword' id='confirmPassword' className='signup__input password' value={confirmPassword} onChange={this.handleChange} />
                  <div><small className='signup__error'>{this.state.errors.confirmPassword}</small></div>
                  <button type='submit' className='signup__submit' onClick={this.handleSubmit}>Registrarme</button>
                </fieldset>
              </div>
              <button type='button' onClick={this.handleSignupClient} className='signup__submit signup__button'>Registrarme por mi cuenta</button>
              <button type='button' className='signup__facebook signup__button'>
                <img src={facebook} alt='icon' />
                Registrarme con Facebook
              </button>
              <button type='button' className='signup__linkedin signup__button'>
                <img src={linkedin} alt='icon' />
                Registrarme con LinkedIn
              </button>
              <button type='button' className='signup__google signup__button'>
                <img src={google} alt='icon' />
                Registrarme con Google
              </button>

              <br />

              <div className='signup__login'>
                <small>
                  ¿Ya tienes cuenta?
                  <Link to='/login'>  Inicia sesión</Link>
                </small>
              </div>
            </form>
          </div>
          <img src={yellow} alt='icon' className='signup__yellow' />
          <img src={red} alt='icon' className='signup__red' />
        </section>
      );
    };

  };
};

const mapStateToProps = (state) => {
  return {
    isOnline: state.isOnline,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Signup);

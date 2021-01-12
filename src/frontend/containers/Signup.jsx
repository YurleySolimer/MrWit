/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/Signup.scss';
import icon from '../assets/static/mrwit-logo.png';
import symbol from '../assets/static/symbol.png';
import yellow from '../assets/static/intro-yellow.svg';
import red from '../assets/static/intro-red.svg';
import facebook from '../assets/static/icons/facebook.svg';
import linkedin from '../assets/static/icons/linkedin.svg';
import google from '../assets/static/icons/google.svg';

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
        confirm_password: '',
      },
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // eslint-disable-next-line prefer-destructuring
    const input = this.state.input;
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
      input['confirm_password'] = '';
      this.setState({ input });

      alert('Te has registrado');
    }
  }

  handleSignup(event) {
    const formContent = document.getElementById('signup__form__content');
    const otherButtons = document.getElementsByClassName('signup__button');

    if (this.state.input.name && this.state.input.id && this.state.input.tel && this.state.input.gender && this.state.input.country) {
      for (let i = 0; i < otherButtons.length; i++) {
        otherButtons[i].classList.add('hidden');
      }

      formContent.classList.add('active');
    } else {
      alert('Rellena todos los datos para poder culminar tu registro');
    }

    event.preventDefault();
  }

  validate() {
    // eslint-disable-next-line prefer-destructuring
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

    if (!input['confirm_password']) {
      isValid = false;
      errors['confirm_password'] = 'Please enter your confirm password.';
    }

    if (typeof input['password'] !== 'undefined' && typeof input['confirm_password'] !== 'undefined') {

      if (input['password'] !== input['confirm_password']) {
        isValid = false;
        errors['password'] = "Passwords don't match.";
      }
    }

    this.setState({
      errors,
    });

    return isValid;
  }

  render() {

    return (
      <section className='Signup'>
        <img src={icon} alt='icon' className='signup__icon' />
        <h2 className='signup__text'>¡Un momento! Antes de pasar a la llamada debes registrarte</h2>
        <div className='signup__container'>
          <form onSubmit={this.handleSubmit} id='signup__client__form' className='signup__form'>
            <div id='signup__form__content' className='signup__form__content'>
              <fieldset className='signup__form__fieldset left'>
                <input required type='text' placeholder='Nombre' name='name' id='name' className='signup__input name' value={this.state.input.name} onChange={this.handleChange} />
                <div><small className='signup__error'>{this.state.errors.name}</small></div>
                <input required type='number' placeholder='Cédula' name='id' id='id' className='signup__input id' value={this.state.input.id} onChange={this.handleChange} />
                <div><small className='signup__error'>{this.state.errors.id}</small></div>
                <input required type='tel' placeholder='Teléfono' name='tel' id='tel' className='signup__input tel' value={this.state.input.tel} onChange={this.handleChange} />
                <div><small className='signup__error'>{this.state.errors.tel}</small></div>
                <select required name='gender' id='gender' className='signup__input gender' value={this.state.input.gender} onChange={this.handleChange}>
                  <option value=''>Género</option>
                  <option value='male'>Masculino</option>
                  <option value='female'>Femenino</option>
                  <option value='undefined'>Prefiero no decir</option>
                </select>
                <div><small className='signup__error'>{this.state.errors.gender}</small></div>
                <input required type='text' placeholder='País' name='country' id='country' className='signup__input country' value={this.state.input.country} onChange={this.handleChange} />
                <div><small className='signup__error'>{this.state.errors.country}</small></div>
              </fieldset>
              <fieldset className='signup__form__fieldset right'>
                <input type='email' placeholder='Correo electrónico' name='email' id='email' className='signup__input email' value={this.state.input.email} onChange={this.handleChange} />
                <div><small className='signup__error'>{this.state.errors.email}</small></div>
                <input type='password' placeholder='Contraseña' name='password' id='password' className='signup__input password' value={this.state.input.password} onChange={this.handleChange} />
                <div><small className='signup__error'>{this.state.errors.password}</small></div>
                <input type='password' placeholder='Repetir contraseña' name='confirm_password' id='confirm_password' className='signup__input password' value={this.state.input.confirm_password} onChange={this.handleChange} />
                <div><small className='signup__error'>{this.state.errors.confirm_password}</small></div>
                <button type='submit' onClick={this.handleSubmit} className='signup__submit'>Ir a la llamada</button>
              </fieldset>
            </div>
            <button type='button' onClick={this.handleSignup} className='signup__submit signup__button'>Registrarme por mi cuenta</button>
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
        <img src={symbol} alt='icon' className='signup__symbol' />
        <img src={yellow} alt='icon' className='signup__yellow' />
        <img src={red} alt='icon' className='signup__red' />
      </section>
    );
  };
};

export default Signup;

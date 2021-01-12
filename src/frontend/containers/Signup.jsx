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
      name: '',
      id: '',
      tel: '',
      gender: '',
      country: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // eslint-disable-next-line prefer-destructuring
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // eslint-disable-next-line prefer-destructuring
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log(`form submitted:
      name: ${this.state.name}
      id: ${this.state.id}
      tel: ${this.state.tel}
      gender: ${this.state.gender}
      country: ${this.state.country}
      email: ${this.state.email}
      password: ${this.state.password}
    `);
    event.preventDefault();
  }

  handleSignup(event) {
    const formContent = document.getElementById('signup__form__content');
    const otherButtons = document.getElementsByClassName('signup__button');

    if (this.state.name && this.state.id && this.state.tel && this.state.gender && this.state.country) {
      for (let i = 0; i < otherButtons.length; i++) {
        otherButtons[i].classList.add('hidden');
      }

      formContent.classList.add('active');
    } else {
      alert('Rellena todos los datos para poder culminar tu registro');
    }

    event.preventDefault();
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
                <input required type='text' placeholder='Nombre' name='name' id='name' className='signup__input name' value={this.state.name} onChange={this.handleChange} />
                <input required type='text' placeholder='Cédula' name='id' id='id' className='signup__input id' value={this.state.id} onChange={this.handleChange} />
                <input required type='tel' placeholder='Teléfono' name='tel' id='tel' className='signup__input tel' value={this.state.tel} onChange={this.handleChange} />
                <select required name='gender' id='gender' className='signup__input gender' value={this.state.gender} onChange={this.handleChange}>
                  <option value=''>Género</option>
                  <option value='male'>Masculino</option>
                  <option value='female'>Femenino</option>
                  <option value='undefined'>Prefiero no decir</option>
                </select>
                <input required type='text' placeholder='País' name='country' id='country' className='signup__input country' value={this.state.country} onChange={this.handleChange} />
              </fieldset>
              <fieldset className='signup__form__fieldset right'>
                <input type='email' placeholder='Correo electrónico' name='email' id='email' className='signup__input email' value={this.state.email} onChange={this.handleChange} />
                <input type='password' placeholder='Contraseña' name='password' id='password' className='signup__input password' value={this.state.password} onChange={this.handleChange} />
                <input type='password' placeholder='Repetir contraseña' name='password2' id='password2' className='signup__input password' onChange={this.handleChange} />
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

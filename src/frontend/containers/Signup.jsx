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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(`form submitted: ${this.state.value}`);
    event.preventDefault();
  }

  render() {

    return (
      <section className='Signup'>
        <img src={icon} alt='icon' className='signup__icon' />
        <h2 className='signup__text'>¡Un momento! Antes de pasar a la llamada debes registrarte</h2>
        <div className='signup__container'>
          <form onSubmit={this.handleSubmit}>
            <div className='signup__form__content'>
              <fieldset className='signup__form__fieldset left'>
                <input type='text' placeholder='Nombre' name='name' id='name' className='signup__input name' value={this.state.value} onChange={this.handleChange} />
                <input type='text' placeholder='Cédula' name='id' id='id' className='signup__input id' value={this.state.value} onChange={this.handleChange} />
                <input type='tel' placeholder='Teléfono' name='tel' id='tel' className='signup__input tel' value={this.state.value} onChange={this.handleChange} />
                <select name='gender' id='gender' className='signup__input gender' value={this.state.value} onChange={this.handleChange}>
                  <option value=''>Género</option>
                  <option value='male'>Masculino</option>
                  <option value='female'>Femenino</option>
                  <option value='undefined'>Prefiero no decir</option>
                </select>
                <input type='text' placeholder='País' name='country' id='country' className='signup__input country' />
              </fieldset>
              <fieldset className='signup__form__fieldset right'>
                <input type='email' name='email' id='email' className='signup__input email' value={this.state.value} onChange={this.handleChange} />
                <input type='password' name='password' id='password' className='signup__input password' value={this.state.value} onChange={this.handleChange} />
                <input type='password2' name='password2' id='password2' className='signup__input password' value={this.state.value} onChange={this.handleChange} />
              </fieldset>
            </div>
            <button type='submit'>Registrarme</button>
          </form>
          <button type='button' className='Signup__facebook'>
            <img src={facebook} alt='icon' />
            Registrarme con Facebook
          </button>
          <button type='button' className='Signup__linkedin'>
            <img src={linkedin} alt='icon' />
            Registrarme con LinkedIn
          </button>
          <button type='button' className='Signup__google'>
            <img src={google} alt='icon' />
            Registrarme con Google
          </button>
          <span>
            ¿Ya tienes cuenta?
            <Link to='/login'>  Inicia sesión</Link>
          </span>
        </div>
        <img src={symbol} alt='icon' className='signup__symbol' />
        <img src={yellow} alt='icon' className='signup__yellow' />
        <img src={red} alt='icon' className='signup__red' />
      </section>
    );
  };
};

export default Signup;

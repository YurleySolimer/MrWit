import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import link from '../assets/static/icons/link.svg';

class HelpCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className='HelpCategory'>
        <h3 className='HelpCategory__title'>Título de la categoría</h3>
        <Link to='/ayuda/pregunta' className='HelpCategory__link'>
          <p className='HelpCategory__p'>
            <img src={link} alt='icono de enlace' />
            <span>Titulo de la pregunta</span>
          </p>
        </Link>
        <Link to='/ayuda/pregunta' className='HelpCategory__link'>
          <p className='HelpCategory__p'>
            <img src={link} alt='icono de enlace' />
            <span>Titulo de la pregunta</span>
          </p>
        </Link>
        <Link to='/ayuda/pregunta' className='HelpCategory__link'>
          <p className='HelpCategory__p'>
            <img src={link} alt='icono de enlace' />
            <span>Titulo de la pregunta</span>
          </p>
        </Link>
        <Link to='/ayuda/pregunta' className='HelpCategory__link'>
          <p className='HelpCategory__p'>
            <img src={link} alt='icono de enlace' />
            <span>Titulo de la pregunta</span>
          </p>
        </Link>
        <Link to='/ayuda/pregunta' className='HelpCategory__link'>
          <p className='HelpCategory__p'>
            <img src={link} alt='icono de enlace' />
            <span>Titulo de la pregunta</span>
          </p>
        </Link>
        <Link to='/ayuda/pregunta' className='HelpCategory__link'>
          <p className='HelpCategory__p'>
            <img src={link} alt='icono de enlace' />
            <span>Titulo de la pregunta</span>
          </p>
        </Link>
        <hr className='Category__break' />
      </div>
    );
  }
}

export default HelpCategory;

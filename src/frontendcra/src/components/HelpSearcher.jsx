import React, { Component } from 'react';
import icon from '../assets/static/icons/lupaDark.svg';

class HelpSearcher extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className='HelpSearcher'>
        <img src={icon} className='HelpSearcher__icon' alt='Buscador' />
        <input className='HelpSearcher__input' aria-label='Buscador de preguntas frecuentes' type='text'/>
      </div>
    );
  }
}

export default HelpSearcher;

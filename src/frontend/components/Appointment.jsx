import React, { Component } from 'react';
import profile from '../assets/static/images/profile_1.jpg';

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { name, date, hour } = this.props;

    return (
      <div className='appointment'>
        <div className='appointment__img'>
          <img src={profile} alt='Imagen del consultor' className='appointment__img__profile' />
        </div>
        <div className='appointment__name'>
          <span>{name}</span>
        </div>
        <div className='appointment__info'>
          <span aria-label='información fecha'>{date}</span>
          <span aria-label='información hora'>{hour}</span>
        </div>
      </div>
    );
  }
}

export default Appointment;

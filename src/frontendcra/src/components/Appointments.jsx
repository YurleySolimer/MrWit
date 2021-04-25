import React from 'react';
import '../assets/styles/components/Appointments.scss';
import Appointment from './Appointment';

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className='Appointments'>
        <Appointment name='Luis Fernando Méndez' date='04 - 01 - 2021' hour='10:00am' />
        <Appointment name='Luis Fernando Méndez' date='04 - 01 - 2021' hour='10:00am' />
        <Appointment name='Luis Fernando Méndez' date='04 - 01 - 2021' hour='10:00am' />
        <Appointment name='Luis Fernando Méndez' date='04 - 01 - 2021' hour='10:00am' />
        <Appointment name='Luis Fernando Méndez' date='04 - 01 - 2021' hour='10:00am' />
      </div>
    );
  }
}

export default Appointments;

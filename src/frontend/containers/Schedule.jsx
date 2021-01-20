import React, { useState } from 'react';
import '../assets/styles/containers/Schedule.scss';
import Calendar from 'react-calendar';
import Appointments from '../components/Appointments';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Next from '../components/Next';
import Prev from '../components/Prev';

const Schedule = () => {

  const [value, onChange] = useState(new Date(), []);

  return (
    <div className='Schedule'>
      <Header user='client' />
      <div className='schedule__body'>
        <h1 className='schedule__title'>Agenda</h1>
        <Calendar
          onChange={onChange}
          value={value}
          className=''
          next2Label={null}
          prev2Label={null}
          nextLabel={<Next />}
          prevLabel={<Prev />}
        />
        <h2 className='schedule__appointments'>Citas</h2>
        <Appointments />
      </div>
      <Menu user='client' />
    </div>
  );
};

export default Schedule;

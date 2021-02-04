import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../assets/styles/containers/Schedule.scss';
import Calendar from 'react-calendar';
import Appointments from '../components/Appointments';
import Next from '../components/Next';
import Prev from '../components/Prev';

const Schedule = ({ user, isOnline }) => {

  const [value, onChange] = useState(new Date(), []);

  function hasContent(value) {
    // Se verifica la fecha con el formato estabecido "día de la semana (Day) / mes (Mon) / día en número (dd) / año (yyyy)" por ejemplo "Fri Jan 22 2021"
    if (new Date(value.date).toDateString() === 'Fri Jan 22 2021' || new Date(value.date).toDateString() === 'Sat Jan 02 2021') {
      // eslint-disable-next-line react/self-closing-comp
      return (<div aria-label='Día con eventos' className='schedule__date__withData'></div>);
    }
  }

  if (!isOnline) {
    return (<Redirect to='/' />);
  }

  if (user === 'consultant') {
    return (
      <div className='Schedule'>
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
            tileContent={hasContent}
          />
          <div className="Schedule__appointments--header">
            <h2 className='schedule__appointments'>Citas</h2>
            <button type='button' className='schedule__block'>Bloquear día</button>
          </div>
          <Appointments />
        </div>
      </div>
    );
  }

  if (user === 'client') {
    return (
      <div className='Schedule'>
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
            tileContent={hasContent}
          />
          <h2 className='schedule__appointments'>Citas</h2>
          <Appointments />
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    isOnline: state.isOnline,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Schedule);

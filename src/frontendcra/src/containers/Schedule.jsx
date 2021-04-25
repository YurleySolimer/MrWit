import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Calendar from 'react-calendar';
import statusReducers from '../reducers/statusReducers';
import * as actionsStatus from '../actions';
import '../assets/styles/containers/Schedule.scss';
import Appointments from '../components/Appointments';
import Next from '../components/Next';
import Prev from '../components/Prev';
import Modal from '../portals/Modal';
import BlockDay from '../portals/BlockDay';

const Schedule = (props) => {

  const { user } = props;
  const [value, onChange] = useState(new Date(), []);
  const [blockDay, setBlockDay] = useState(false);

  function hasContent(value) {
    // Se verifica la fecha con el formato estabecido "día de la semana (Day) / mes (Mon) / día en número (dd) / año (yyyy)" por ejemplo "Fri Jan 22 2021"
    if (new Date(value.date).toDateString() === 'Fri Jan 22 2021' || new Date(value.date).toDateString() === 'Sat Jan 02 2021') {
      // eslint-disable-next-line react/self-closing-comp
      return (<div aria-label='Día con eventos' className='schedule__date__withData'></div>);
    }
    return null;

  }

  function handleBlockDay() {
    setBlockDay(true);
  }

  function handleBlockDayClose() {
    setBlockDay(false);
  }

  if (!user.status.logueado) {
    return (<Redirect to='/' />);
  }

  const handleHeader = () => {
    const d = document.getElementById('schedule');
    if (d.scrollTop >= 50) {
      props.setHeader(true);
    } else {
      props.setHeader(false);
    }
  };

  if (user.rol.name === 'consultant') {
    return (
      <div className='Schedule' id='schedule'>
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
          <div className='Schedule__appointments--header'>
            <h2 className='schedule__appointments'>Citas</h2>
            <button onClick={handleBlockDay} type='button' className='schedule__block'>Bloquear día</button>
            <Modal isOpen={blockDay} onClose={handleBlockDayClose} noButton={true}>
              <BlockDay onClose={handleBlockDayClose} />
            </Modal>
          </div>
          <Appointments />
        </div>
      </div>
    );
  }

  if (user.rol.name === 'client') {
    return (
      <div className='Schedule' id='schedule'>
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

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(Schedule);

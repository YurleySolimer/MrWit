import React from 'react';
import '../assets/styles/components/NextDates.scss';
import noresults from '../assets/static/icons/noresults.svg';
import DateCard from './DateCard';

const NextDates = ({ user }) => {

  if (user.agenda) {
    return (
      <div className='NextDates'>
        <h3 className='NextDates__titulos'>Próximas citas</h3>
        { user.agenda.map((date) => {
          return <DateCard key={date.client.type} user={date} />;
        })}
      </div>
    );
  }

  return (
    <div className='NextDates noresults'>
      <h3 className='NextDates__titulos'>Próximas citas</h3>
      <img src={noresults} alt='No hay citas :(' />
      <p>Parece que no tienes citas agendadas.</p>
    </div>
  );
};

export default NextDates;

import React from 'react';
import { connect } from 'react-redux';
import statusReducers from '../reducers/statusReducers';
import profile from '../assets/static/images/profile_1.jpg';

const Appointment = (props) => {

  const { name, date, hour, user } = props;

  if (user === 'client') {
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
  };

  if (user === 'consultant') {
    return (
      <div className='appointment'>
        <div className='appointment__name'>
          <span>{name}</span>
        </div>
        <div className='appointment__info'>
          <span aria-label='información fecha'>{date}</span>
          <span aria-label='información hora'>{hour}</span>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(Appointment);

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import statusReducers from '../reducers/statusReducers';
import * as actionsStatus from '../actions';
import '../assets/styles/containers/History.scss';
import HistoryList from '../components/HistoryList';


const History = (props) => {

  const { user } = props;

  if (!user.status.logueado) {
    return (<Redirect to='/' />);
  }

  const handleHeader = () => {
    const d = document.getElementById('history');
    if (d.scrollTop >= 50) {
      props.setHeader(true);
    } else {
      props.setHeader(false);
    }
  };

  if (user.rol.name === 'client') {
    return (
      <div className='History' onScroll={handleHeader} id='history'>
        <div className='history__body'>
          <h1 className='history__body__title'>Historial</h1>
          <HistoryList />
        </div>
      </div>
    );
  };

  if (user.rol.name === 'consultant') {
    return (
      <div className='History' onScroll={handleHeader} id='history'>
        <div className='history__body'>
          <h1 className='history__body__title'>Historial</h1>
          <HistoryList />
        </div>
      </div>
    );
  }

};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, actionsStatus)(History);

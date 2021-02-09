import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import statusReducers from '../reducers/statusReducers';
import '../assets/styles/containers/History.scss';
import HistoryList from '../components/HistoryList';


const History = ({ isOnline, user }) => {

  if (!isOnline) {
    return (<Redirect to='/' />);
  }

  if (user === 'client') {
    return (
      <div className='History'>
        <div className='history__body'>
          <h1 className='history__body__title'>Historial</h1>
          <HistoryList />
        </div>
      </div>
    );
  };

  if (user === 'consultant') {
    return (
      <div className='History'>
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

export default connect(mapStateToProps, null)(History);

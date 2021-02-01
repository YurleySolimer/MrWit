import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../assets/styles/containers/History.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import HistoryList from '../components/HistoryList';

const History = ({ isOnline, user }) => {

  if (!isOnline) {
    return (<Redirect to='/' />);
  }

  if (user === 'client') {
    return (
      <div className='History'>
        <Header user='client' />
        <div className='history__body'>
          <h1 className='history__body__title'>Historial</h1>
          <HistoryList />
        </div>
        <Menu user='client' />
      </div>
    );
  };

  if (user === 'consultant') {
    return (
      <div className=''>Hola soy Consultor</div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isOnline: state.isOnline,
  };
};

export default connect(mapStateToProps, null)(History);

import React from 'react';
import '../assets/styles/containers/History.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import HistoryList from '../components/HistoryList';

const History = () => {
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

export default History;

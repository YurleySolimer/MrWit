import React from 'react';
import '../assets/styles/components/HistoryList.scss';
import HistoryElement from './HistoryElement';

class HistoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div className='history__body__elements'>
        <HistoryElement name='Nombre del consultor' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del consultor' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del consultor' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del consultor' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del consultor' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del consultor' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del consultor' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del consultor' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del consultor' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del consultor' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del consultor' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del consultor' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      </div>
    );
  }
};

export default HistoryList;

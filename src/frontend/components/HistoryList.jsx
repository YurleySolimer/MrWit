import React from 'react';
import '../assets/styles/components/HistoryList.scss';
import HistoryElement from './HistoryElement';

class HistoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {

    const { amount } = this.props;

    if (amount) {
      const ratings = [];
      for (let i = 0; i < amount; i++) {
        ratings.push(<HistoryElement key={i} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />);
      }

      return (<div className='history__body__elements'>{ratings}</div>);
    }

    return (
      <div className='history__body__elements'>
        <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
        <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      </div>
    );
  }
};

export default HistoryList;

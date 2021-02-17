import React from 'react';
import '../assets/styles/components/HistoryList.scss';
import HistoryElement from './HistoryElement';

const HistoryList = (props) => {

  console.log('los props de historyList son: ', props);
  const { amount, setSearchRate } = props;

  if (amount) {
    const ratings = [];
    for (let i = 0; i < amount; i++) {
      ratings.push(<HistoryElement key={i} search={setSearchRate} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />);
    }

    return (<div className='history__body__elements'>{ratings}</div>);
  }

  return (
    <div className='history__body__elements'>
      <HistoryElement name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      <HistoryElement search={setSearchRate} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      <HistoryElement search={setSearchRate} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      <HistoryElement search={setSearchRate} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      <HistoryElement search={setSearchRate} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      <HistoryElement search={setSearchRate} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      <HistoryElement search={setSearchRate} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      <HistoryElement search={setSearchRate} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      <HistoryElement search={setSearchRate} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      <HistoryElement search={setSearchRate} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      <HistoryElement search={setSearchRate} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
      <HistoryElement search={setSearchRate} name='Nombre del usuario' duration='0:03:12' score={5} price='19.000' date='04 - 11 - 2021' />
    </div>
  );
};

export default HistoryList;

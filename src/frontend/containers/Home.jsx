import React from 'react';
import SelectionIntro from '../components/SelectionIntro';
import Intro from '../components/Intro';
import CardButton from '../components/CardButton';
import '../assets/styles/containers/Home.scss';

const Home = () => {

  return (
    <div className='home'>
      <Intro />
      <SelectionIntro>
        <CardButton name='Clientes' obj='CardClientSelection' msg='¡Consultar ahora!' dir='/buscar' />
        <CardButton name='Consultores' obj='CardConsultorSelection' msg='¡Registrate!' dir='/signup' />
      </SelectionIntro>
    </div>
  );
};

export default Home;

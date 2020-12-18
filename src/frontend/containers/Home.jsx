import React from 'react';
import { connect } from 'react-redux';
import SelectionIntro from '../components/SelectionIntro';
import Intro from '../components/Intro';
import CardButton from '../components/CardButton';
import '../assets/styles/containers/Home.scss';

const Home = () => {

  return (
    <div className='home'>
      <Intro />
      <SelectionIntro>
        <CardButton name='Clientes' obj='CardClientSelection' msg='¡Consultar ahora!' dir='/consulta' />
        <CardButton name='Consultores' obj='CardConsultorSelection' msg='¡Registro consultores!' dir='/registro/consultores' />
      </SelectionIntro>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);

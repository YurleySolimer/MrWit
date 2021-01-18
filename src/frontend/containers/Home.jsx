import React from 'react';
import { Link } from 'react-router-dom';
import SelectionIntro from '../components/SelectionIntro';
import Intro from '../components/Intro';
import CardButton from '../components/CardButton';
import '../assets/styles/containers/Home.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import OtherResults from '../components/OtherResults';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
    };
  }

  render() {
    const { isOnline } = this.state;
    const name = 'Luis Fernando Méndez'
    if (isOnline) {
      return (
        <div className='dashboard'>
          <Header user='client' />
          <div className='dashboard__body'>
            <h2 className='dashboard__message'>
              Bienvenido,
              {name}
              .
              <br />
              ¡Que bueno saber de tí!
            </h2>
            <div className='dashboard__CTA'>
              <Link to='buscar'>
                <button type='button' className='dashboard__CTA__button'>
                  Consultar ahora
                </button>
              </Link>
            </div>
          </div>
          <OtherResults category='Mis Favoritos' results={true} />
          <OtherResults category='Últimas consultas' results={true} />
          <Menu user='client' />
        </div>
      );
    }

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
};

export default Home;

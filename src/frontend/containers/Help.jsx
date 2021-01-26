import React from 'react';
import '../assets/styles/containers/Help.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import HelpSearcher from '../components/HelpSearcher';
import HelpCategory from '../components/HelpCategory';

const Help = () => {
  return (
    <div className='Help'>
      <Header user='client' />
      <div className="Help__welcome">
        <h1 className="Help__welcome__title">Aquí están las respuestas a todas tus preguntas</h1>
        <span className="Help__welcome__message">¡Utiliza el buscador para filtrar nuestas entradas, si no encuentras nada nuestro equipo se encargará de resolverlo!</span>
        <HelpSearcher />
      </div>
      <div className="Help__categories">
        <HelpCategory />
        <HelpCategory />
        <HelpCategory />
        <HelpCategory />
      </div>
      <Menu user='client' />
    </div>
  );
};

export default Help;

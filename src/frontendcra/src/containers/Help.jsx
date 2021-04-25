import React from 'react';
import '../assets/styles/containers/Help.scss';
import HelpSearcher from '../components/HelpSearcher';
import HelpCategory from '../components/HelpCategory';

const Help = () => {
  return (
    <div className='Help'>
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
    </div>
  );
};

export default Help;

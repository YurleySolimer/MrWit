import React from 'react';
import '../assets/styles/portals/SearchType.scss';
import { useHistory } from 'react-router-dom';

const SearchType = (props) => {

  const { setResults, onClose, setValueResult, value, isHome } = props;
  const history = useHistory();

  function handleSector(e) {
    const val = value.replace(' - Sector', '');
    setResults('sector');
    console.log(val);
    setValueResult(val);
    onClose(e);
  }

  function handleProfession(e) {
    const val = value.replace(' - Profesión', '');
    setResults('profession');
    console.log(val);
    setValueResult(val);
    onClose(e);
  }


  function handleAbility(e) {
    history.push(`/resultados/?habilidad=${val}`);
  }

  function handleProfessionHome(e) {
    history.push(`/resultados/?profesion=${val}`);
  }

  function handleSectorHome(e) {
    history.push(`/resultados/?sector=${val}`);
  }

  function handleID(e) {
    history.push(`/resultados/${val}`);
  }

  if (isHome) {
    return (
      <div className='SearchType'>
        <h2>¿Qué quieres buscar?</h2>
        <button type='button' className='profession' onClick={handleProfessionHome}>Profesión</button>
        <button type='button' className='sector' onClick={handleSectorHome}>Categoría</button>
        <button type='button' className='ability' onClick={handleAbility}>Habilidad</button>
        <button type='button' className='id' onClick={handleID}>ID</button>
      </div>
    );
  }

  return (
    <div className='SearchType'>
      <h2>¿Qué quieres buscar?</h2>
      <button type='button' className='profession' onClick={handleProfession}>Profesión</button>
      <button type='button' className='sector' onClick={handleSector}>Sector</button>
      <button type='button' className='ability' onClick={handleAbility}>Habilidad</button>
      <button type='button' className='id' onClick={handleID}>ID</button>
    </div>
  );
};

export default SearchType;

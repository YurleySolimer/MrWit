import React from 'react';
import '../assets/styles/portals/SearchType.scss';
import { useHistory } from 'react-router-dom';

const SearchType = (props) => {

  const { setResults, onClose } = props;
  const history = useHistory();

  console.log(props);

  function handleProfession(e) {
    setResults('profession');
    onClose(e);
  }

  function handleCategory(e) {
    setResults('category');
    onClose(e);
  }

  function handleAbility(e) {
    history.push('/resultados');
  }

  function handleID(e) {
    history.push('/resultados/1');
  }

  return (
    <div className='SearchType'>
      <h2>¿Qué quieres buscar?</h2>
      <button type='button' className='profession' onClick={handleProfession}>Profesión</button>
      <button type='button' className='category' onClick={handleCategory}>Categoría</button>
      <button type='button' className='ability' onClick={handleAbility}>Habilidad</button>
      <button type='button' className='id' onClick={handleID}>ID</button>
    </div>
  );
};

export default SearchType;

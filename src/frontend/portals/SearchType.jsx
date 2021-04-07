import React from 'react';
import '../assets/styles/portals/SearchType.scss';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SearchType = (props) => {

  const { setType, onClose, setValueResult, value, isHome } = props;
  const history = useHistory();

  function handleSector(e) {
    const val = value.replace(' - Sector', '');
    setType('sector');
    setValueResult(val);
    onClose(e);
  }

  function handleProfession(e) {
    const val = value.replace(' - Profesión', '');
    setType('profession');
    setValueResult(val);
    onClose(e);
  }

  function handleAbility(e) {
    const data = new FormData();
    data.append('ability', value);
    const res = axios.post(`${axios.defaults.baseURL}/busqueda`, data)
      .then((res) => {
        history.push(`/resultados/?habilidad=${value}`);
      })
      .catch((e) => console.log(e));
  }

  function handleProfessionHome(e) {
   // history.push(`/resultados/?profesion=${val}`);
  }

  function handleSectorHome(e) {
  //  history.push(`/resultados/?sector=${val}`);
  }

  function handleID(e) {
    const data = new FormData();
    data.append('id', value);
    const res = axios.post(`${axios.defaults.baseURL}/busqueda`, data)
      .then((res) => {
        history.push(`/resultados/?id=${value}`);
      })
      .catch((e) => console.log(e));
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

import React from 'react';
import '../assets/styles/portals/Inactive.scss';

const Inactive = ({ onClose, status, setStatus }) => {

    function handleInactiveClose(e) {
        setStatus(false);
        onClose(e);
    }

    function handleActiveClose(e) {
        setStatus(true);
        onClose(e);
    }

    if (status === true) {
        return (
            <div className="Inactive">
                <h3>Cambiar disponibilidad</h3>
                <p>¿Estás seguro de que quieres aparecer como inactivo? Los clientes no podrán contactarte en el periodo en el que estés inactivo, sin embargo puede cambiarlo cuando quieras.</p>
                <div className="Inactive__buttons">
                    <button onClick={handleInactiveClose}>1 Hora</button>
                    <button onClick={handleInactiveClose}>6 Horas</button>
                    <button onClick={handleInactiveClose}>24 Horas</button>
                </div>
            </div>
        )
    }

    if (status === false) {
        return (
            <div className="Inactive">
                <h3>Cambiar disponibilidad</h3>
                <p>¿Estás seguro de que quieres aparecer como activo? Los clientes podrán contactarte en cualquier momento mientras estés activo en tu horario de atención.</p>
                <div className="Inactive__buttons">
                    <button onClick={handleActiveClose}>Aparecer como activo</button>
                </div>
            </div>
        )
    }
}

export default Inactive;

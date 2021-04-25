import React from 'react';
import '../assets/styles/portals/WalletHelpModal.scss';

const WalletHelpModal = () => {
    return (
        <div className="WalletHelpModal">
            <h3 className="WalletHelpModal__title">Ayuda</h3>
            <p className="WalletHelpModal__text">Para poder retirar dinero de tu billetera y clickear al botón de retiro, primero debes registrar tus datos bancarios en el enlace de <b>“Registrar cuenta bancaria”</b>. En caso de que al momento de tu retiro veas un error en la cuenta registrada, puedes clickear en el botón del lapiz para editar una nueva cuenta.</p>
        </div>
    )
}

export default WalletHelpModal;

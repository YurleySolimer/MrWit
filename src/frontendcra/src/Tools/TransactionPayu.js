import React from 'react';

const Transaction = (props) => {
    const { params } = props.match;
    const { amount, id_client, id_transaction, name } = params;

    return (
        <div className="Transaction">
            <p>Holi</p>
            <p>El amount es {amount}</p>
            <input type="text" value={amount}/>
            <p>El id_client es {id_client}</p>
            <input type="text" value={id_client}/>
            <p>El id_transaction es {id_transaction}</p>
            <input type="text" value={id_transaction}/>
            <p>El name es {name}</p>
            <input type="text" value={name}/>
            <button>
                Enviar
            </button>
        </div>
    )
}

export default Transaction;
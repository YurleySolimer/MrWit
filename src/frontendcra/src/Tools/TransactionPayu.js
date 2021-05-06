<<<<<<< HEAD
import React from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';



const Transaction = (props) => {
    const { params } = props.match;
    const { amount, id_client, id_transaction, name } = params;
    const history = useHistory();
    const localtion = useLocation();

 
    function sendData(event) {
      event.preventDefault();
      let search = window.location.search;
      let params2 = new URLSearchParams(search);
      const status = params2.get('lapTransactionState');
      const referenceCode = params2.get('referenceCode');
      const paymentMethod = params2.get('lapPaymentMethodType');
      const total = params2.get('TX_VALUE');
      const currency = params2.get('currency');
      const buyerEmail = params2.get('buyerEmail');
      const date = params2.get('processingDate');
      const transactionId = params2.get('transactionId');
      const clientId = params2.get('extra1');



        var pd = {
            status,
            referenceCode,
            transactionId,
            paymentMethod,
            total,
            currency,
            buyerEmail,
            date,
            clientId
          };
                
          axios.post("/pay/payumoney/verification",{
            pd
          }).then((res)=> {
            console.log(res);
            history.push('/wallet')
          }).catch((error)=>{
            console.log(error);
          });
    }


    return (
      
        <div className="Transaction">
            <form onSubmit={sendData} >
                <p>El amount es {amount}</p>
                Su pago hasido procesado. Haga click en aceptar para volver a ver Wallet
                <button type="submit">
                    Aceptar
                </button>
            </form>
        </div>
    )
}

=======
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

>>>>>>> 4fb270da882d2eb2ca6b4257f0630ce95b96e71c
export default Transaction;
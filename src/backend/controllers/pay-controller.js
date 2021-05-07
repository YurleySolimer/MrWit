const payCtrl = {};
const request = require('request');
var jsSHA = require("jssha");
var md5 = require('md5');

const Client = require('../models/Client');


payCtrl.payUMoneyPayment = async (req, res) => {
   var id = req.body.id;
   var name = req.body.name;
    var total = 0;

    if(!req.body) {
        total = 10000;
    }

    else{ 

          id = req.body.id;
          name = req.body.name;

        if (req.body.amount == 0) {
            total = 10000;
        }
        else {
            total = req.body.amount;
        }
    }

    const pay = {
        merchantId: '508029',
        ApiKey: '4Vj8eK4rloUd272L48hsrarnUA',
        accountId: '512321',
        description: 'Consultoría MrWit App',
        amount: total,
        tax: '0',
        taxReturnBase: '0',
        currency: 'COP',
        test: '1',
        extra1: id
    }

    var refHash = id + '|' + total + '|' + Math.random() + '|' + Math.random() + '|' + Math.random()
    var ref2Hash = md5(refHash);
    pay.referenceCode = ref2Hash+Math.random();

    const responseUrl = req.headers.origin === 'https://app.mrwit.co' 
    ? `https://app.mrwit.co/transaction`
    : `http://localhost:8080/transaction`;

    pay.responseUrl = responseUrl;


     //Generate new Hash 
     var hashString = pay.ApiKey + '~' + pay.merchantId + '~' + pay.referenceCode + '~' + pay.amount + '~' + pay.currency 
     var hash = md5(hashString);
     pay.signature = hash;


    request.post({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu', //Testing url
        form: pay
        }, 
        function (error, httpRes, body) {
            if (error) 
            res.send({status: false, message:error.toString()});
            
            if (httpRes.statusCode === 200) {
                res.send(body);
            } 
            else if (httpRes.statusCode >= 300 && httpRes.statusCode <= 400) {
                res.redirect(httpRes.headers.location.toString());
            }
        }
    )
   
}


payCtrl.payVerification = async (req, res) => {

    const pd = req.body.pd;
    const client = await Client.findOne({_id: pd.clientId });

    console.log(client)

    var array = client.wallet.transacciones;
    const transacciones = {
        status: pd.status,
        referenceCode: pd.referenceCode,
        transactionId: pd.transactionId,
        paymentMethod: pd.paymentMethod,
        total: pd.total,
        currency: pd.currency,
        buyerEmail: pd.buyerEmail,
        date: pd.date
    }

    array.push(transacciones);

    var saldo = ((client.wallet.saldo)*1) + ((pd.total)*1);


    const newClient = {
        wallet: {
            saldo,
            transacciones: array
        }
    };

   await Client.findOneAndUpdate({_id: pd.clientId }, newClient);    
    res.send('Data saved')
}






module.exports = payCtrl;
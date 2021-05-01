const payCtrl = {};
const request = require('request');
var jsSHA = require("jssha");
var md5 = require('md5');

payCtrl.payUMoneyPayment = async (req, res) => {
    console.log(req.body)
   var id = 'name';
   var name = 'id';
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
        test: '1'
    }

    var refHash = id + '|' + total + '|' + Math.random() + '|' + Math.random() + '|' + Math.random()
    var ref2Hash = md5(refHash);
    pay.referenceCode = ref2Hash+Math.random();

     const responseUrl = req.headers.origin === 'app.mrwit.co' 
    ? `https://app.mrwit.co/transaction/${id}/${name}/${pay.amount}/${pay.referenceCode}`
    : `http://localhost:8080/transaction/${id}/${name}/${pay.amount}/${pay.referenceCode}`;
    pay.responseUrl = responseUrl;

     //Generate new Hash 
     var hashString = pay.ApiKey + '~' + pay.merchantId + '~' + pay.referenceCode + '~' + pay.amount + '~' + pay.currency 
     var hash = md5(hashString);
     pay.signature = hash;

     console.log(pay)

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






module.exports = payCtrl;
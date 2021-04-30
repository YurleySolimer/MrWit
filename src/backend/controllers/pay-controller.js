const payCtrl = {};
const request = require('request');
var jsSHA = require("jssha");
var md5 = require('md5');

payCtrl.payUMoneyPayment = async (req, res) => {
    const pay = {
        merchantId: '508029',
        ApiKey: '4Vj8eK4rloUd272L48hsrarnUA',
       // referenceCode: '87g104',
        accountId: '512321',
        description: 'Consultoría MrWit App',
        amount: 10000,
        tax: '0',
        taxReturnBase: '0',
        currency: 'COP',
       // signature: '3fa940a9ab2abefdab2e1f01885773ef',
        test: '1',
        responseUrl: 'http://localhost:8080/recargar',
    }

    var ref1 = 'client' + '|' + Math.random() + '|' + Math.random() + '|' + Math.random()
    var ref2 = md5(ref1);
    pay.referenceCode = ref2;

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






module.exports = payCtrl;
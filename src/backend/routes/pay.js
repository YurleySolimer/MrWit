const { Router } = require('express');
const router = Router();
const { payUMoneyPayment, payUMoneyPaymentResponse } = require('../controllers/pay-controller');

const request = require('request');
var jsSHA = require("jssha");

router.post('/payment_gateway/payumoney', (req, res) => {

    //Here save all the details in pay object 
    const pay = req.body;
    const hashString = '923751' //store in in different file
    + '|' + pay.txnid
    + '|' + pay.amount 
    + '|' + pay.productinfo 
    + '|' + 'name prueba' 
    + '|' + pay.buyerEmail 
    + '|' + '||||||||||'
    + 'PK60h7E6oE24SB889L1n2Zd4pR' //store in in different file
   
    const sha = new jsSHA('SHA-512', "TEXT");
    
    sha.update(hashString);
    //Getting hashed value from sha module
    const hash = sha.getHash("HEX");
 
    //We have to additionally pass merchant key to API so remember to include it.
    pay.key = '923751' //store in in different file;
    pay.surl = 'http://localhost:3000/payment/success';
    pay.furl = 'http://localhost:3000/payment/fail';
    pay.hash = hash;
    
    
    //Making an HTTP/HTTPS call with request
    request.post({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: ' https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/', //Testing url
        form: pay
    }, function (error, httpRes, body) {
        if (error) 
            res.send(
                {status: false, 
                message:error.toString()
                }
            );
            if (httpRes.statusCode === 200) {
                res.send(body);
            } 
            else if (httpRes.statusCode >= 300 && httpRes.statusCode <= 400) {
                res.redirect(httpRes.headers.location.toString());
            }
        })
});

 

router.post('/payment/success', (req, res) => {
    //Payumoney will send Success Transaction data to req body. Based on the response Implement UI as per you want
     res.send(req.body);
})


router.post('/payment/fail', (req, res) => {
    //Payumoney will send Fail Transaction data to req body. Based on the response Implement UI as per you want
     res.send(req.body);
 })

module.exports = router;

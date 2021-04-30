const { Router } = require('express');
const router = Router();
const { payUMoneyPayment, payUMoneyPaymentResponse } = require('../controllers/pay-controller');
const request = require('request');
var jsSHA = require("jssha");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/payment/payumoney', payUMoneyPayment);


router.post("/pay/payumoney",  urlencodedParser, payUMoneyPayment);




router.post('/payment/success', (req, res) => {
    //Payumoney will send Success Transaction data to req body. Based on the response Implement UI as per you want
     res.send(req.body);
})


router.post('/payment/fail', (req, res) => {
    //Payumoney will send Fail Transaction data to req body. Based on the response Implement UI as per you want
     res.send(req.body);
 })

module.exports = router;

const { Router } = require('express');
const router = Router();
const { payUMoneyPayment, payVerification} = require('../controllers/pay-controller');
const request = require('request');
var jsSHA = require("jssha");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.post("/pay/payumoney",  urlencodedParser, payUMoneyPayment);

router.post('/pay/payumoney/verification', payVerification);


module.exports = router;

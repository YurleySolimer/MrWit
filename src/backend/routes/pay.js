const { Router } = require('express');
const router = Router();
const { payUMoneyPayment } = require('../controllers/pay-controller');


router.post('/payment/payumoney', payUMoneyPayment);

module.exports = router;

const { Router } = require('express');
const router = Router();
const passport = require('passport');

const { postAuthGoogle } = require('../controllers/auth-google-controller');


router.post('/auth/google', postAuthGoogle);


module.exports = router;


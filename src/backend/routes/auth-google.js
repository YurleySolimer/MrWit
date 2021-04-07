const { Router } = require('express');
const router = Router();
const passport = require('passport');
const axios = require('axios');

const { postAuthGoogle } = require('../controllers/auth-google-controller');


router.post('/auth/google', postAuthGoogle);


module.exports = router;


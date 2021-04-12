const { Router } = require('express');
const router = Router();
const passport = require('passport');
const axios = require('axios');

const { postAuthFB, postLoginFB } = require('../controllers/auth-facebook-controller');


router.post('/auth/facebook/callback', postAuthFB);
router.post('/auth/facebook/login/callback', postLoginFB);


module.exports = router;
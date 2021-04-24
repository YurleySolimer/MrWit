const { Router } = require('express');
const router = Router();
const passport = require('passport');
const axios = require('axios');

const { postAuthGoogle, postLoginGoogle } = require('../controllers/auth-google-controller');


router.post('/auth/google', postAuthGoogle);
router.post('/auth/google/login', postLoginGoogle);



module.exports = router;


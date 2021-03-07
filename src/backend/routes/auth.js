const { Router } = require('express');
const router = Router();

const { postNewUser, postSignIn } = require('../controllers/auth-controllers');
const verifySignup = require ('../middlewares/verifySignup');

router.post('/signup', verifySignup.checkUserExisted, postNewUser);
router.post('/signin', postSignIn);

module.exports = router;

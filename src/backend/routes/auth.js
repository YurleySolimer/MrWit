const { Router } = require('express');
const router = Router();

const { postNewUser, postSignIn, postLogout, postSocket, getSession } = require('../controllers/auth-controllers');
const verifySignup = require ('../middlewares/verifySignup');

router.post('/signup', verifySignup.checkUserExisted, postNewUser, postSignIn);
router.post('/signin', postSignIn);
router.post('/logout', postLogout);
router.route('/user/:id/socket')
    .post(postSocket);

router.post('/userSession', getSession )


module.exports = router;

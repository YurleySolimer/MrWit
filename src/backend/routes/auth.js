const { Router } = require('express');
const router = Router();

const { postNewUser, postSignIn, postLogout, postSocket } = require('../controllers/auth-controllers');
const verifySignup = require ('../middlewares/verifySignup');

router.post('/signup', verifySignup.checkUserExisted, postNewUser, postSignIn);
router.post('/signin', postSignIn);
router.post('/logout', postLogout);
router.route('/user/:id/socket')
    .post(postSocket);

router.get('/userSession', (req, res) => {
    const token = req.headers['x-access-token'];

      if (!token) {
         res.send({ message: 'No se estableció ningún Token' });
      }

      else { 
        const decoded = jwt.verify(token, config.SECRET);
        req.userId = decoded.id;
        const userSession = {
            token,
            id: req.userId,
            sessionId: req.sessionID
        }
        res.send(userSession)
    }
});


module.exports = router;

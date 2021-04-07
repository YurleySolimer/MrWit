const { Router } = require('express');
const router = Router();
const passport = require('passport');
const axios = require('axios');

const { postAuthGoogle } = require('../controllers/auth-google-controller');

<<<<<<< HEAD
=======
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '1070484053881-kie1fjjloi981aesbh7538h6h724g1g9.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'ytqTjsY7uS5N4pdmkaG0Cahk';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${axios.defaults.baseURL}/auth/google/callback`
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);  
  }
));
 
passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});
>>>>>>> ccafe60de48d4181a356faac7b637dbd7005e5c8

router.post('/auth/google', postAuthGoogle);


module.exports = router;


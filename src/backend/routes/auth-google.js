const { Router } = require('express');
const router = Router();
const passport = require('passport');
const axios = require('axios');

var userProfile;

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


router.get('/success', (req, res) => {
  const name = userProfile.name.givenName;
  const lastname = userProfile.name.familyName;
  const email = userProfile.emails[0].value;
  const picture = userProfile.photos[0].value
  const user = {
    name,
    lastname,
    email,
  }
  res.status(200).send(user);
});
router.get('/error', (req, res) => res.send("error logging in"));

router.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success');
  });


module.exports = router;

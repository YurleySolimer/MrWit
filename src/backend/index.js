const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const createRoles = require('./libs/initialSetups');
const session = require('express-session');
const multer = require('multer');
const passport = require('passport');


require('dotenv').config();
require('./database');
require('./routes/auth-google');

const app = express();


var allowedOrigins = ['http://localhost:8080',
                     'https://app.mrwit.co', '*'];
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

createRoles();


//Settings
app.set('port', process.env.PORT || 3000);


//Middelwares

app.use(express.urlencoded({limit: '500mb', extended: false}));
app.use(express.json({limit: '500mb', extended: true}));
app.use(morgan('dev'));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET' 
  }));

//Static Files
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/images')));


//Passport setting
app.use(passport.initialize());
app.use(passport.session());



//Multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'images/uploads'),
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
});
  
app.use(multer({
    storage,
    dest: path.join(__dirname, 'images/uploads')
  }).array('picture')
);



//Routes
app.use(require('./routes/consultor'));
app.use(require('./routes/admin'));
app.use(require('./routes/mrwit'));
app.use(require('./routes/index'));
app.use(require('./routes/blog'));
app.use(require('./routes/auth'));
app.use(require('./routes/auth-google'));
app.use(require('./routes/auth-fb'));
app.use(require('./routes/pay'));



//Listening Port
app.listen(app.get('port'));
console.log(`server on port ${app.get('port')}`);


module.exports = app;
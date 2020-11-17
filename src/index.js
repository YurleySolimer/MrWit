const express = require ('express');
const morgan = require('morgan');
const monrgan = require ('morgan');
const path = require('path');

const {mongoose} = require('./database');

const app = express();


//Settings
app.set('port', process.env.PORT || 3000);

//Middelwares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/consultores'));
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () => {
    console.log( `server on port ${app.get('port')}` );
});
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/database_consultores';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err)) ;


module.exports = mongoose;
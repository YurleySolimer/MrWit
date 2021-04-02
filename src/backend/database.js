const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/mrwitdb';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(db => console.log('DB is connected'))
.catch(error => console.error(error))
;


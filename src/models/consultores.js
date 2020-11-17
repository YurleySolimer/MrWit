const mongoose = require('mongoose');
const {Schema} = mongoose;

const ConsultoresSchema = new Schema({
    nombre: {type: String},
    apellido: {type: String}
});

module.exports = mongoose.model('Consultores', ConsultoresSchema);
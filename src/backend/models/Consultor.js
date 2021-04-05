const { Schema, model } = require('mongoose');

const consultorSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  pictureName: String,
  picturePath: String,
  phone: String,
  date: Date,
  description: String,
  country: String,
  profession: String,
  especialidad: String,
  category: String,
  subcategory: String,
  abilities: [
    String, String, String,
  ],
  CV: {
    name: String,
    path: String
  },
  horario: Date,
  policy: Boolean,
  videoReel: String,
  status: {
    online: {
      type: Boolean,
      default: false,
    },
    inCall: {
      type: Boolean,
      default: false,
    },
  },
  clasification: Number,
  wallet: {
    saldo: Number,
    bankAccount: {
      nombre: String,
      apellido: String,
      telefono: String,
      cedula: String,
      banco: String,
      tipo: String,
      cuenta: String,
      acuerdo: Boolean
    },
    Transacciones: [{
      date: Date,
      total: Number,
    }],
  },
  hoursGive: Number,
  user: {
    ref: 'Users',
    type: Schema.Types.ObjectId,
  },
  history: [{
    duration: String,
    date: Date,
    client: {
      ref: 'Cient',
      type: Schema.Types.ObjectId,
    },
    total: Number,
    feedback: String,
    calification: Number,
  }],
  agenda: [{
    date: Date,
    client: {
      ref: 'Cient',
      type: Schema.Types.ObjectId,
    },
  }],
},
{
  versionKey: false,
});

module.exports = model('Consultant', consultorSchema);

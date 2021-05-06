const {Schema, model} = require('mongoose');

const clientSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    socket: {
        socketID: String
      },
    phone: {
        type: String,
        default: 'N/A'
    },
    dni: {
        type: String,
        default: 'N/A'
    },
    country: {
        type: String,
        default: 'N/A'
    },
    status: {
        online: {
          type: Boolean,
          default: true,
        },
        inCall: {
          type: Boolean,
          default: false,
        },
        logueado: {
            type: Boolean,
            default: false,
        },
    },
    wallet: {
        saldo: Number,
        transacciones: [{
            date: String,
            total: Number,
            currency: String,
            paymentMethod: String,
            status: String,
            transactionId: String,
            referenceCode: String,
            buyerEmail: String

        }]
    },
    history: [{
        duration: String,
        date: Date,
        consultant: { 
            ref: "Consultor",
            type: Schema.Types.ObjectId
        },
        total: Number,
        feedback: String,
        clasification: Number,
    }],
    agenda: [{
        date: Date,
        consultant: { 
            ref: "Consultor",
            type: Schema.Types.ObjectId
        },
    }],
    fav: [{
        ref: "Consultant",
        type: Schema.Types.ObjectId
    }],
    user: {
        ref: "Users",
        type: Schema.Types.ObjectId
    }
}, {
    versionKey: false
});

module.exports = model('Client', clientSchema);
const {Schema, model} = require('mongoose');

const clientSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    phone: String,
    dni: String,
    country: String,
    wallet: {
        saldo: Number,
        Transacciones: [{
            date: Date,
            total: Number
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
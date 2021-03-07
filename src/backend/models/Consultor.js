const {Schema, model} = require('mongoose');
const { number } = require('prop-types');

const consultorSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    pictureName: String,
    picturePath: String,
    phone: String,
    date: Date,
    country: String,
    profession: String,
    especialidad: String,
    category: String,
    subcategory: String,
    abilities : [
        String, String, String
    ],
    CV: String,
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
        Transacciones: [{
            date: Date,
            total: Number
        }]
    },
    hoursGive: Number,
    user: {
        ref: "Users",
        type: Schema.Types.ObjectId
    },
    history: [{
        duration: String,
        date: Date,
        client: { 
            ref: "Cient",
            type: Schema.Types.ObjectId
        },
        total: Number,
        feedback: String,
        calification: Number,
    }],
    agenda: [{
        date: Date,
        client: { 
            ref: "Cient",
            type: Schema.Types.ObjectId
        },
    }],
    },
    {
        versionKey: false
    });

module.exports = model('Consultant', consultorSchema);
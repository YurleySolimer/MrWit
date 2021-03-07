const {Schema, model} = require('mongoose');

const adminSchema = new Schema({
    user: {
        ref: "Users",
        type: Schema.Types.ObjectId
    }
}, {
    versionKey: false
});

module.exports = model('Admin', adminSchema);
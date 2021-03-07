const {Schema, model} = require('mongoose');

const ROLES = ["admin", "client", "consultant"];
module.exports = ROLES;

const rolesSchema = new Schema({
    name: String,
}, {
    versionKey: false
});

module.exports = model('Roles', rolesSchema);
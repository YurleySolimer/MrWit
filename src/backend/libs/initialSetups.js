const Roles = require('../models/Roles');

const createRoles = async () => {
    const count = await Roles.estimatedDocumentCount();
    if (count > 0) return;
    else {    
    const values = await Promise.all([
                new Roles({name: "client"}).save(),
                new Roles({name: "consultant"}).save(),
                new Roles({name: "admin"}).save()
        ]);
    }
}

module.exports = createRoles;
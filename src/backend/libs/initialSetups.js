const Roles = require('../models/Roles');

const createRoles = async () => {
    const count = await Roles.estimatedDocumentCount();

    if (count > 0) return;
    
   const values = await Promise.all([
            new Roles({name: "client"}).save(),
            new Roles({name: "consultant"}).save(),
            new Roles({name: "admin"}).save()
    ]);
    console.log(values);
}

module.exports = createRoles;
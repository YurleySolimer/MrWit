const ROLES = require("../models/Roles");
const User = require("../models/Users");

module.exports = { 
   async checkUserExisted (req, res, next) {
        const user = await User.findOne({email: req.body.email});
        if (user) { 
            console.log("The user already exists")
            return res.status(400).json({'message': "The user already exists"})
        } ;
        next();
    },

    checkRolesExisted (req, res, next) {
        if (req.body.roles) {
            for (let i = 0; i < req.body.length; i++) {
                if(!ROLES.includes(req.body.roles[i])) {
                    return res.status(400).json({
                        message: `Role ${req.body.roles[i]} does not exists`
                    })
                }

            }
        }
        next();
    }
}
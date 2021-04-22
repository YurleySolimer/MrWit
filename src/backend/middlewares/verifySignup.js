const ROLES = require('../models/Roles');
const User = require('../models/Users');

module.exports = {
  async checkUserExisted(req, res, next) {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.json({ message: 'Ya existe un usuario con este correo.' });
    };
    next();
  },

  checkRolesExisted(req, res, next) {
    if (req.body.roles) {
      for (let i = 0; i < req.body.length; i++) {
        if (!ROLES.includes(req.body.roles[i])) {
          return res.json({
            message: `Role ${req.body.roles[i]} does not exists`,
          });
        }

      }
    }
    next();
  },
};

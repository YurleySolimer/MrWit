const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/Users');
const Roles = require('../models/Roles');

module.exports = {
  async verifyToken(req, res, next) {
    try {
      const token = req.headers['x-access-token'];

      if (!token) {
        return res.json({ message: 'No se estableció ningún Token' });
      }

      const decoded = jwt.verify(token, config.SECRET);
      req.userId = decoded.id;

      const user = await User.findById(req.userId, { password: 0 });

      if (!user) {
        return res.json({ message: 'No encontramos ningún usuario con estos datos' });
      }

      next();

    } catch (error) {
      return res.json({ message: 'Inautorizado' });
    }
  },

  async isAdmin(req, res, next) {
    const user = await User.findById(req.userId);
    const roles = await Roles.findById({ _id: { $in: user.rol } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'admin') {
        next();
        return;
      }
      return;
    }
    return res.json({ message: 'Requieres rol de administrador' });
  },

  async isClient(req, res, next) {
    const user = await User.findById(req.userId);
    const roles = await Roles.findById({ _id: { $in: user.rol } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'client') {
        next();
        return;
      }
      return;
    }
    return res.json({ message: 'Requieres rol de cliente' });
  },

  async isConsultant(req, res, next) {
    const user = await User.findById(req.userId);
    const roles = await Roles.findById({ _id: { $in: user.rol } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'consultant') {
        next();
        return;
      }
      return;
    }
    return res.json({ message: 'Requires rol de consultor' });

  },
};

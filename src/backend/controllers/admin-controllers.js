const adminCtrl = {};
const Consultor = require('../models/Consultor');
const Cliente = require('../models/Client');
const User = require('../models/Users');
const Roles = require('../models/Roles');
const { populate } = require('../models/Users');



adminCtrl.getClient = async (req, res) => {
    const client = await Cliente.findById(req.params.id);
    if (client) {
      const userFound = await User.findOne({ email: consultor.email });
      const userClient = {
        name: userFound.name || '',
        lastname: userFound.lastname || '',
        email: userFound.email || '',
        rol: userFound.rol || '',
        id: userFound._id || '',
        status: client.status,
        phone: client.phone,
        dni: client.dni,
        country: client.country
        
      };
      res.status(200).json(userClient);
    } else if (!client) {
      res.json({ message: 'Not Found' });
    }
}

adminCtrl.getClients = async (req, res) => {
    const userFound = await Cliente.find();
    if (!userFound) return res.json({ message: "No se encontró usuarios" });
   res.send(userFound);  
    
}

adminCtrl.getConsultant = async (req, res) => {
    const consultor = await Consultor.findById(req.params.id);
    if (consultor) {
      const userFound = await User.findOne({ email: consultor.email });
      const userConsultor = {
        name: userFound.name || '',
        lastname: userFound.lastname || '',
        email: userFound.email || '',
        rol: userFound.rol || '',
        id: userFound._id || '',
        pictureName: consultor.pictureName || '',
        picturePath: consultor.picturePath || '',
        profession: consultor.profession || '',
        especialidad: consultor.especialidad || '',
        category: consultor.category || '',
        abilities: consultor.abilities || '',
        status: consultor.status,
      };
      res.status(200).json(userConsultor);
    } else if (!consultor) {
      res.json({ message: 'Not Found' });
    }
}

adminCtrl.getConsultants = async (req, res) => {
    const userFound = await Consultor.find();
    if (!userFound) return res.json({ message: "No se encontró usuarios" });
   res.send(userFound)
}



module.exports = adminCtrl;
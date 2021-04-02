const consultantCtrl = {};

const Consultor = require('../models/Consultor');
const User = require('../models/Users');


consultantCtrl.getConsultor = async (req, res) => {
    const consultor = await Consultor.findById(req.params.id);
    if (consultor) { 
    const userFound = await User.findOne({email: consultor.email});
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
    }
    res.status(200).json(userConsultor);
    }
    else if (!consultor) {
        res.status(404).json({message: 'Not Found'});
    }

};

consultantCtrl.updateConsultor = async (req, res) => {
    console.log(req.body) 
    await Consultor.findOneAndUpdate({_id: req.params.id}, req.body);
     res.status(200).json({message: "Profile Update"});
}
consultantCtrl.getWallet = async (req, res) => { 
    const consultor = await Consultor.findById(req.params.id);
    const userFound = await User.findOne({email: consultor.email});
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
        wallet: consultor.wallet,
    }

    res.status(200).json(userConsultor); 
}
consultantCtrl.getHistory = async (req, res) => {
    const consultor = await Consultor.findById(req.params.id);
    const userFound = await User.findOne({email: consultor.email});
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
        history: consultor.history,
    }

    res.status(200).json(userConsultor); 
};
consultantCtrl.getAgenda = async (req, res) => {
    const consultor = await Consultor.findById(req.params.id);
    const userFound = await User.findOne({email: consultor.email});
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
        agenda: consultor.agenda,
    }

    res.status(200).json(userConsultor); 
};

module.exports = consultantCtrl;
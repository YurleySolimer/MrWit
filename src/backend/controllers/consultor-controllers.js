const consultantCtrl = {};

const Consultor = require('../models/Consultor');

consultantCtrl.getConsultor = async (req, res) => {
    console.log(req.params.id);
    const consultor = await Consultor.findById(req.params.id);
    res.status(200).json(consultor); 
};

consultantCtrl.updateConsultor = async (req, res) => {
    console.log(req.body) 
    await Consultor.findOneAndUpdate({_id: req.params.id}, req.body);
     res.status(200).json({message: "Profile Update"});
}
consultantCtrl.getWallet = async (req, res) => { 
    console.log(req.params.id);
    const consultor = await Consultor.findById(req.params.id);
    res.status(200).json(consultor); 
}
consultantCtrl.getHistory = async (req, res) => {
    console.log(req.params.id);
    const consultor = await Consultor.findById(req.params.id);
    res.status(200).json(consultor); 
};
consultantCtrl.getAgenda = async (req, res) => {
    console.log(req.params.id);
    const consultor = await Consultor.findById(req.params.id);
    res.status(200).json(consultor); 
};

module.exports = consultantCtrl;
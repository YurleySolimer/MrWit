const adminCtrl = {};


adminCtrl.getClient = (req, res) => res.send('This is a client');
adminCtrl.getClients = (req, res) => res.send('Clients');

adminCtrl.getConsultant = (req, res) => res.send('This is a consultant');
adminCtrl.getConsultants = (req, res) => res.send('Consultants');



module.exports = adminCtrl;
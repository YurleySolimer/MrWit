const mrwitCtrl = {};
const Consultor = require('../models/Consultor');
const Cliente = require('../models/Client');
const User = require('../models/Users');


mrwitCtrl.getConsultores = async (req, res) => {

  if (req.query) {
    const { category, proffession, especialidad, ability, id, country } = req.query;

    if (!req.query.category) {
      if (!req.query.proffession) {
        if(!req.query.ability) {
          if(!req.query.id) {
            const consultores = await Consultor.find(
              { 'status.online': true }
            );
            res.status(200).json(consultores);
          }
          else if(req.query.id) {
            const consultores = await Consultor.find(
              {
                $and: [
                  { _id: { $in: id } },
                  { 'status.online': true }
                ],
              },
            );
            const resultados = {
              busqueda: 'id',
              id,
              consultores
            }
            res.status(200).json(resultados);
          }          
        }
        else if(req.query.ability) {
          const consultores = await Consultor.find(
            {
              $and: [
                { abilities: { $in: ability } },
                { 'status.online': true }
              ],
            },
          );
          const resultados = {
            busqueda: 'ability',
            ability,
            consultores
          }
          res.status(200).json(resultados);
        }
        
      } else if (req.query.proffession) {
        if (!req.query.especialidad) {
          const consultores = await Consultor.find(
            {
              $and: [
                { profession: { $in: proffession } },
                { 'status.online': true }
              ],
            },
          );
          const resultados = {
            busqueda: 'profesion',
            proffession,
            consultores
          }
          res.status(200).json(resultados);
        } else if (req.query.especialidad) {
          const consultores = await Consultor.find(
            {
              $and: [
                { profession: { $in: proffession } },
                { especialidad: { $in: especialidad } },
                { 'status.online': true }

              ],
            },
          );
          const resultados = {
            busqueda: 'Profesion y especialidad',
            proffession,
            especialidad,
            consultores
          }
          res.status(200).json(resultados);
        }
      }
    } else if (req.query.category) {
      if (!req.query.proffession) {
        const consultores = await Consultor.find(
          {
            $and: [
              { category: { $in: category } },
              { 'status.online': true }

            ],
          },

        );
        res.status(200).json(consultores);
      } else if (req.query.proffession) {
        const consultores = await Consultor.find(
          {
            $and: [
              { category: { $in: category } },
              { profession: { $in: proffession } },
              { 'status.online': true }

            ],
          },
        );
        const resultados = {
          busqueda: 'Sector y Profesion',
          sector: category,
          proffession,
          consultores
        }
        res.status(200).json(resultados);

      }
    }   
  }
};

mrwitCtrl.getConsultor = async (req, res) => {
  console.log(req.params.id);
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

mrwitCtrl.postAgenda = async (req, res) => {
  const { date, consultant } = req.body;
  const { client } = req.params.id;

  const NewDateConsultant = new Consultor({
    agenda: {
      date,
      client,
    },
  });
  await Consultor.findOneAndUpdate({ _id: consultant }, NewDateConsultant);

  const NewDateClient = new Client({
    agenda: {
      date,
      consultant,
    },
  });
  await Consultor.findOneAndUpdate({ _id: client }, NewDateClient);

  res.status(200).json({ message: 'Date Saved' });
};

mrwitCtrl.postConsultaFinalizada = async (req, res) => {
  //NewFeedback
  const { calification, feedback, consultantId, duration, date, total } = req.body;
  const { clientId } = req.params.id;

  const NewFeedback = new Consultor({
    history: {
      calification,
      feedback,
      client: clientId,
      duration,
      date,
      total, 
    },
  });
  await Consultor.findOneAndUpdate({ _id: consultantId }, NewFeedback);
  res.status(200).json({ message: 'Feedback Saved' });
};

mrwitCtrl.postRecarga = (req, res) => res.send('This is a recarga'); //Crear a parte la logica de la pasarela

mrwitCtrl.getWallet = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  const userFound = await User.findOne({email: cliente.email});
  const userCliente = {
      name: userFound.name || '',
      lastname: userFound.lastname || '',
      email: userFound.email || '',
      rol: userFound.rol || '',
      id: userFound._id || '',
      phone: cliente.phone || '',
      dni: cliente.dni || '',
      country: cliente.country || '',
      status: cliente.status,
      wallet: cliente.wallet,
  }
  res.status(200).json(userCliente);
};

mrwitCtrl.getHistory = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  const userFound = await User.findOne({email: cliente.email});
  const userCliente = {
      name: userFound.name || '',
      lastname: userFound.lastname || '',
      email: userFound.email || '',
      rol: userFound.rol || '',
      id: userFound._id || '',
      phone: cliente.phone || '',
      dni: cliente.dni || '',
      country: cliente.country || '',
      status: cliente.status,
      history: cliente.history,
  }
  res.status(200).json(userCliente);
};
mrwitCtrl.getAgenda = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  const userFound = await User.findOne({email: cliente.email});
  const userCliente = {
      name: userFound.name || '',
      lastname: userFound.lastname || '',
      email: userFound.email || '',
      rol: userFound.rol || '',
      id: userFound._id || '',
      phone: cliente.phone || '',
      dni: cliente.dni || '',
      country: cliente.country || '',
      status: cliente.status,
      agenda: cliente.agenda,
  }
  res.status(200).json(userCliente);
};

module.exports = mrwitCtrl;

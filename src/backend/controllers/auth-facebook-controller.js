const fbCtrl = {};
const User = require('../models/Users');
const Consultor = require('../models/Consultor');
const Client = require('../models/Client');
const jwt = require('jsonwebtoken');
const config = require('../config');
const Roles = require('../models/Roles');
const { cli } = require('webpack');
const { populate } = require('../models/Users');


fbCtrl.postAuthFB = async (req, res) => {
    
    const { name, email, picture } = req.body; 
    const userFound = await User.findOne({email: email}).populate("rol");
    if (userFound) {            
        const tokenUser = jwt.sign({id: userFound._id}, config.SECRET, {
            expiresIn: 315360000
        }) 
            
        if(userFound.rol.name === 'client') {
             const NewStatatus = {
                 status : {
                     logueado: true
                 }
             };        
             await Client.findOneAndUpdate({ email: req.body.email }, NewStatatus);  
     
             const cliente =  await Client.findOne({email: req.body.email});
             const userCliente = {
                 name: userFound.name || '',
                 lastname: userFound.lastname || '',
                 email: userFound.email || '',
                 rol: userFound.rol || '',
                 id: cliente._id || '',
                 phone: cliente.phone || '',
                 dni: cliente.dni || '',
                 country: cliente.country || '',
                 status: cliente.status,
                 tokenUser
             }
     
         res.status(200).json(userCliente);
         }
         else if(userFound.rol.name === 'consultant') {
             const NewStatatus = {
                 status : {
                     logueado: true
                 }
             };        
             await Consultor.findOneAndUpdate({ email: req.body.email }, NewStatatus);        
     
             const consultor =  await Consultor.findOne({email: req.body.email});
             const userConsultor = {
                 name: userFound.name || '',
                 lastname: userFound.lastname || '',
                 email: userFound.email || '',
                 rol: userFound.rol || '',
                 id: consultor._id || '',
                 pictureName: consultor.pictureName || '',
                 picturePath: consultor.picturePath || '',
                 profession: consultor.profession || '',
                 especialidad: consultor.especialidad || '',
                 category: consultor.category || '',
                 abilities: consultor.abilities || '',
                 status: consultor.status,
                 horario: consultor.horario,
                 socket: consultor.socket,
                 token
             }
     
         res.status(200).json(userConsultor);
         }
    }

    else if (!userFound) { 
          
        const newUser = new User ({
            name,
            email,
        });

        const rol = "client";
        if (rol) {
            const foundRol = await Roles.find({name: {$in: rol}});
            newUser.rol = foundRol.map(rol => rol.id);
        } else {
            const role = await Roles.find({name: "client"});
            newUser.rol = role._id;
        } 

        
        const userSaved = await newUser.save();
        const tokenUser = jwt.sign({id: userSaved._id },'config.SECRET', {
            expiresIn: 315360000
        })

        const status = {
            logueado: true            
        };    

        const newClient = new Client ({
            name,
            email,
            user: userSaved._id,
            status
        });

        const clientSaved = await newClient.save();
        const userCliente = {
            name,
            email,
            phone: 'N/A',
            country: 'N/A',
            dni: 'N/A',
            rol,
            id: clientSaved._id,        
            status,
            tokenUser
        }
        console.log("new user created");
        res.status(200).json(userCliente);
    }
    
}

fbCtrl.postLoginFB = async (req, res) => {
    
    const {  email  } = req.body; 
    const userFound = await User.findOne({email: email});
    if (userFound) {            
        const tokenUser = jwt.sign({id: userFound._id}, config.SECRET, {
            expiresIn: 315360000
        }) 
            
        if(userFound.rol.name === 'client') {
             const NewStatatus = {
                 status : {
                     logueado: true
                 }
             };        
             await Client.findOneAndUpdate({ email: req.body.email }, NewStatatus);  
     
             const cliente =  await Client.findOne({email: req.body.email});
             const userCliente = {
                 name: userFound.name || '',
                 lastname: userFound.lastname || '',
                 email: userFound.email || '',
                 rol: userFound.rol || '',
                 id: cliente._id || '',
                 phone: cliente.phone || '',
                 dni: cliente.dni || '',
                 country: cliente.country || '',
                 status: cliente.status,
                 tokenUser
             }
     
         res.status(200).json(userCliente);
         }
         else if(userFound.rol.name === 'consultant') {
             const NewStatatus = {
                 status : {
                     logueado: true
                 }
             };        
             await Consultor.findOneAndUpdate({ email: req.body.email }, NewStatatus);        
     
             const consultor =  await Consultor.findOne({email: req.body.email}).populate("rol");
             const userConsultor = {
                 name: userFound.name || '',
                 lastname: userFound.lastname || '',
                 email: userFound.email || '',
                 rol: userFound.rol || '',
                 id: consultor._id || '',
                 pictureName: consultor.pictureName || '',
                 picturePath: consultor.picturePath || '',
                 profession: consultor.profession || '',
                 especialidad: consultor.especialidad || '',
                 category: consultor.category || '',
                 abilities: consultor.abilities || '',
                 status: consultor.status,
                 horario: consultor.horario,
                 socket: consultor.socket,
                 token
             }
     
         res.status(200).json(userConsultor);
         }
    }

    else if (!userFound) {          
        
        const newUser = new User ({
            name,
            email,
        });

        const rol = "client";
        if (rol) {
            const foundRol = await Roles.find({name: {$in: rol}});
            newUser.rol = foundRol.map(rol => rol.id);
        } else {
            const role = await Roles.find({name: "client"});
            newUser.rol = role._id;
        } 

        
        const userSaved = await newUser.save();
        const tokenUser = jwt.sign({id: userSaved._id },'config.SECRET', {
            expiresIn: 315360000
        })

        const status = {
            logueado: true            
        };    

        const newClient = new Client ({
            name,
            email,
            user: userSaved._id,
            status
        });

        const clientSaved = await newClient.save();
        const userCliente = {
            name,
            email,
            phone: 'N/A',
            country: 'N/A',
            dni: 'N/A',
            rol,
            id: clientSaved._id,        
            status,
            tokenUser
        }
        console.log("new user created");
        res.status(200).json(userCliente);
    }
    
}

module.exports = fbCtrl;
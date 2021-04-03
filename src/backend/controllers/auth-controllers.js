const authCtrl = {};
const User = require('../models/Users');
const Consultor = require('../models/Consultor');
const Client = require('../models/Client');
const jwt = require('jsonwebtoken');
const config = require('../config');
const Roles = require('../models/Roles');
const { cli } = require('webpack');
const { populate } = require('../models/Users');


authCtrl.postNewUser = async (req, res, next) => {
    console.log(req.body)

    //NewUser
    const { name, lastname, email, password, rol } = req.body;

    const newUser = new User ({
        name,
        lastname,
        email,
        password: await User.encryptPassword(password)
    });

    if (rol) {
        const foundRol = await Roles.find({name: {$in: rol}});
        newUser.rol = foundRol.map(rol => rol.id);
    } else {
        const role = await Roles.find({name: "client"});
        newUser.rol = role._id;
    }
    const userSaved = await newUser.save();

    if(rol === "client") 
    //New Cliente
    {
        const { name, lastname, email, phone, dni, country } = req.body;
        const status = {
            online: true
        }
        const newClient = new Client ({
            name,
            lastname,
            email,
            phone,
            dni,
            country,
            user: userSaved._id,
            status
        });
    
        const clientSaved = await newClient.save();
    }
    
    else{ 

    //New Consultor

    const { phone, date, country, profession, especialidad, category, subcategory, abilities,
            horario, policy } = req.body;
    const user = userSaved._id;
    var newConsultor = {};
    var onPolicy = false;
    if (policy === 'on') {
        onPolicy = true;
    }

    const status = {
        online: true
    }  

    if (req.files) {
        const {path, originalname} = req.files[0];
        newConsultor = new Consultor ({
            name,
            lastname,
            email,
            pictureName: originalname,
            picturePath: path,
            phone,
            date,
            country,
            profession,
            especialidad,
            category,
            subcategory,
            abilities,
            horario,
            policy: onPolicy,
            user: userSaved._id,
            status
            
        });
    }
    else {
        console.log('El horario del consultor en el else es: ', horario);
        newConsultor = new Consultor ({
            name,
            lastname,
            email,
            phone,
            date,
            country,
            profession,
            especialidad,
            category,
            subcategory,
            abilities,
            horario,
            policy: onPolicy,
            status
        });
    }
    
    const consultorSaved = await newConsultor.save();
    }

    //Token - expira en 10 años
    const token = jwt.sign({id: userSaved._id },'config.SECRET', {
        expiresIn: 315360000
    })
    console.log("new user created");
    next();
    //res.status(200).json({token});
};

authCtrl.postSignIn = async (req, res) => {
   const userFound = await User.findOne({email: req.body.email}).populate("rol");
    if (!userFound) return res.json({message: "User not found"});

   const matchPassword = await User.comparePassword(req.body.password, userFound.password);
   if(!matchPassword) return res.status(401).json({token: null, message: "Invalid password"});
   const token = jwt.sign({id: userFound._id}, config.SECRET, {
       expiresIn: 315360000
   })

    if(userFound.rol.name === 'client') {
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
            token
        }

    res.status(200).json(userCliente);
    }
    else if(userFound.rol.name === 'consultant') {
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
            token
        }

    res.status(200).json(userConsultor);
    }
};

module.exports = authCtrl;



/*

google id: 1070484053881-kie1fjjloi981aesbh7538h6h724g1g9.apps.googleusercontent.com
google secret: ytqTjsY7uS5N4pdmkaG0Cahk

*/
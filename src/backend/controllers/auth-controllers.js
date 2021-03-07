const authCtrl = {};
const User = require('../models/Users');
const Consultor = require('../models/Consultor');
const Client = require('../models/Client');
const jwt = require('jsonwebtoken');
const config = require('../config');
const Roles = require('../models/Roles');


authCtrl.postNewUser = async (req, res) => {

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
        const { name, lastname, email, phone, dni, country} = req.body;
        const newClient = new Client ({
            name,
            lastname,
            email,
            phone,
            dni,
            country
        });
    
        const clientSaved = await newClient.save();
    }
    
    else{ 

    //New Consultor

    const { phone, date, country, profession, especialidad, category, subcategory, abilities,
            horario, policy, status } = req.body;
    const user = userSaved._id;
    var newConsultor = {};

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
            policy,
            status

        });
    }
    else {
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
            policy,
            status
        });
    }
    
    const consultorSaved = await newConsultor.save();
    }


    //Token - expira en 24 horas
    const token = jwt.sign({id: userSaved._id },'config.SECRET', {
        expiresIn: 86400
    })
    res.json({token});
};

authCtrl.postSignIn = async (req, res) => {

    const userFound = await (await User.findOne({email: req.body.email})).populate("rol");
    if (!userFound) return res.json({message: "User not found"});

   const matchPassword = await User.comparePassword(req.body.password, userFound.password);
   if(!matchPassword) return res.status(401).json({token: null, message: "Invalid password"});

   const token = jwt.sign({id: userFound._id}, config.SECRET, {
       expiresIn: 86400
   })

    res.json({token})
};

module.exports = authCtrl;



/*

google id: 1070484053881-kie1fjjloi981aesbh7538h6h724g1g9.apps.googleusercontent.com
google secret: ytqTjsY7uS5N4pdmkaG0Cahk

*/
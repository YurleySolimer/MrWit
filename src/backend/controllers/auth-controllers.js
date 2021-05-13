const authCtrl = {};
const jwt = require('jsonwebtoken');
const { cli } = require('webpack');
const User = require('../models/Users');
const Consultor = require('../models/Consultor');
const Client = require('../models/Client');
const config = require('../config');
const Roles = require('../models/Roles');
const { populate } = require('../models/Users');


authCtrl.postNewUser = async (req, res, next) => {
    console.log('in signup')
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
            policy, Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo } = req.body;

    var horario = {};

    if (Lunes && Martes && Miercoles && Jueves && Viernes && Sabado && Domingo) {
        horario = {
            Lunes: {
                disponible: Lunes.disponible,
                desde: Lunes.desde,
                hasta: Lunes.hasta
            },
            Martes: {
                disponible: Martes.disponible,
                desde: Martes.desde,
                hasta: Martes.hasta
            },
            Miercoles: {
                disponible: Miercoles.disponible,
                desde: Miercoles.desde,
                hasta: Miercoles.hasta
            },
            Jueves: {
                disponible: Jueves.disponible,
                desde: Jueves.desde,
                hasta: Jueves.hasta
            },
            Viernes: {
                disponible: Viernes.disponible,
                desde: Viernes.desde,
                hasta: Viernes.hasta
            },
            Sabado: {
                disponible: Sabado.disponible,
                desde: Sabado.desde,
                hasta: Sabado.hasta
            },
            Domingo: {
                disponible: Domingo.disponible,
                desde: Domingo.desde,
                hasta: Domingo.hasta
            },
        }
    }

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
        if(req.files[0] && req.files[1]) { 
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
                CV: {
                    name: req.files[1].originalname,
                    path: req.files[1].path
                },
                user: userSaved._id,
                status                
            });        
        }
        else if(req.files[0] && !req.files[1]) { 
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
        else if(!req.files[0] && req.files[1]) { 
            newConsultor = new Consultor ({
                name,
                lastname,
                email,
                CV: {
                    name: req.files[1].originalname,
                    path: req.files[1].path
                },
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
        else if(!req.files[0] && !req.files[1]) {
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
    }
    else if(!req.files) {
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

authCtrl.getSession = async (req, res) => {

        const userId = req.body.id;

        const cliente =  await Client.findOne({_id: userId});

        if (cliente) {
            const userSession = {
                cliente,
                id: userId,
                sessionId: req.sessionID
            }
            res.send(userSession)
        }

        else if (!cliente) {
            const consult =  await Consultor.findOne({_id: userId});
            if(consult) {
                const userSession = {
                    cliente,
                    id: userId,
                    sessionId: req.sessionID
                }
                res.send(userSession)
            }

            else if (!consult) {
                res.send({message: 'No encontrado'})

            }


        }


    
};

authCtrl.postSignIn = async (req, res) => {
   const userFound = await User.findOne({email: req.body.email}).populate("rol");
    if (!userFound) return res.json({ message: "No se encontró el usuario" });

   const matchPassword = await User.comparePassword(req.body.password, userFound.password);
   if(!matchPassword) return res.json({ token: null, message: "Contraseña incorrecta" });
   
   const token = jwt.sign({id: userFound._id}, config.SECRET, {
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
            socket: cliente.socket,

            token
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
};

authCtrl.postLogout = async (req, res) => {

};

authCtrl.postSocket = async (req, res) => {
    const {socketID} = req.body;
    const consultor = await Consultor.findById(req.params.id);

    if (consultor){ 
        const newConsultor = {
            socket: {
                socketID
            }
        };
        
        await Consultor.findOneAndUpdate({_id: req.params.id}, newConsultor);
        res.status(200).json({message: 'Datos guardados'});
    } 
    else if (!consultor) {
        const newClient = {
            socket: {
                socketID
            }
        };
        
        await Client.findOneAndUpdate({_id: req.params.id}, newClient);
        res.status(200).json({message: 'Datos guardados'});
 
    }
  }

module.exports = authCtrl;



/*

google id: 1070484053881-kie1fjjloi981aesbh7538h6h724g1g9.apps.googleusercontent.com
google secret: ytqTjsY7uS5N4pdmkaG0Cahk

*/
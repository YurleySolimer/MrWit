const googleCtrl = {};
const User = require('../models/Users');
const Consultor = require('../models/Consultor');
const Client = require('../models/Client');
const jwt = require('jsonwebtoken');
const config = require('../config');
const Roles = require('../models/Roles');
const { cli } = require('webpack');
const { populate } = require('../models/Users');

const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client('1070484053881-kie1fjjloi981aesbh7538h6h724g1g9.apps.googleusercontent.com')
const verifySignup = require ('../middlewares/verifySignup');



googleCtrl.postAuthGoogle = async (req, res) => {
    const { token }  = req.body
    console.log (req.body)
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    console.log(ticket.getPayload())
    const { name, email, picture } = ticket.getPayload();    
   /*  const user = await db.user.upsert({ 
        where: { email: email },
        update: { name, picture },
        create: { name, email, picture }
    }) */
    console.log(email + '  ' + name )
    res.status(201).json({'message': 'holi'})
    
}




module.exports = googleCtrl;
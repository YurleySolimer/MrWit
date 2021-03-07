const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/Users');
const Roles = require('../models/Roles');

module.exports = { 
    async verifyToken (req, res, next) {
        try {
            const token = req.headers["x-access-token"];

            if (!token) {
                return res.status(403).json({message: "No token provided"});
            }

            const decoded = jwt.verify(token, config.SECRET);
            req.userId = decoded.id;

            const user = await User.findById(req.userId, {password: 0});

            if (!user) {
                return res.status(404).json({message: "No user found"});
            }

            next();
            
        } catch (error) {
            return res.status(401).json({message: "Unauthorized"}) ;          
        }
    },

    async isAdmin (req, res, next) {
        const user = await User.findById(req.userId);
        const roles = await Roles.findById({_id: {$in: user.rol}});
        
        for(let i = 0; i < roles.length; i++) {
           if(roles[i].name === 'admin') {
               next();
               return;
           }
           return; 
        }
        return res.status(403).json({message: "Require Admin role"});
    },

    async isClient (req, res, next) {
        const user = await User.findById(req.userId);
        const roles = await Roles.findById({_id: {$in: user.rol}});
        
        for(let i = 0; i < roles.length; i++) {
           if(roles[i].name === 'client') {
               next();
               return;
           }
           return; 
        }
        return res.status(403).json({message: "Require Client role"});

    },

    async isConsultant (req, res, next) {
        const user = await User.findById(req.userId);
        const roles = await Roles.findById({_id: {$in: user.rol}});
        
        for(let i = 0; i < roles.length; i++) {
           if(roles[i].name === 'consultant') {
               next();
               return;
           }
           return; 
        }
        return res.status(403).json({message: "Require Consultant role"});

    },
}
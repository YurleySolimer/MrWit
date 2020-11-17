const express = require('express');
const router = express.Router();
const Consultores = require('../models/consultores');

router.get('/prueba',  async(req, res) => {
    const consultor = await Consultores.find();
    res.json(consultor);
        
});


module.exports = router;
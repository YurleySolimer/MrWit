const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
  res.send("Welcome to Mr Wit");
        
});

module.exports = router;
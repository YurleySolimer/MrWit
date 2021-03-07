const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req,res) => res.send('Welcome to MrWit'));
module.exports = router;

const { Router } = require('express');
const router = Router();

router.route('/admin')
    .get((req,res) => res.send('Im a admin'));

module.exports = router;

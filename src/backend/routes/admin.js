const { Router } = require('express');
const router = Router();
const { getClient, getClients, getConsultant, getConsultants } = require('../controllers/admin-controllers.js');



router.get('/admin', () => {
    res.send('Im admin')
});

router.get('/admin/clients', getClients);

router.get('/admin/client/:id', getClient);

router.get('/admin/consultants', getConsultants);

router.get('/admin/consultant/:id', getConsultant);

module.exports = router;

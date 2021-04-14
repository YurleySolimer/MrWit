const { Router } = require('express');
const router = Router();
const { getConsultor, updateConsultor, getWallet, getHistory, getAgenda, postWallet  } = require('../controllers/consultor-controllers');


router.route('/user/consultor/:id')
    .get(getConsultor)
    .put(updateConsultor);



router.route('/user/consultor/:id/wallet')
    .get(getWallet);

router.route('/user/consultor/:id/wallet/cuenta')
    .post(postWallet);

router.route('/user/consultor/:id/historial')
    .get(getHistory);

router.route('/user/consultor/:id/agenda')
    .get(getAgenda);

module.exports = router;

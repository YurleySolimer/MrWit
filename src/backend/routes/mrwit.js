const { Router } = require('express');
const router = Router();
const { getConsultores, getConsultor, postAgenda, postConsultaFinalizada, 
       postRecarga, getWallet, getHistory, getAgenda } = require('../controllers/mrwit-controllers');

const authjwt = require ('../middlewares');
const { v4: uuidv4 } = require("uuid");

router.post('/busqueda', (req, res) => {
    console.log(req.body)

        if(!req.body.category) { 
            if(!req.body.proffession) {
                res.redirect('/resultados')
            }
            else if (req.body.proffession) { 
                if(!req.body.especialidad) { 
                    res.redirect( `/resultados?proffession=${req.body.proffession}`)
                }
                else if(req.body.especialidad) { 
                    res.redirect( `/resultados?proffession=${req.body.proffession}&especialidad=${req.body.especialidad}`)
                }
            }
        }
        else if(req.body.category) {
            if(!req.body.proffession) {
                res.redirect( `/resultados?category=${req.body.category}`)            
            }
            else if (req.body.proffession) { 
                res.redirect( `/resultados?category=${req.body.category}&proffession=${req.body.proffession}`)
                }
                
        }
   
});

router.get('/resultados', getConsultores);

router.get('/join', (req, res) => { 
    console.log('hola')
    res.redirect(`/room/${uuidv4()}`);
});

router.get("/room/:room", (req, res) => {
    console.log(__dirname)
     res.render("room", { roomId: req.params.room });
});     

router.route('/consultor/:id')
    .get(getConsultor);

router.post('/agendar', [authjwt.verifyToken, authjwt.isClient], postAgenda);

router.route('/consulta/finalizada/:id')
    .post(postConsultaFinalizada);

router.route('/recarga/u/:id')
    .post(postRecarga);

router.route('/user/client/:id/wallet')
    .get(getWallet);
    
router.route('/user/client/:id/historial')
    .get(getHistory);

router.route('/user/client/:id/agenda')
    .get(getAgenda);
module.exports = router;

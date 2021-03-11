const mrwitCtrl = {};
const Consultor = require('../models/Consultor');
const Cliente = require('../models/Client');

mrwitCtrl.getConsultores = async (req, res) => {
    
    if(req.query) { 
        console.log(req.query)
        const { category, proffession, especialidad, ability, id, country} = req.query;

        if (!req.query.category) {
            if(!req.query.proffession) {
                const consultores = await Consultor.find()   
                 res.status(200).json(consultores);
            }
            else if(req.query.proffession) {
                if(!req.query.especialidad) {
                    const consultores = await Consultor.find(
                        {profession: {$in: proffession}},
                    );        
                    res.status(200).json(consultores);
                }
                else if(req.query.especialidad){
                    const consultores = await Consultor.find( 
                        { $and:[ 
                            {profession: {$in: proffession}}, 
                            {especialidad: {$in: especialidad}}
                        ]}      
                    );
                    res.status(200).json(consultores);
                }
            }
        }
        else if(req.query.category) {
            if(!req.query.proffession) {
                const consultores = await Consultor.find( 
                    {category: {$in: category}},  

                );
                res.status(200).json(consultores);
            }
            else if(req.query.proffession) {
                const consultores = await Consultor.find( 
                    { $and:[ 
                        {category: {$in: category}}, 
                        {profession: {$in: proffession}}
                    ]}     
                );
                res.status(200).json(consultores);

            }
        }





        

       /*  if (req.query.proffession) {
           
        }

        if (req.query.ability) {
            const consultores = await Consultor.find(
                {abilities: {$in: ability}},
            );
            
            res.status(200).json(consultores);
        }

        if (req.query.id) {
            const consultores = await Consultor.find(
                {_id: {$in: id}},
            );

            res.status(200).json(consultores);
        }

        if (req.query.country) {
            const consultores = await Consultor.find(
                {country: {$in: country}},
            );
            
            res.status(200).json(consultores);
        }
    }
    
     */
} 
};

mrwitCtrl.getConsultor = async (req, res) => {
    console.log(req.params.id);
    const consultor = await Consultor.findById(req.params.id);
    res.status(200).json(consultor); 
};

mrwitCtrl.postAgenda = async (req, res) => {
    const {date, consultant} = req.body;
    const {client} = req.params.id

    const NewDateConsultant = new Consultor ({
        agenda: {
            date,
            client
        }
    });    
    await Consultor.findOneAndUpdate({_id: consultant}, NewDateConsultant);

    const NewDateClient = new Client ({
        agenda: {
            date,
            consultant
        }
    });
    await Consultor.findOneAndUpdate({_id: client}, NewDateClient);

    res.status(200).json({message: "Date Saved"});
};

mrwitCtrl.postConsultaFinalizada =  async (req, res) => {
  
    //NewFeedback
    const {calification, feedback, to} = req.body;
    const {by} = req.params.id

    const NewFeedback = new Consultor ({
        history: { 
            calification,
            feedback,
            by
        }
    });
    await Consultor.findOneAndUpdate({_id: to}, NewFeedback);
     res.status(200).json({message: "Feedback Saved"});
}


mrwitCtrl.postRecarga= (req, res) => res.send('This is a recarga'); //Crear a parte la logica de la pasarela

mrwitCtrl.getWallet = async (req, res) => { 
    console.log(req.params.id);
    const cliente = await Cliente.findById(req.params.id);
    res.status(200).json(cliente); 
}
mrwitCtrl.getHistory = async (req, res) => {
    console.log(req.params.id);
    const cliente = await Cliente.findById(req.params.id);
    res.status(200).json(cliente); 
};
mrwitCtrl.getAgenda = async (req, res) => {
    console.log(req.params.id);
    const cliente = await Cliente.findById(req.params.id);
    res.status(200).json(cliente); 
};


module.exports = mrwitCtrl;

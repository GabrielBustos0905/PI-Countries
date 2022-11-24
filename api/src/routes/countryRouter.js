const { Router } = require('express');
const { Country, Activity } = require('../db')
const { findById, findByName } = require('../utils/utils')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        
        if(name){
            const responseName = await findByName(name);
            console.log(responseName)
            res.status(201).send(responseName)
        }
        else {
            const allCountries = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            })
            res.status(201).send(allCountries)
        }
    } catch (e) {
        console.log({ error : e.message })
        res.status(404).send({ error : e.message })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const response = await findById(id);
        res.status(202).send(response)
    } catch (e) {
        res.status(404).send({ error: e.message })
    }
});

module.exports = router


const { Router } = require('express');
const { createActivity } = require('../utils/utils');
const { Activity, Country } = require('../db')

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { countries, name, dificulty, duration, season } = req.body;
        const response = await createActivity(countries, name, dificulty, duration, season);

        res.status(200).send(response)
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
});

router.get('/', async (req, res) => {
    try {
        const response = await Activity.findAll()
        res.send(response)
    } catch (error) {
        res.status(404).send({ error: "error.message" })
    }
});

module.exports = router
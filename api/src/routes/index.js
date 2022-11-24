const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countryRouter = require('./countryRouter')
const activiyRouter = require('./activityRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countryRouter)
router.use('/activities', activiyRouter)

module.exports = router;

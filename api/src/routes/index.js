const { Router } = require("express");
const pokemonRouters = require('./pokemonRouters')
const typesRouters = require('./typesRouters')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/pokemon", pokemonRouters);
router.use("/types", typesRouters);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;

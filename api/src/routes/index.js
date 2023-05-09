const { Router } = require("express");
const pokemonRouters = require('./pokemonRouters')
const typesRouters = require('./typesRouters')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routes = Router();

routes.use("/pokemon", pokemonRouters);
routes.use("/types", typesRouters);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = routes;

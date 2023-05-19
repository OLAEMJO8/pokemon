const { Router } = require("express");
const getOneHandler = require("../handlers/getOneHandler");
const getPokemonsHandler = require("../handlers/getPokemonsHandler");
const createNewHandler = require("../handlers/createNewHandler");
const pokemonRouters = Router();

pokemonRouters.get("/", getPokemonsHandler);
pokemonRouters.post("/", createNewHandler);
pokemonRouters.get("/:id", getOneHandler);

module.exports = pokemonRouters;

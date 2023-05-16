const { Router } = require("express");
const getOneHandler = require("../handlers/getOneHandler");
const getAllHandler = require("../handlers/getAllHandler");
const getPokemonsHandler = require("../handlers/getPokemonsHandler");
const createNewHandler = require("../handlers/createNewHandler");
const pokemonRouters = Router();

pokemonRouters.get("/:id", getOneHandler);
pokemonRouters.get("/name", getPokemonsHandler);
pokemonRouters.get("/", getAllHandler);
pokemonRouters.post("/", createNewHandler);

module.exports = pokemonRouters;

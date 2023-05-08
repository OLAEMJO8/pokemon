const { Router } = require("express");
const {
  getAllHandler,
  getOneHandler,
  getNameHandler,
  createNewHandler,
} = require("../handlers/pokemonsHandler");
const pokemonRouters = Router();

pokemonRouters.get("/", getAllHandler);
pokemonRouters.get("/:id", getOneHandler);
pokemonRouters.get("/", getNameHandler);
pokemonRouters.post("/", createNewHandler);

module.exports = pokemonRouters;

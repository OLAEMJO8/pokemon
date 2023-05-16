// const axios = require("axios");
const { Pokemons } = require("../db");

/////////////////////////////////////////////////
const pokemonCreate = async (id, name, imagen, vida, ataque, defensa) => {
  return await Pokemons.create({
    id,
    name,
    imagen,
    vida,
    ataque,
    defensa,
  });
};

module.exports = pokemonCreate;

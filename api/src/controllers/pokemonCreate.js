const axios = require("axios");
const { Pokemons , Types} = require("../db");

/////////////////////////////////////////////////
const pokemonCreate = async (id, name, img, types, hp, attack, defense) => {
  const crearPokemon = await Pokemons.create({
    id,
    name,
    img,
    types,
    hp,
    attack,
    defense
  });
  return crearPokemon
}

module.exports = pokemonCreate;

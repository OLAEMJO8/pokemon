const axios = require("axios");

const { Pokemons , Type } = require("../db");

getPokemonController = async (name) => {

  const apiResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
  const apiPokemons = apiResponse.data.results;

  const dbPokemons = await Pokemons.findAll({
    include: {
      model: Type,
      through: { attributes: [] },
      attributes: ["name"],
    }
  });

  const filterApiPokemons = await Promise.all(apiPokemons.map(async (el) => {
    const res = await axios.get(el.url);
    const poke = res.data;
    return {
      id: poke.id,
      name: poke.name,
      img: poke.sprites.other.dream_world.front_default,
      types: poke.types.map(el => el.type.name),
      hp: poke.stats[0].base_stat,
      attack: poke.stats[1].base_stat,
      defense: poke.stats[2].base_stat,

    };
  }));

  const filterDbPokemons = dbPokemons.map(d => {
    d = d.dataValues;
    d.types = d.types.map(t => t.dataValues.name);
    return d;
  });

  const allPokemons = [...filterDbPokemons, ...filterApiPokemons];

  allPokemons.forEach(p => {
    p.name = p.name.charAt(0).toUpperCase() + p.name.slice(1);
  });

  if (name) {
    const pokemonName = allPokemons.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (pokemonName) return pokemonName;
    return { msg: "El nombre no coincide con un Pokemon" };
  } else {
    return allPokemons;
  }
}

module.exports = getPokemonController;

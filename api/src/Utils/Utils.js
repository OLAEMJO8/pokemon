const axios = require("axios");

const { Pokemons, Type } = require("../db");

const filtroPokemons = async () => {
  const apiResponse = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=40"
  );
  const apiPokemons = apiResponse.data.results;

  const filterDbPokemons = await Pokemons.findAll({
    include: {
      model: Type,
      through: { attributes: [] },
      attributes: ["name"],
    },
  });

  const filterApiPokemons = await Promise.all(
    apiPokemons.map(async (el) => {
      const res = await axios.get(el.url);
      const poke = res.data;
      return {
        id: poke.id,
        name: poke.name,
        img: poke.sprites.other.dream_world.front_default,
        types: poke.types.map((el) => el.type.name),
        hp: poke.stats[0].base_stat,
        attack: poke.stats[1].base_stat,
        defense: poke.stats[2].base_stat,
      };
    })
  );

  const allPokemons = [...filterDbPokemons, ...filterApiPokemons];

  return allPokemons;
};

module.exports = { filtroPokemons };

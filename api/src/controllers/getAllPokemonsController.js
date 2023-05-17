const axios = require("axios");
const { Pokemons } = require("../db");

1
getAllPokemonsController = async () => {
  const pokemonDb = await Pokemons.findAll();

  const infoApi = (await axios.get("https://pokeapi.co/api/v2/pokemon"));
  const pokemonList = response.data.results; 
  console.log(pokemonList)
 

  const pokemonData = await Promise.all(pokemonList.map(async (pokemon) => {
    const pokemonResponse = await axios.get(pokemon.url);
    const { id, name, sprites, stats } = pokemonResponse.data;
    const image = sprites.front_default;
    const hp = stats.find(stat => stat.stat.name === 'hp').base_stat;
    const attack = stats.find(stat => stat.stat.name === 'attack').base_stat;
    const defense = stats.find(stat => stat.stat.name === 'defense').base_stat;

    return { id, name, image, hp, attack, defense };
  }))
};

module.exports = getAllPokemonsController;

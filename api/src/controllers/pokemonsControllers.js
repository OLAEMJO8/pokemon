const axios = require("axios");
const { Pokemons } = require("../db");

const filterDataApi = (arr) =>
  arr.map((pokemon) => {
    return {
      name: pokemon.name,
      imagen: pokemon.image,
      vida: pokemon.vida,
      ataque: pokemon.ataque,
      defensa: pokemon.defensa,
      created: false,
    };
  });


/////////////////////////////////////////////////
const getOneById = async (id, source) => {
  const pokemon =
    source === "api"
      ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
      : await Pokemons.findByPk(id);

  return pokemon;
};
////////////////////////////////////////////////////

getAllPokemonName = async () => {
  const pokemonDb = await Pokemons.findAll();

  const infoApi = (await axios.get("https://pokeapi.co/api/v2/pokemon/").data);
  const pokemonApi = filterDataApi(infoApi.results);

  return [...pokemonDb, ...pokemonApi];
};

getPokemonName = async (name) => {
  const infoApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/`).data);
  const pokemonApi = filterDataApi(infoApi.results);

  const pokemonFilter = pokemonApi.filter((pokemon) => pokemon.name);

  const pokemonDb = await Pokemons.findAll({ where: { name: name } });

  return [...pokemonFilter, ...pokemonDb];
};

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

module.exports = {
  pokemonCreate,
  getOneById,
  getAllPokemonName,
  getPokemonName,
  
};

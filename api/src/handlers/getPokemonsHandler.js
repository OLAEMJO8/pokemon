const getPokemonController = require("../controllers/getPokemonController");

const { Pokemons } = require("../db");

// //! 3
const getPokemonsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    // let pokemonDataArray;

    // if (!name) {
    //   const pokemonData = await getPokemonController(name);
    //   pokemonDataArray = [pokemonData];
    // } else {
    //   const pokemons = await Pokemons.findAll();
    //   pokemonDataArray = await Promise.all(
    //     pokemons.map(async (pokemon) => {
    //       return await getPokemonController(pokemon.name);
    //     })
    //   );
    // }
    const pokemonData = await getPokemonController(name);
    res.status(200).json(pokemonData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getPokemonsHandler;

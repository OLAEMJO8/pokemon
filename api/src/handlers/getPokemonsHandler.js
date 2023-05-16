const getPokemonController = require("../controllers/getPokemonController");

const { Pokemons } = require("../db");

//! 3
const getPokemonsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const pokemonName = await getPokemonController(name);
    res.status(200).json(pokemonName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getPokemonsHandler;

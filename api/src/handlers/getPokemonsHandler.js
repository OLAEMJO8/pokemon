const getPokemonController = require("../controllers/getPokemonController");

const { Pokemons } = require("../db");

//? All pokemons or name

const getPokemonsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const pokemonData = await getPokemonController(name);
    res.status(200).json(pokemonData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getPokemonsHandler;

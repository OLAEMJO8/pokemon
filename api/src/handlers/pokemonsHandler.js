const {
  pokemonCreate,
  getOneById,
  getAllPokemonName,
  getPokemonName,
  pokemonArray,
} = require("../controllers/pokemonsControllers");
const { Pokemons } = require("../db");
/////////////////////////////Buscar info
const getAllHandler = async (req, res) => {
  try {
    const response = await Pokemons.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//////////////////////////////Pokemon recibido por id

const getOneHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";

  try {
    const response = await getOneById(id, source);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//!Buscar pokemon name REVISAR

const getNameHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const pokemonName = await getPokemonName(name);
      res.status(200).json(pokemonName);
    } else {
      const response = await getAllPokemonName();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////// Crear pokemon
const createNewHandler = async (req, res) => {
  const { id, name, imagen, vida, ataque, defensa } = req.body;

  try {
    const response = await pokemonCreate(
      id,
      name,
      imagen,
      vida,
      ataque,
      defensa
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllHandler,
  getOneHandler,
  getNameHandler,
  createNewHandler,
};

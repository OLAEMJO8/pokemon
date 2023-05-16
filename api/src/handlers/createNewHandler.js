const pokemonCreate = require("../controllers/pokemonCreate");
const { Pokemons } = require("../db");

//!4
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

module.exports = createNewHandler;

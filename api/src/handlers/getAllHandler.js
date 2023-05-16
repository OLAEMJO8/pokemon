const getAllPokemonsController = require("../controllers/getAllPokemonsController");

const { Pokemons } = require("../db");
//! 1
const getAllHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const response = await getAllPokemonsController(name);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllHandler;

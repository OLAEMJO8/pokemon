const getIdController = require("../controllers/getIdController");

const { Pokemons } = require("../db");

//!2

const getOneHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";

  try {
    const response = await getIdController(id, source);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getOneHandler;

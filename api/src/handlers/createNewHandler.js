const pokemonCreate = require("../controllers/pokemonCreate");
const { Pokemons, Types } = require("../db");

//!4
const createNewHandler = async (req, res) => {
  
  try {
    const { id, name, img, types, hp, attack, defense } = req.body;
    const response = await pokemonCreate(
      id,
      name,
      img,
      types,
      hp,
      attack,
      defense
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createNewHandler;

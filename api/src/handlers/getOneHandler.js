const getIdController = require("../controllers/getIdController");

const { Pokemons } = require("../db");

//? Busqueda por Id

const getOneHandler = async (req, res) => {
  
  const { id } = req.params;
  try {
    const response = await getIdController(id);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getOneHandler;

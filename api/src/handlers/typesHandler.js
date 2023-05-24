const getTypesController = require("../controllers/getTypesController");
const { Type} = require("../db");

const getTypesHandler = async (req, res) => {
  
  try {


    const types = await getTypesController()
    res.status(200).json( types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTypesHandler };

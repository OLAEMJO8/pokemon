const getTypesController = require("../controllers/getTypesController");
const { Types } = require("../db");

const getTypesHandler = async (req, res) => {
  
  
  try {
    res.status(200).json(await getTypesController());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTypesHandler };

const getTypesHandler = (req, res) => {
  try {
   
    const types = ["fire", "water", "grass"]; 

    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports ={ getTypesHandler};

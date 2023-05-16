const axios = require("axios");
const { Pokemons } = require("../db");

/////////////////////////////////////////////////
const getIdController = async (id, source) => {
  const pokemon =
    source === "api"
      ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
      : await Pokemons.findByPk(id);

  return pokemon;
};
module.exports = getIdController;

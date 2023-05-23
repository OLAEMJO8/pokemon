// const axios = require("axios");
const { filtroPokemons } = require("../Utils/Utils");

const getIdController = async (id) => {
  let idPokemons = await filtroPokemons();

  if (id) {
    const pokemon = idPokemons.find((p) => p.id == id);
    console.log(pokemon)
    if (pokemon) {
      return pokemon;
    } else {
      return { msg: "El ID no coincide con un Pokemon" };
    }
  } else {
    return "ID no especificado";
  }
};

module.exports = getIdController;

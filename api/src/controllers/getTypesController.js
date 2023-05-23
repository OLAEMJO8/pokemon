// const { Pokemon, Type } = require("../db");



//   getTypesController = async () => {
//       const url = await axios.get("https://pokeapi.co/api/v2/type");
//       const typePokemon = url.data.results.map((p) => p.name);
//       return typePokemon;
    
//   };
  
//   module.exports = getTypesController;
const axios = require("axios");
const { Pokemon, Type } = require("../db");

getTypesController = async () => {
  let types = await Type.findAll();

  if (types.length === 0) {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    types = response.data.results.map((type) => type.name);
    await Type.bulkCreate(types.map((type) => ({ name: type })));
  }

  return types;
};

module.exports = getTypesController;

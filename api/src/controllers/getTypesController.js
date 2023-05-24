// const { Pokemon, Type } = require("../db");



//   getTypesController = async () => {
//       const url = await axios.get("https://pokeapi.co/api/v2/type");
//       const typePokemon = url.data.results.map((p) => p.name);
//       return typePokemon;
    
//   };
  
//   module.exports = getTypesController;


// getTypesController = async () => {
//   let types = await Type.findAll();

//   if (types.length === 0) {
//     const response = await axios.get("https://pokeapi.co/api/v2/type");
//     types = response.data.results.map((type) => type.name);
//     await Type.bulkCreate(types.map((type) => ({ name: type })));
//   }

//   return types;


 
// }

// module.exports = getTypesController;
const axios = require("axios");
const { Pokemons, Type } = require("../db");

const getTypesController = async () => {
  try {
    const arrayTypes = [];

    const response = await axios.get("https://pokeapi.co/api/v2/type");
    response.data.results.forEach((type) => arrayTypes.push(type.name));

    const types = await Promise.all(arrayTypes.map(async (obj) => {
      try {
        return await Type.findOrCreate({
          where: {
            name: obj,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }));

    const allTypes = await Type.findAll();

    return allTypes;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getTypesController;

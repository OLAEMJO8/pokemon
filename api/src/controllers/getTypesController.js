const axios = require("axios");
const { Pokemon, Type } = require("../db");

getTypesController = async () => {

    const url = await axios.get("https://pokeapi.co/api/v2/type");
    const typePokemon = url.data.results.map((p) => p.name);
    return typePokemon;
  
};

module.exports = getTypesController;

//   const url = await axios.get("https://pokeapi.co/api/v2/type");

//   const typePokemon = url.data.results.map((p) => p.name);
//   await typePokemon.forEach(type => Type.create({name: type}))

//   console.log(typePokemon);
//   return typePokemon;

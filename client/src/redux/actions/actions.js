// import axios from "axios";

// // Pokemons

// export const getPokemon = () => {
//   return async function (dispatch) {
//     try {
//       let allPokemons = await axios.get("http://localhost:3001/pokemon");
//       return dispatch({
//         type: "GET_POKEMONS",
//         payload: allPokemons.data,
//       });
//     } catch (error) {
//       console.log("No encontramos Pokemons", error);
//     }
//   };
// };

// // Pokemons Name

// export const getPokemonName = (name) => {
//   return async function (dispatch) {
//     try {
//       let pokemonName = await axios.get(
//         `http://localhost:3001/pokemon?name=${name}`
//       );
//       return dispatch({
//         type: "GET_POKEMONS_BY_NAME",
//         payload: pokemonName.data,
//       });
//     } catch (error) {
//       console.log("El nombre del Pokemon no existe", error);
//     }
//   };
// };
// // Pokemons Id
// export const getPokemonId = (id) => {
//   return async function (dispatch) {
//     try {
//       let pokemonId = await axios.get(`http://localhost:3001/pokemon/${id}`);
//       return dispatch({
//         type: "GET_POKEMONS_BY_ID",
//         payload: pokemonId.data,
//       });
//     } catch (error) {
//       console.log("El ID del Pokemon no existe", error);
//     }
//   };
// };

// // Pokemons Crear
// export const postPokemon = (payload) => {
//   return async function (dispatch) {
//     try {
//       let crearPokemon = await axios.post(
//         "http://localhost:3001/pokemon",
//         payload
//       );
//       return dispatch({
//         type: "POST_POKEMONS",
//         payload: crearPokemon.data,
//       });
//     } catch (error) {
//       console.log("No se pudo crear el Pokemon", error);
//     }
//   };
// };

// // Types

// export const getTypes = () => {
//   return async function (dispatch) {
//     try {
//       let types = await axios.get("http://localhost:3001/types");
//       return dispatch({
//         type: "GET_TYPES",
//         payload: types.data,
//       });
//     } catch (error) {
//       console.log("Error en el tipo de pokemon", error);
//     }
//   };
// };

// //buscarpokemon
// export const searchPokemon = (name) => {
//   return {
//     type: "SEARCH_POKEMON",
//     payload: name,
//   };
// };

// //pokemon filtrado por tipo y origen
// export const pokemonFiltradoTipo = (tipo) => {
//   return {
//     type: "FILTRO_POKEMON_TIPO",
//     payload: { tipo},
//   };
// };
// //pokemon filtrado origen
// export const pokemonFiltradoOrigen = (origen) => {
//   return {
//     type: "FILTRO_POKEMON_ORIGEN",
//     payload: { origen},
//   };
// };

// // Ordenar por nombre
// export function ordenarPorName(payload) {
//   return {
//     type: "ORDER_NAME",
//     payload,
//   };
// }

// // Ordenar por ataque

// export function orderAttack(payload) {
//   return {
//     type: "ORDER_ATTACK",
//     payload,
//   };
// }
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const getPokemon = () => {
  return async function (dispatch) {
    try {
      const allPokemons = await axios.get("/pokemon");
      return dispatch({
        type: "GET_POKEMONS",
        payload: allPokemons.data,
      });
    } catch (error) {
      throw new Error("No se pudieron obtener los Pokemons: " + error.message);
    }
  };
};

export const getPokemonName = (name) => {
  return async function (dispatch) {
    try {
      const pokemonName = await axios.get(`/pokemon?name=${name}`);
      return dispatch({
        type: "GET_POKEMONS_BY_NAME",
        payload: pokemonName.data,
      });
    } catch (error) {
      throw new Error("El nombre del Pokemon no existe: " + error.message);
    }
  };
};

export const getPokemonId = (id) => {
  return async function (dispatch) {
    try {
      const pokemonId = await axios.get(`/pokemon/${id}`);
      return dispatch({
        type: "GET_POKEMONS_BY_ID",
        payload: pokemonId.data,
      });
    } catch (error) {
      throw new Error("El ID del Pokemon no existe: " + error.message);
    }
  };
};

export const postPokemon = (payload) => {
  return async function (dispatch) {
    try {
      const crearPokemon = await axios.post("/pokemon", payload);
      return dispatch({
        type: "POST_POKEMONS",
        payload: crearPokemon.data,
      });
    } catch (error) {
      throw new Error("No se pudo crear el Pokemon: " + error.message);
    }
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    try {
      const types = await axios.get("/types");
      return dispatch({
        type: "GET_TYPES",
        payload: types.data,
      });
    } catch (error) {
      throw new Error("Error en el tipo de Pokemon: " + error.message);
    }
  };
};

export const searchPokemon = (name) => {
  return {
    type: "SEARCH_POKEMON",
    payload: name,
  };
};

export const pokemonFiltradoTipo = (tipo) => {
  return {
    type: "FILTRO_POKEMON_TIPO",
    payload: { tipo },
  };
};

export const pokemonFiltradoOrigen = (origen) => {
  return {
    type: "FILTRO_POKEMON_ORIGEN",
    payload: { origen },
  };
};

export function ordenarPorName(payload) {
  return {
    type: "ORDER_NAME",
    payload,
  };
}

export function orderAttack(payload) {
  return {
    type: "ORDER_ATTACK",
    payload,
  };
}

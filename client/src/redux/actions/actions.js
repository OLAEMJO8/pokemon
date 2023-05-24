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

export const setPokemonDetails = (details) => {
  return {
    type: "SET_POKEMON_DETAILS",
    payload: details,
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
      let pokemonId = await axios.get(`/pokemon/${id}`);
      return dispatch({
        type: "GET_POKEMONS_BY_ID",
        payload: pokemonId.data,
      });
    } catch (error) {
      console.log("El ID del Pokemon no existe", error);
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
  return async function (dispatch) {
    try {
      let json = await axios.get(`/pokemon?name=${name}`);
      let arr = [];
      arr.push(json.data);

      return dispatch({
        type: "SEARCH_POKEMON",
        payload: arr,
      });
    } catch (error) {
      throw new Error("Pokemon no encontrado ");
    }
  };
};

export const pokemonFiltradoTipo = (payload) => {
  return {
    type: "FILTRO_POKEMON_TIPO",
    payload,
  };
};

export const pokemonFiltradoOrigen = (payload) => {
  return {
    type: "FILTRO_POKEMON_ORIGEN",
    payload,
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

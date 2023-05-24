const initialState = {
  pokemons: [],
  pokemonNames: [],
  pokemonId: [],
  types: [],
  createdPokemons: [],
  pokemonsByOrigin: [],
  pokemonsByType: [],
  sortedPokemons: [],
  sortedByAttack: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };

    case "GET_POKEMONS_BY_NAME":
      return {
        ...state,
        pokemonNames: action.payload,
      };
    case "SET_POKEMON_DETAILS":
      return {
        ...state,
        pokemonId: action.payload,
      };
    case "GET_POKEMONS_BY_ID":
      return {
        ...state,
        pokemonId: action.payload,
      };

    case "POST_POKEMONS":
      const modifiedPayload = {
        ...action.payload,
        types: action.payload.types.map((p) => p.name),
      };
      return {
        ...state,
        createdPokemons: modifiedPayload,
      };

    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };

    case "ORDER_NAME":
      const sortedPokemons = [...state.pokemons].sort((a, b) => {
        return action.payload === "a-z"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
      return {
        ...state,
        pokemons: sortedPokemons,
      };

    case "ORDER_ATTACK":
      const sortedByAttack = [...state.pokemons].sort((a, b) => {
        return action.payload === "max"
          ? b.attack - a.attack
          : a.attack - b.attack;
      });
      return {
        ...state,
        pokemons: sortedByAttack,
      };

    case "FILTRO_POKEMON_ORIGEN":
      let pokemonsByOrigin;
      if (action.payload === "api") {
        pokemonsByOrigin = state.pokemons.filter(
          (poke) => typeof poke.id === "number"
        );
      } else if (action.payload === "db") {
        pokemonsByOrigin = state.pokemons.filter(
          (poke) => typeof poke.id === "string"
        );
      } else {
        pokemonsByOrigin = state.pokemons;
      }
      return {
        ...state,
        pokemons: pokemonsByOrigin,
      };

    case "FILTRO_POKEMON_TIPO":
      const pokemonsAll = state.pokemons;
      const pokemonsByType =
        action.payload === "all"
          ? { ...state, pokemons: pokemonsAll }
          : pokemonsAll.filter(
              (f) =>
                f.types[0] === action.payload || f.types[1] === action.payload
            );
      console.log(pokemonsByType);
      return {
        ...state,
        pokemons: pokemonsByType,
      };

    case "SEARCH_POKEMON":
      return {
        ...state,
        pokemons: action.payload,
      };

    default:
      return state;
  }
}

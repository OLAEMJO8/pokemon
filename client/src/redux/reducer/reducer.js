const inicialState = {
  pokemons: [],
  pokemonsName: [],
  pokemonsId: [],
  crearPokemons: [],
  pokemonsPorOrigen: [],
  pokemonsPorTipo: [],
  sortPokemon: [],
  sortAttack: [],
  // pokemonSearch: [],
};

export default function reducer(state = inicialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };

    case "GET_POKEMONS_BY_NAME":
      return {
        ...state,
        pokemonsName: action.payload,
      };

    case "GET_POKEMONS_BY_ID":
      return {
        ...state,
        pokemonsId: action.payload,
      };

    case "POST_POKEMONS":
      action.payload.type = action.payload.types.map((p) => p.name);
      return {
        ...state,
        crearPokemons: action.payload,
      };
    case "GET_TYPES":
      return {
        ...state,
        pokemonsId: action.payload,
      };
    case "ORDER_NAME":
      let sortPokemon =
        action.payload === "a-z"
          ? [...state.pokemons].sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : [...state.pokemons].sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sortPokemon,
      };

    case "ORDER_ATTACK":
      const sortAttack = state.pokemons.slice().sort(function (a, b) {
        return action.payload === "max"
          ? b.attack - a.attack
          : a.attack - b.attack;
      });
      return {
        ...state,
        pokemons: sortAttack,
      };

    case "FILTRO_POKEMON_ORIGEN":
      let pokemonsPorOrigen;
      if (action.payload === "db") {
        pokemonsPorOrigen = state.pokemons.filter(
          (poke) => typeof poke.id === "number"
        );
      } else if (action.payload === "api") {
        pokemonsPorOrigen = state.pokemons.filter(
          (poke) => typeof poke.id === "string"
        );
      } else {
        pokemonsPorOrigen = state.pokemons;
      }
      return {
        ...state,
        pokemons: pokemonsPorOrigen,
      };

    case "FILTRO_POKEMON_TIPO":
      const pokemonsPorTipo = state.pokemons.filter((p) =>
        p.types.includes(action.payload)
      );
      return {
        ...state,
        pokemons: pokemonsPorTipo,
      };

    // case "SEARCH_POKEMON":
    //   return {
    //     ...state,
    //     pokemonSearch: state.pokemons.filter((pokemon) =>
    //       pokemon.name.includes(action.payload)
    //     ),
    //   };

    default:
      return state;
  }
}

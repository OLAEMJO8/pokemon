// const inicialState = {
//   pokemons: [],
//   pokemonsName: [],
//   pokemonsId: [],
//   types: [],
//   crearPokemons: [],
//   pokemonsPorOrigen: [],
//   pokemonsPorTipo: [],
//   sortPokemon: [],
//   sortAttack: [],
//   // pokemonSearch: [],
// };

// export default function reducer(state = inicialState, action) {
//   switch (action.type) {
//     case "GET_POKEMONS":
//       return {
//         ...state,
//         pokemons: action.payload,
//       };

//     case "GET_POKEMONS_BY_NAME":
//       return {
//         ...state,
//         pokemonsName: action.payload,
//       };

//     case "GET_POKEMONS_BY_ID":
//       return {
//         ...state,
//         pokemonsId: action.payload,
//       };

//     case "POST_POKEMONS":
//       action.payload.type = action.payload.types.map((p) => p.name);
//       return {
//         ...state,
//         crearPokemons: action.payload,
//       };
//     case "GET_TYPES":
//       return {
//         ...state,
//         types: action.payload,
//       };
//     case "ORDER_NAME":
//       let sortPokemon =
//         action.payload === "a-z"
//           ? [...state.pokemons].sort(function (a, b) {
//               if (a.name > b.name) {
//                 return 1;
//               }
//               if (b.name > a.name) {
//                 return -1;
//               }
//               return 0;
//             })
//           : [...state.pokemons].sort(function (a, b) {
//               if (a.name > b.name) {
//                 return -1;
//               }
//               if (b.name > a.name) {
//                 return 1;
//               }
//               return 0;
//             });
//       return {
//         ...state,
//         pokemons: sortPokemon,
//       };

//     case "ORDER_ATTACK":
//       const sortAttack = state.pokemons.slice().sort(function (a, b) {
//         return action.payload === "max"
//           ? b.attack - a.attack
//           : a.attack - b.attack;
//       });
//       return {
//         ...state,
//         pokemons: sortAttack,
//       };

//     case "FILTRO_POKEMON_ORIGEN":
//       let pokemonsPorOrigen;
//       if (action.payload === "db") {
//         pokemonsPorOrigen = state.pokemons.filter(
//           (poke) => typeof poke.id === "number"
//         );
//       } else if (action.payload === "api") {
//         pokemonsPorOrigen = state.pokemons.filter(
//           (poke) => typeof poke.id === "string"
//         );
//       } else {
//         pokemonsPorOrigen = state.pokemons;
//       }
//       return {
//         ...state,
//         pokemons: pokemonsPorOrigen,
//       };

//     case "FILTRO_POKEMON_TIPO":
//       const pokemonsPorTipo = state.pokemons.filter((p) =>
//         p.types.includes(action.payload)
//         );
//         return {
//           ...state,
//           pokemons: pokemonsPorTipo,
//         };
        
//         // case "SEARCH_POKEMON":
//         //   return {
//     //     ...state,
//     //     pokemonSearch: state.pokemons.filter((pokemon) =>
//     //       pokemon.name.includes(action.payload)
//     //     ),
//     //   };

//     default:
//       return state;
//   }
// }

const initialState = {
  pokemons: [],
  pokemonNames: [],
  pokemonIds: [],
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

    case "GET_POKEMONS_BY_ID":
      return {
        ...state,
        pokemonIds: action.payload,
      };

    case "POST_POKEMONS":
      const modifiedPayload = {
        ...action.payload,
        type: action.payload.types.map((p) => p.name),
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
        return action.payload === "max" ? b.attack - a.attack : a.attack - b.attack;
      });
      return {
        ...state,
        pokemons: sortedByAttack,
      };

    case "FILTRO_POKEMON_ORIGEN":
      let pokemonsByOrigin;
      if (action.payload === "db") {
        pokemonsByOrigin = state.pokemons.filter((poke) => typeof poke.id === "number");
      } else if (action.payload === "api") {
        pokemonsByOrigin = state.pokemons.filter((poke) => typeof poke.id === "string");
      } else {
        pokemonsByOrigin = state.pokemons;
      }
      return {
        ...state,
        pokemons: pokemonsByOrigin,
      };

    case "FILTRO_POKEMON_TIPO":
      const pokemonsByType = state.pokemons.filter((p) => p.types.includes(action.payload));
      return {
        ...state,
        pokemons: pokemonsByType,
      };

    case "SEARCH_POKEMON":
      return {
        ...state,
        pokemonSearch: state.pokemons.filter((pokemon) =>
          pokemon.name.includes(action.payload)
        ),
      };

    default:
      return state;
  }
}

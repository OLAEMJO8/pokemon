// import React from "react";
// import { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { getPokemonId } from "./../../redux/actions/actions";

// function Detail() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const pokemonId = useSelector((state) => state.pokemonId);
// console.log(pokemonId)
//   useEffect(() => {
//     dispatch(getPokemonId(id));
//   }, [dispatch, id]);

// return (
//   <>
//     <div>
//       <Link to="/home">
//         <button>Volver</button>
//       </Link>
//     </div>

//     {pokemonId ? (
//       <div>
//         <h2>{pokemonId.name?.toUpperCase()}</h2>

//         <div>
//           <strong>Vida:</strong>{" "}
//           {pokemonId.stats?.find((stat) => stat.name === "hp")?.value}
//         </div>
//         <div>
//           <strong>Ataque:</strong>{" "}
//           {pokemonId.stats?.find((stat) => stat.name === "attack")?.value}
//         </div>
//         <div>
//           <strong>Defensa:</strong>{" "}
//           {pokemonId.stats?.find((stat) => stat.name === "defense")?.value}
//         </div>
//       </div>
//     ) : (
//       <div>Loading...</div>
//     )}
//   </>
// );

// }

// export default Detail;
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonId } from "./../../redux/actions/actions";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemonId = useSelector((state) => state.pokemonId);
  console.log(pokemonId);

  useEffect(() => {
    dispatch(getPokemonId(id));
  }, [dispatch, id]);

  return (
    <>
      <div>
        <Link to="/home">
          <button>Volver</button>
        </Link>
      </div>

      {pokemonId ? (
        <div>
          <h2>{pokemonId.name?.toUpperCase()}</h2>

          <div>
            <strong>Types:</strong>
            <h1>
            {pokemonId.types && <span>{pokemonId.types.join(", ")}</span>}
            </h1>
          </div>

          <div>
            <strong>Vida:</strong>
            <h1> {pokemonId.hp}</h1>
          </div>
          <div>
            <strong>Ataque:</strong> <h1> {pokemonId.attack}</h1>
          </div>
          <div>
            <strong>Defensa:</strong> <h1> {pokemonId.defense}</h1>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Detail;

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonId } from "./../../redux/actions/actions";
import "./detail.css";

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
      <div className="detail">
        <div className="button-container">
          <Link to="/home">
            <button className="button">Volver</button>
          </Link>
          {/* Agrega más botones si es necesario */}
        </div>

        {pokemonId ? (
          <div>
            <h2 className="pokemon-name">{pokemonId.name?.toUpperCase()}</h2>

            <div>
              <div className="img">
                <img src={pokemonId.img} alt={`Imagen de ${pokemonId.name}`} />
              </div>
              <strong>Types:</strong>
              <h1 className="small-text">
                {pokemonId.types && <span>{pokemonId.types.join(", ")}</span>}
              </h1>
            </div>

            <div>
              <strong>Vida:</strong>
              <h1 className="small-text"> {pokemonId.hp}</h1>
            </div>
            <div>
              <strong>Ataque:</strong>{" "}
              <h1 className="small-text"> {pokemonId.attack}</h1>
            </div>
            <div>
              <strong>Defensa:</strong>{" "}
              <h1 className="small-text"> {pokemonId.defense}</h1>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default Detail;

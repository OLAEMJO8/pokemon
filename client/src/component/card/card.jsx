// Card.js
import React from "react";
import { Link } from "react-router-dom";

function Card({ id, name, img, types }) {
  return (
    <>
      <div>
        <Link to={`/pokemon/${id}`}>
          <button>Ver Detalle</button>
        </Link>
      </div>

      <div>
        <h3>Nombre: {name}</h3>
      </div>
      <div>
        <h3>
          Tipos:{" "}
          {types?.map((m) =>
            types.length > 1 ? (
              <span key={`${id}-${m}`}>
                {" - "}
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </span>
            ) : (
              <span key={`${id}-${m}`}>
                {m.charAt(0).toUpperCase() + m.slice(1)}{" "}
              </span>
            )
          )}
        </h3>
      </div>
      <div>
        <img src={img} alt={`Imagen de ${name}`} />
      </div>
    </>
  );
}

export default Card;

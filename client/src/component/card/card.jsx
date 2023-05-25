import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Card({ id, name, img, types }) {
  return (
    <div className="card">

      <div className="text">
        <h1> {name}</h1>
      </div>
      <div className="text">
      <div className="img">
        <img src={img} alt={`Imagen de ${name}`} />
      </div>

      <div className="button-container">
        <Link to={`/pokemon/${id}`}>
          <button className="button">Ver Detalle</button>
        </Link>
      </div>
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
    </div>
  );
}

export default Card;

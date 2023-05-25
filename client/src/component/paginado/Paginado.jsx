import React from "react";
import "./paginado.css"

export default function Paginado({ pokePag, allPokemon, paginado, pagAct }) {
  const numeroPagina = [];

  for (let i = 0; i < Math.ceil(allPokemon / pokePag); i++) {
    numeroPagina.push(i + 1);
  }

  return (
    <nav className="button-container">
      {numeroPagina.length > 0 &&
        numeroPagina.map((pag) => (
          <button
            className="button"
            id={pag}
            value={pag}
            key={pag}
            onClick={() => paginado(pag)}
          >
            {pag}
          </button>
        ))}
    </nav>
  );
}

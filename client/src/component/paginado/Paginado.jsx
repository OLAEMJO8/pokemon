// import React from "react";

// export default function Paginado({pokePag, allPokemon, paginado,pagAct}){
//     const numeroPagina = [];

//     for (let i = 0; i < Math.ceil(allPokemon / pokePag); i++) {
//         numeroPagina.push(i + 1);
//       }

//       return (
//         <nav>
//           {numeroPagina &&
//             numeroPagina.map((pag) => {
//               return (
//                 <button
//                   className={pagAct === pag ? "activeButton" : "btn"}
//                   id={pag}
//                   value={pag}
//                   key={pag}
//                   onClick={() => paginado(pag)}
//                 >
//                   {pag}
//                 </button>
//               );
//             })}
//         </nav>
//       );


// }

import React from "react";

export default function Paginado({pokePag, allPokemon, paginado, pagAct}) {
  const numeroPagina = [];

  for (let i = 0; i < Math.ceil(allPokemon / pokePag); i++) {
    numeroPagina.push(i + 1);
  }

  return (
    <nav>
      {numeroPagina.length > 0 &&
        numeroPagina.map(pag => (
          <button
            className={pagAct === pag ? "activeButton" : "btn"}
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

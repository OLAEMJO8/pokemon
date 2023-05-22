// import './cards.css';
import React from "react";




function Card({id,name,img,types}) {
  return (
    <div key={id}>
     <div>
      <h3>{name.toUpperCase()}</h3>
     </div>
     <div>
      <h3>Types: {types.map(m => ` - ${m.charAt(0).toUpperCase() + m.slice(1)}`).join(' ')}</h3>
     </div>
     <div>
        <img src={img} alt={`Imagen de ${name}`} />
     </div>
    
    </div>
  );
}

export default Card;

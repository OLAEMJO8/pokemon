// import './card.css';
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
function Navbar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleButton = (event) => {
    event.preventDefault();
    dispatch(searchPokemon(name));
    setName("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Busqueda"
          onChange={handleInput}
        />
        <Link to={`/home/${name}`}>
          <button type="submit" onClick={handleButton}>
            Buscar
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Navbar;

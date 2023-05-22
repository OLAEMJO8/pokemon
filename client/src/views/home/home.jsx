// import './Home.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../component/cards/cards";
import Navbar from "../../component/navbar/navbar";
import {
  getPokemon,
  getTypes,
  pokemonFiltradoOrigen,
  pokemonFiltradoTipo, 
} from "../../redux/actions/actions";

function Home() {
  return (
    <div>
      <h1>Esta es la Home</h1>
      <Navbar />
      <Cards />
    </div>
  );
}

export default Home;

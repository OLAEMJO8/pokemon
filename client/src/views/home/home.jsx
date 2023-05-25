import './home.css';

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../component/card/card";
import Navbar from "../../component/navbar/navbar";
import {
  getPokemon,
  getTypes,
  searchPokemon,
  pokemonFiltradoTipo,
  ordenarPorName,
  orderAttack,
  pokemonFiltradoOrigen,
} from "../../redux/actions/actions";

import Paginado from "./../../component/paginado/Paginado";

function Home() {
  const [refresh, setRefreshState] = useState();
  const [, setLoading] = useState(false);

  const dispatch = useDispatch();

  const allPokemon = useSelector((state) => state.pokemons);

  const typesPokemon = useSelector((state) => state.types);
  console.log(typesPokemon);

  const [order, setOrder] = useState("");
  const [origen, setOrigen] = useState("All");
  const [pagAct, setPagAct] = useState(1);
  const [pokePag] = useState(12);
  const ultimoPoke = pagAct * pokePag;
  const primerPoke = ultimoPoke - pokePag;
  const pokeAct = allPokemon.slice(primerPoke, ultimoPoke);

  const paginado = (numPage) => {
    setPagAct(numPage);
  };

  useEffect(() => {
    dispatch(getPokemon());
    dispatch(getTypes());
  }, [dispatch]);

  const handleSortName = (e) => {
    e.preventDefault();
    dispatch(ordenarPorName(e.target.value));
    setPagAct(1);
    setOrder(`Ordenado ${e.target.value}`);
  };

  const handleSortAttack = (e) => {
    e.preventDefault();
    dispatch(orderAttack(e.target.value));
    setPagAct(1);
    setOrder(`Ordenado ${e.target.value}`);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(pokemonFiltradoTipo(e.target.value));
    setPagAct(1);
    setOrder(`Ordenado ${e.target.value}`);
  };

  const handleFilterCreated = (e) => {
    const selectedOrigin = e.target.value;
    dispatch(pokemonFiltradoOrigen(selectedOrigin));
    setOrigen(selectedOrigin);
    setPagAct(1);
    setRefreshState((prevState) => !prevState);
  };

  const handleSearch = (e) => {
    dispatch(searchPokemon(e.target.value));
    setPagAct(1);
  };

  const pageHandler = (pag) => {
    setPagAct(pag);
  };

  return (
    <div className="container">
      <div className="navbar">
        <Navbar onSearch={handleSearch} />
      </div>

      <div className="filter-options">
        <label className="label">
          Order Pokemons:
          <select className="select" onChange={handleSortName}>
            <option value="none">None</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </label>

        <label className="label">
          Order By Attack:
          <select className="select" onChange={handleSortAttack}>
            <option value="attack">Attack</option>
            <option value="max">Max</option>
            <option value="min">Min</option>
          </select>
        </label>

        <label className="label">
          Filter by Type:
          <select className="select" onChange={handleFilter}>
            <option value="all">All</option>
            {typesPokemon.map((poke) => {
              return (
                <option key={poke.name} value={poke.name}>
                  {poke.name}
                </option>
              );
            })}
          </select>
        </label>

        <label className="label">
          Show Pokemons:
          <select className="select" onChange={handleFilterCreated}>
            <option value="all">All</option>
            <option value="db">From Db</option>
            <option value="api">From Api</option>
          </select>
        </label>
      </div>

      <div className="paginado">
        <Paginado
          pokePag={pokePag}
          allPokemon={allPokemon.length}
          paginado={paginado}
          onSetPage={pageHandler}
          pagAct={pagAct}
        />
      </div>

      <section className="card-container">
        {pokeAct?.map((el, index) => (
          <Card
            key={`${el.id}-${index}`}
            name={el.name}
            types={el.types}
            img={el.img}
            id={el.id}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;

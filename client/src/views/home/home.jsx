// // import './Home.css';
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Card from "../../component/card/card";
// import Navbar from "../../component/navbar/navbar";
// import {
//   getPokemon,
//   getTypes,
//   searchPokemon,pokemonFiltradoTipo,ordenarPorName,orderAttack, pokemonFiltradoOrigen
// } from "../../redux/actions/actions";

// import Paginado from './../../component/paginado/Paginado';

// function Home() {
//   const [, setRefreshState] = useState(false);
//   const [, setLoading] = useState(false);
  
//   const dispatch = useDispatch();
  
//   const allPokemon = useSelector((state) => state.pokemons);
  
//   const allPoke = useSelector((state) => state.allPokemons)
//   const allTypes = useSelector((state) => state.types);
//   const [order, setOrder] = useState('')
//   const [origen, setOrigen] = useState("All")
//   const [pagAct, setPagAct] = useState(1);
//   const [pokePag] = useState(12);
//   const ultimoPoke = pagAct * pokePag;
//   const primerPoke = ultimoPoke - pokePag;
//   const pokeAct = allPokemon.slice(primerPoke, ultimoPoke);
 
//   const paginado = (numPage) => {
//     setPagAct(numPage);
//   };
//   useEffect(()=>{
//     dispatch(getPokemon())
//     dispatch(getTypes())
//   }, [dispatch])
  
//   const handleTypes = (e) => {
//     dispatch(pokemonFiltradoTipo(e.target.value), origen);
//     setPagAct(1);
//     setRefreshState((prevState) => !prevState);
//   };
//   function handleSortName(e){
//     e.preventDefault();
//     dispatch(ordenarPorName(e.target.value))
//     setPagAct(1);
//     setOrder(`Ordenado ${e.target.value}`)
// }
// function handleSortAttack(e){
//     e.preventDefault();
//     dispatch(orderAttack(e.target.value))
//     setPagAct(1);
//     setOrder(`Ordenado ${e.target.value}`)
// }
// function handleFilter(e){
//   e.preventDefault();
//   dispatch(pokemonFiltradoTipo(e.target.value))
//   setPagAct(1);
//   setOrder(`Ordenado ${e.target.value}`)
// }
// function handleFilterCreated(e){
//   dispatch(pokemonFiltradoOrigen(e.target.value))
//   setPagAct(1);
//   setOrder(`Ordenado ${e.target.value}`)
// }
 

//   const handleSearch = (e) => {
//     dispatch(searchPokemon(e.target.value));
//     setPagAct(1);
//   };




//   const pageHandler = (pag) => {
//     setPagAct(pag);
//   };

//   return (
//     <div>
//       <h1>Esta es la Home</h1>
//       <div >
//   <Navbar onSearch={(e) => handleSearch(e)} />
// </div>
// <div >
//                     <label >Order Pokemons: 
//                         <select  onChange={e=>handleSortName(e)}>
//                             <option value="none">None</option>
//                             <option value="a-z">a-z</option>
//                             <option value="z-a">z-a</option>
//                         </select>
//                     </label>
//                     <label  >Order By Attack:
//                         <select  onChange={e=>handleSortAttack(e)}>
//                             <option value='attack'>Attack</option>
//                             <option value='max'>Max</option>
//                             <option value='min'>Min</option>
//                         </select>
//                     </label>
//                     <label >Filter by Type: 
//                         <select  onChange={e=> handleFilter(e)}>
//                             <option value="all">All</option>
//                             {types.map(m=>{
//                                 return(
//                                     <option value={m.name}>{m.name}</option>
//                                 )
//                             })}
//                         </select>
//                     </label>
//                     <label >Show Pokemons: 
//                     <select  onChange={e=> handleFilterCreated(e)}>
//                         <option value="all">All</option>
//                         <option value="created">From DB</option>
//                         <option value="api">From Api</option>
//                     </select>
//                     </label>

// </div>
//       <div >
//           <Paginado
//             pokePag={pokePag}
//             allPokemon={allPokemon.length}
//             paginado={paginado}
//             onSetPage={pageHandler}
//             pagAct={pagAct}
//           />
//         </div>
        
      
//           <section >
//             {pokeAct?.map((el) => {
//               return (
//                 <Card name={el.name} types={el.types} img={el.img} id={el.id} />
//               );
//             })}
//           </section>
        
//       </div>

  
//   );
// }

// export default Home;
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
  const [, setRefreshState] = useState(false);
  const [, setLoading] = useState(false);

  const dispatch = useDispatch();

  const allPokemon = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);
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

  const handleTypes = (e) => {
    dispatch(pokemonFiltradoTipo(e.target.value, origen));
    setPagAct(1);
    setRefreshState((prevState) => !prevState);
  };

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
    dispatch(pokemonFiltradoOrigen(e.target.value));
    setPagAct(1);
    setOrder(`Ordenado ${e.target.value}`);
  };

  const handleSearch = (e) => {
    dispatch(searchPokemon(e.target.value));
    setPagAct(1);
  };

  const pageHandler = (pag) => {
    setPagAct(pag);
  };

  return (
    <div>
      <h1>Esta es la Home</h1>
      <div>
        <Navbar onSearch={handleSearch} />
      </div>
      <div>
        <label>
          Order Pokemons:
          <select onChange={handleSortName}>
            <option value="none">None</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </label>
        <label>
          Order By Attack:
          <select onChange={handleSortAttack}>
            <option value="attack">Attack</option>
            <option value="max">Max</option>
            <option value="min">Min</option>
          </select>
        </label>
        <label>
          Filter by Type:
          <select onChange={handleFilter}>
            <option value="all">All</option>
            {types.map((m) => {
              return (
                <option key={m.name} value={m.name}>
                  {m.name}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Show Pokemons:
          <select onChange={handleFilterCreated}>
            <option value="all">All</option>
            <option value="created">From DB</option>
            <option value="api">From Api</option>
          </select>
        </label>
      </div>
      <div>
        <Paginado
          pokePag={pokePag}
          allPokemon={allPokemon.length}
          paginado={paginado}
          onSetPage={pageHandler}
          pagAct={pagAct}
        />
      </div>
      <section>
        {pokeAct?.map((el) => {
          return (
            <Card key={el.id} name={el.name} types={el.types} img={el.img} id={el.id} />
          );
        })}
      </section>
    </div>
  );
}

export default Home;

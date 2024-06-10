import React, { useState, useEffect } from "react";
import Display from "./Display";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <div className="container">
      <div>
        <Display />
      </div>
      <div className="pokemonList">
        <h3>Available Pokemon</h3>
        <ul>{pokemonList.length > 1 && pokemonList.map((p) => <li />)}</ul>
      </div>
    </div>
  );
};

export default Pokedex;

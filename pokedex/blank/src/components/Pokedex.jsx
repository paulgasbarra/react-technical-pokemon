import React, { useState, useEffect } from "react";
import Display from "./Display";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState(["no data"]);

  return (
    <div className="container">
      <div>
        <Display />
      </div>
      <div className="pokemonList">
        <h3>Available Pokemon</h3>
        <ul>
          {pokemonList.length > 0 && pokemonList.map((p) => <li>{p}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;

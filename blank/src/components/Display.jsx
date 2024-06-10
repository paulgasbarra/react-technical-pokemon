import React, { useState, useEffect } from "react";
import "./Components.css";

function Display({ url }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [url]);

  return (
    <>
      {pokemon && (
        <div className="displayContainer">
          <img
            className="displayImage"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />

          <div>Name: {pokemon.name} </div>
          <div>Abilities:</div>
          {pokemon.abilities.map((a) => (
            <li key={a.ability.name}>{a.ability.name}</li>
          ))}
        </div>
      )}
    </>
  );
}

export default Display;

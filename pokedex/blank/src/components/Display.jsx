import React, { useState, useEffect } from "react";
import "./Components.css";

function Display({ url }) {
  const [pokemon, setPokemon] = useState({});

  return (
    <>
      {pokemon && (
        <div className="displayContainer">
          <img className="displayImage" src={""} alt={""} />

          <div>Name: </div>
          <div>Abilities:</div>
        </div>
      )}
    </>
  );
}

export default Display;

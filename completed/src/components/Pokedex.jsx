import React, { useState, useEffect } from "react";
import Display from "./Display";
import ListItem from "./ListItem";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        setSelected(data.results[0]);
      });
  }, []);

  return (
    <div className="container">
      <div>
        {selected && <Display url={selected.url} name={selected.name} />}
      </div>
      <div className="pokemonList">
        <h3>Available Pokemon</h3>
        <ul>
          {pokemonList.length > 1 &&
            pokemonList.map((p) => (
              <ListItem
                key={p.name}
                name={p.name}
                selected={p.name === selected.name}
                handleClick={() => setSelected(p)}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;

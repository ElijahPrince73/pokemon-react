import React from "react";

const PokemonList = ({ pokemon }) => {
  return (
    <div>
      <ul>
        {pokemon.map((p) => {
          return <li className="mt-3 text-cyan-900">{p.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default PokemonList;

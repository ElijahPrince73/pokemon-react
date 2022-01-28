import React from 'react';
import './index.css';

function PokemonBaseInfo({ height, weight, abilities }) {
  return (
    <div className="pokemon-base-info">
      <p>{height / 3.049}</p>
      <p>{weight / 45.359}</p>
      <span>&#9794; &#9792;</span>
      {abilities.map(({ ability }) => (
        <p key={ability.name}>{ability.name}</p>
      ))}
    </div>
  );
}

export default PokemonBaseInfo;

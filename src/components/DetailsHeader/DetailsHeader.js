import React from 'react';
import { Link } from 'react-router-dom';

function DetailsHeader({ evolutionChain, pokemonId }) {
  const newEvoChain = evolutionChain.filter((item) => item.id !== pokemonId);

  return (
    <div className="flex">
      {pokemonId === 1 ? (
        <Link to="/pokemon/898">
          <p>calyrex #898</p>
        </Link>
      ) : null}

      {newEvoChain.map(({ name, id }, index) => (
        <div>
          <Link to={`/pokemon/${id}`}>
            <p>{name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DetailsHeader;

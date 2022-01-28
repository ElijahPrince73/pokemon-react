import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import './index.css';

import { usePokemonContext } from '../../context/PokemonContext';

function PokemonList() {
  const pokemonData = usePokemonContext();
  return (
    <div className="pokemon-container">
      {pokemonData.map(({ data: { species, sprites, types, id } }) => (
        <PokemonCard
          species={species}
          sprites={sprites}
          types={types}
          id={id}
          key={id}
        />
      ))}
    </div>
  );
}

PokemonList.defaultProps = {
  pokemonData: [],
};

export default PokemonList;

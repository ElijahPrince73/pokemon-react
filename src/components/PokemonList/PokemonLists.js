import React from 'react';
import { usePokemonContext } from '../../context/AllPokemonContext/AllPokemonContext';
import PokemonCard from '../PokemonCard/PokemonCard';

function PokemonList() {
  const pokemonData = usePokemonContext();
  return (
    <div className="container">
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

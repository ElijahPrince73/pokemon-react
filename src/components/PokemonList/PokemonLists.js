import React from 'react';
import { usePokemonContext } from '../../context/AllPokemonContext/AllPokemonContext';
import PokemonCard from '../PokemonCard/PokemonCard';
import Loader from '../Loader/Loader';

function PokemonList() {
  const { allPokemon, fetchPokemon, loading } = usePokemonContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="container">
        {allPokemon.map(({ data: { species, sprites, types, id } }) => (
          <PokemonCard
            species={species}
            sprites={sprites}
            types={types}
            id={id}
            key={id}
          />
        ))}
      </div>
      <div className="text-center">
        <button className="btn-blue hover" type="button" onClick={fetchPokemon}>
          Load More Pokemon
        </button>
      </div>
    </>
  );
}

PokemonList.defaultProps = {
  pokemonData: [],
};

export default PokemonList;

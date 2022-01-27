import React from 'react';
import PropTypes from 'prop-types';
import PokeCard from '../PokeCard/PokeCard';

function PokemonList({ pokemonData }) {
  console.log(pokemonData);
  return (
    <div className="pokemon-grid">
      {pokemonData.map(({ data: { species, sprites, types, id } }) => (
        <PokeCard
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

PokemonList.propTypes = {
  pokemonData: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        species: PropTypes.shape({ name: PropTypes.string }),
        sprites: PropTypes.shape({ front_shiny: PropTypes.string }),
        types: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
      })
    )
  ),
};

export default PokemonList;
